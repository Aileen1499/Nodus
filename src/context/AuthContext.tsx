import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from '../lib/firebase';
import { getUserProfile, createUserProfile, UserProfile } from '../lib/db';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  authError: string | null;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
  refreshUserProfile: () => Promise<void>;
  isFirebaseActive: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const clearError = () => setAuthError(null);

  // Sync auth state
  useEffect(() => {
    if (!auth || !isFirebaseConfigured) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const profile = await createUserProfile(currentUser.uid, {
            email: currentUser.email,
            displayName: currentUser.displayName || 'Learner',
            photoURL: currentUser.photoURL,
          });
          setUserProfile(profile);
        } catch (e) {
          console.warn('Failed to initialize user profile on auth change:', e);
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const refreshUserProfile = async () => {
    if (user) {
      const profile = await getUserProfile(user.uid);
      if (profile) setUserProfile(profile);
    }
  };

  const signInWithGoogle = async () => {
    clearError();
    if (!auth || !isFirebaseConfigured) {
      // Mock sign in for offline/unconfigured environments
      const mockUser = {
        uid: 'mock-google-user-123',
        email: 'executive@nodus.ai',
        displayName: 'Executive Leader',
        photoURL: null,
      } as unknown as User;
      setUser(mockUser);
      setUserProfile({
        uid: 'mock-google-user-123',
        email: 'executive@nodus.ai',
        displayName: 'Executive Leader',
        photoURL: null,
        rp: 180,
        streak: 3,
        credits: 3,
        isPro: false,
        lastActiveDate: new Date().toISOString().split('T')[0],
        createdAt: new Date().toISOString(),
      });
      return;
    }

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const profile = await createUserProfile(result.user.uid, {
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
      });
      setUserProfile(profile);
    } catch (error: any) {
      console.error('Google Sign-In Error:', error);
      setAuthError(error?.message || 'Gagal masuk dengan Google. Silakan coba lagi.');
      throw error;
    }
  };

  const signInWithEmail = async (email: string, pass: string) => {
    clearError();
    if (!auth || !isFirebaseConfigured) {
      const mockUser = {
        uid: `mock-email-${Date.now()}`,
        email,
        displayName: email.split('@')[0],
        photoURL: null,
      } as unknown as User;
      setUser(mockUser);
      setUserProfile({
        uid: mockUser.uid,
        email,
        displayName: email.split('@')[0],
        photoURL: null,
        rp: 150,
        streak: 2,
        credits: 3,
        isPro: false,
        lastActiveDate: new Date().toISOString().split('T')[0],
        createdAt: new Date().toISOString(),
      });
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, pass);
      const profile = await getUserProfile(result.user.uid);
      setUserProfile(profile);
    } catch (error: any) {
      console.error('Email Sign-In Error:', error);
      let msg = 'Gagal masuk. Periksa kembali email dan kata sandi Anda.';
      if (error?.code === 'auth/user-not-found' || error?.code === 'auth/wrong-password') {
        msg = 'Email atau kata sandi tidak sesuai.';
      } else if (error?.code === 'auth/invalid-email') {
        msg = 'Format alamat email tidak valid.';
      }
      setAuthError(msg);
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, pass: string, name: string) => {
    clearError();
    if (!auth || !isFirebaseConfigured) {
      const mockUser = {
        uid: `mock-user-${Date.now()}`,
        email,
        displayName: name || email.split('@')[0],
        photoURL: null,
      } as unknown as User;
      setUser(mockUser);
      setUserProfile({
        uid: mockUser.uid,
        email,
        displayName: name || email.split('@')[0],
        photoURL: null,
        rp: 120,
        streak: 1,
        credits: 3,
        isPro: false,
        lastActiveDate: new Date().toISOString().split('T')[0],
        createdAt: new Date().toISOString(),
      });
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, pass);
      if (auth.currentUser && name) {
        await updateProfile(auth.currentUser, { displayName: name });
      }
      const profile = await createUserProfile(result.user.uid, {
        email,
        displayName: name,
      });
      setUserProfile(profile);
    } catch (error: any) {
      console.error('Sign-Up Error:', error);
      let msg = 'Gagal mendaftar akun baru. Silakan coba lagi.';
      if (error?.code === 'auth/email-already-in-use') {
        msg = 'Email ini sudah terdaftar. Silakan gunakan email lain atau masuk.';
      } else if (error?.code === 'auth/weak-password') {
        msg = 'Kata sandi terlalu pendek. Gunakan minimal 6 karakter.';
      }
      setAuthError(msg);
      throw error;
    }
  };

  const logout = async () => {
    if (auth && isFirebaseConfigured) {
      try {
        await signOut(auth);
      } catch (e) {
        console.warn('SignOut error:', e);
      }
    }
    setUser(null);
    setUserProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        authError,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        logout,
        clearError,
        refreshUserProfile,
        isFirebaseActive: isFirebaseConfigured,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
