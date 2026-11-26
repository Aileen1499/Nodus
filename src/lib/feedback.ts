import { SUPABASE_URL, SUPABASE_KEY, deviceId } from './waitlist';

export const sendFeedback = async (message: string, name?: string): Promise<boolean> => {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/send_feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
      body: JSON.stringify({ p_device: deviceId(), p_message: message.trim().slice(0, 2000), p_name: name || null }),
    });
    return res.ok && (await res.json()) === true;
  } catch { return false; }
};
