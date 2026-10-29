import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  rp: number;
  streak: number;
  credits: number; // Daily deep-dive quota (e.g. 3 for free users)
  isPro: boolean;
  lastActiveDate: string;
  createdAt: string;
}

export const getTodayDateString = (): string => {
  return new Date().toISOString().split('T')[0];
};

export const DEFAULT_FREE_CREDITS = 3;

/**
 * Fetch user document from Firestore `users` collection
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  if (!db || !isFirebaseConfigured) return null;

  try {
    const userDocRef = doc(db, 'users', uid);
    const snap = await getDoc(userDocRef);
    if (snap.exists()) {
      return snap.data() as UserProfile;
    }
  } catch (error) {
    console.warn('Error fetching user profile from Firestore:', error);
  }
  return null;
}

/**
 * Create or merge user profile in Firestore
 */
export async function createUserProfile(
  uid: string,
  initialData: Partial<UserProfile>
): Promise<UserProfile> {
  const today = getTodayDateString();
  const defaultProfile: UserProfile = {
    uid,
    email: initialData.email || null,
    displayName: initialData.displayName || 'Learner',
    photoURL: initialData.photoURL || null,
    rp: initialData.rp ?? 120,
    streak: initialData.streak ?? 1,
    credits: initialData.credits ?? DEFAULT_FREE_CREDITS,
    isPro: initialData.isPro ?? false,
    lastActiveDate: today,
    createdAt: new Date().toISOString(),
  };

  if (!db || !isFirebaseConfigured) {
    return defaultProfile;
  }

  try {
    const userDocRef = doc(db, 'users', uid);
    const existing = await getDoc(userDocRef);

    if (existing.exists()) {
      const current = existing.data() as UserProfile;
      // Refresh credits if on a new day
      let credits = current.credits;
      if (current.lastActiveDate !== today && !current.isPro) {
        credits = DEFAULT_FREE_CREDITS;
      }
      const updated: UserProfile = {
        ...current,
        displayName: initialData.displayName || current.displayName,
        photoURL: initialData.photoURL || current.photoURL,
        credits,
        lastActiveDate: today,
      };
      await updateDoc(userDocRef, { ...updated });
      return updated;
    } else {
      await setDoc(userDocRef, defaultProfile);
      return defaultProfile;
    }
  } catch (error) {
    console.warn('Error writing user profile to Firestore:', error);
    return defaultProfile;
  }
}

/**
 * Synchronize Rank Points (RP) to Firestore in real-time
 */
export async function syncUserRP(uid: string, newRP: number): Promise<void> {
  if (!db || !isFirebaseConfigured) return;

  try {
    const userDocRef = doc(db, 'users', uid);
    await updateDoc(userDocRef, {
      rp: newRP,
      lastActiveDate: getTodayDateString(),
    });
  } catch (error) {
    console.warn('Error syncing RP to Firestore:', error);
  }
}

/**
 * Synchronize remaining Deep-Dive credits to Firestore
 */
export async function syncUserCredits(uid: string, credits: number): Promise<void> {
  if (!db || !isFirebaseConfigured) return;

  try {
    const userDocRef = doc(db, 'users', uid);
    await updateDoc(userDocRef, {
      credits: Math.max(0, credits),
    });
  } catch (error) {
    console.warn('Error syncing credits to Firestore:', error);
  }
}

/**
 * Synchronize mastered nodes to `user_progress` collection in Firestore
 */
export async function syncUserMasteredNodes(uid: string, nodeIds: string[]): Promise<void> {
  if (!db || !isFirebaseConfigured) return;

  try {
    const progressDocRef = doc(db, 'user_progress', uid);
    await setDoc(progressDocRef, {
      masteredNodes: nodeIds,
      updatedAt: new Date().toISOString(),
    }, { merge: true });
  } catch (error) {
    console.warn('Error syncing user progress to Firestore:', error);
  }
}

/**
 * Get mastered nodes list from `user_progress` collection
 */
export async function getUserProgress(uid: string): Promise<string[]> {
  if (!db || !isFirebaseConfigured) return [];

  try {
    const progressDocRef = doc(db, 'user_progress', uid);
    const snap = await getDoc(progressDocRef);
    if (snap.exists()) {
      return (snap.data().masteredNodes as string[]) || [];
    }
  } catch (error) {
    console.warn('Error fetching user progress from Firestore:', error);
  }
  return [];
}

