import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { 
  X, 
  Crown, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  MessageCircle,
  Clock
} from 'lucide-react';

interface PaywallModalProps {
  onClose: () => void;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({ onClose }) => {
  const { isPro, activatePro } = useUser();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'lifetime'>('lifetime');
  const [isActivated, setIsActivated] = useState(false);

  const handleActivateDemo = () => {
    activatePro();
    setIsActivated(true);
    setTimeout(() => {
      onClose();
    }, 1800);
  };

  const handleWhatsAppCheckout = () => {
    const planText = selectedPlan === 'lifetime' 
      ? 'Founding Member Lifetime (Rp 499.000)' 
      : 'Executive Monthly Pass (Rp 99.000/bln)';
    const message = encodeURIComponent(
      `Halo Tim NODUS, saya ingin berlangganan paket ${planText} untuk akses tanpa batas ke Knowledge Graph & Decision Simulation System.`
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-5 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="flex flex-col w-full max-w-lg max-h-[92vh] rounded-[32px] border border-indigo-500/40 bg-[#F4F7FC] dark:bg-[#0B0F19] shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden transition-colors duration-300">
        
        {/* Banner Glow Header */}
        <div className="relative border-b border-indigo-500/30 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 p-6 text-white text-center overflow-hidden">
          <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-400 to-indigo-500 p-[1.5px] shadow-lg shadow-indigo-500/30 mb-2.5">
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-900 text-amber-400">
              <Crown className="h-6 w-6" />
            </div>
          </div>

          <span className="rounded-full bg-amber-400/20 px-3 py-0.5 text-[10px] font-black uppercase tracking-widest text-amber-300 border border-amber-400/30">
            Akses Eksklusif Tanpa Batas
          </span>

          <h3 className="mt-2 text-xl sm:text-2xl font-black text-white">
            Tingkatkan ke NODUS PRO
          </h3>
          <p className="mt-1 text-xs text-slate-300 max-w-sm mx-auto">
            Kuota harian gratis telah habis. Buka akses penuh ke seluruh jalur pengetahuan dan simulasi eksekutif.
          </p>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          
          {/* Feature Checklist */}
          <div className="space-y-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              Keuntungan Member Pro:
            </h4>
            {[
              'Akses Deep-Dive AI Gemini Tanpa Batas (Bebas kuota 3/hari)',
              'Buka Semua 7 Jalur Kurikulum: Finansial, Makro, Ekspor-Impor, Negosiasi, Excel, Hukum & Pajak',
              'Simulasi Keputusan Bisnis Nyata & Feedback Rasionalitas Mendalam',
              'Sinkronisasi Real-Time Profil Kognitif & Lencana Prestasi di Cloud',
              'Prioritas Model AI Generasi Baru (Gemini 2.0 Flash Reasoning)',
            ].map((perk, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                <span className="leading-relaxed">{perk}</span>
              </div>
            ))}
          </div>

          {/* Pricing Tiers Selection */}
          <div className="grid grid-cols-2 gap-3">
            
            {/* Monthly Plan */}
            <div
              onClick={() => setSelectedPlan('monthly')}
              className={`relative rounded-2xl border p-4 cursor-pointer transition-all ${
                selectedPlan === 'monthly'
                  ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-500/15 ring-2 ring-indigo-500/40'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white mb-1">
                <Clock className="h-3.5 w-3.5 text-indigo-500" />
                <span>Bulanan</span>
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                Rp 99.000
              </div>
              <p className="text-[10px] text-slate-500 mt-0.5">per bulan, batal kapan saja</p>
            </div>

            {/* Lifetime Plan */}
            <div
              onClick={() => setSelectedPlan('lifetime')}
              className={`relative rounded-2xl border p-4 cursor-pointer transition-all ${
                selectedPlan === 'lifetime'
                  ? 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-500/15 ring-2 ring-emerald-500/40'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-400'
              }`}
            >
              <span className="absolute -top-2.5 right-3 rounded-full bg-emerald-500 px-2 py-0.2 text-[9px] font-black text-white shadow-sm">
                HEMAT 75%
              </span>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white mb-1">
                <Crown className="h-3.5 w-3.5 text-amber-500" />
                <span>Founding Pass</span>
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                Rp 499.000
              </div>
              <p className="text-[10px] text-slate-500 mt-0.5">sekali bayar seumur hidup</p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-1">
            <button
              onClick={handleWhatsAppCheckout}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:opacity-95 transition-all active:scale-[0.99]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Berlangganan via WhatsApp Official</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Instant Demo Activation button */}
            <button
              onClick={handleActivateDemo}
              disabled={isActivated || isPro}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-500/10 py-2.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors"
            >
              <Zap className="h-3.5 w-3.5" />
              <span>
                {isActivated || isPro
                  ? 'Akses Pro Berhasil Diaktifkan!'
                  : 'Coba Gratis Mode Pro (Instant Test Activate)'}
              </span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
