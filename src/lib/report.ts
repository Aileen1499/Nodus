import { SUPABASE_KEY, SUPABASE_URL, deviceId } from './waitlist';

export type ReportKind = 'salah' | 'usang' | 'membingungkan' | 'lainnya';

/** Kirim laporan kesalahan konten ke Supabase (tabel tertutup; hanya fungsi tervalidasi yang boleh menulis). */
export const reportContent = async (nodeId: string, kind: ReportKind, note: string): Promise<boolean> => {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/report_content`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
      body: JSON.stringify({ p_node_id: nodeId, p_kind: kind, p_note: note.trim().slice(0, 1000) || null, p_device: deviceId() }),
    });
    return res.ok;
  } catch {
    return false;
  }
};
