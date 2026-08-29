import React, { useState } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { 
  COUNSELLING_PHONE_DISPLAY, 
  openWhatsAppCounselling 
} from '../utils/whatsapp';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [targetYear, setTargetYear] = useState('UPSC CSE 2026');
  const [courseInterest, setCourseInterest] = useState('SAMARTH 2-Year Foundation');

  const handleInstantTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppCounselling({
      name: studentName,
      targetYear,
      courseInterest,
      mode: 'WhatsApp Automated Direct Transfer'
    });
    setIsOpen(false);
  };

  const handleDirectOneClick = (topic?: string) => {
    openWhatsAppCounselling({
      name: studentName || 'Aspirant',
      targetYear,
      courseInterest: topic || courseInterest,
      mode: 'Instant 1-Click WhatsApp Transfer'
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 select-none">
      {/* Expanded Quick Automated Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white p-4 relative">
            <button
              id="close-whatsapp-widget-btn"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-navy-900 rounded-full animate-pulse" />
              </div>

              <div>
                <div className="flex items-center space-x-1.5">
                  <h4 className="font-bold text-sm text-white">1-to-1 UPSC Counselling</h4>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-400/30">
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">Senior Academic Mentor Active</p>
                <p className="text-[10px] font-mono text-amber-400 font-semibold mt-0.5">{COUNSELLING_PHONE_DISPLAY}</p>
              </div>
            </div>
          </div>

          {/* Quick Body */}
          <div className="p-4 space-y-3 bg-slate-50/50">
            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200/80 text-xs text-emerald-900 space-y-1">
              <p className="font-bold flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                Instant WhatsApp Automation
              </p>
              <p className="text-[11px] text-emerald-800 leading-snug">
                Click below to instantly transfer to a 1-to-1 WhatsApp consultation with our Raipur academic director on <strong>{COUNSELLING_PHONE_DISPLAY}</strong>.
              </p>
            </div>

            {/* Quick action chips */}
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Quick 1-Click Transfers:</p>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleDirectOneClick('2-Year Foundation (SAMARTH)')}
                  className="p-2 text-left bg-white border border-slate-200 hover:border-emerald-500 rounded-xl text-[11px] font-semibold text-slate-700 hover:text-emerald-700 transition-all cursor-pointer shadow-2xs"
                >
                  ⚡ SAMARTH 2-Yr Batch
                </button>
                <button
                  type="button"
                  onClick={() => handleDirectOneClick('1-Year Integrated (LAKSHYA)')}
                  className="p-2 text-left bg-white border border-slate-200 hover:border-emerald-500 rounded-xl text-[11px] font-semibold text-slate-700 hover:text-emerald-700 transition-all cursor-pointer shadow-2xs"
                >
                  ⚡ 1-Yr Integrated Batch
                </button>
                <button
                  type="button"
                  onClick={() => handleDirectOneClick('Mains Answer Writing & Evaluation')}
                  className="p-2 text-left bg-white border border-slate-200 hover:border-emerald-500 rounded-xl text-[11px] font-semibold text-slate-700 hover:text-emerald-700 transition-all cursor-pointer shadow-2xs"
                >
                  ⚡ Mains Answer Writing
                </button>
                <button
                  type="button"
                  onClick={() => handleDirectOneClick('U-SAT 50% Scholarship Fee')}
                  className="p-2 text-left bg-white border border-slate-200 hover:border-emerald-500 rounded-xl text-[11px] font-semibold text-slate-700 hover:text-emerald-700 transition-all cursor-pointer shadow-2xs"
                >
                  ⚡ Scholarship Fee Waiver
                </button>
              </div>
            </div>

            {/* Fast Form */}
            <form onSubmit={handleInstantTransfer} className="space-y-2 pt-1">
              <input
                id="whatsapp-widget-input-name"
                type="text"
                placeholder="Your Name (Optional)"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none focus:border-emerald-600"
              />

              <div className="grid grid-cols-2 gap-2">
                <select
                  value={targetYear}
                  onChange={(e) => setTargetYear(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-xl outline-none"
                >
                  <option>UPSC CSE 2026</option>
                  <option>UPSC CSE 2027</option>
                  <option>UPSC CSE 2025</option>
                </select>

                <select
                  value={courseInterest}
                  onChange={(e) => setCourseInterest(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-xl outline-none truncate"
                >
                  <option>Foundation Batch</option>
                  <option>Mains Answer Writing</option>
                  <option>Optional Subject</option>
                  <option>Test Series (ABHYAS)</option>
                  <option>Direct Mentor Slot</option>
                </select>
              </div>

              <button
                id="whatsapp-widget-submit-btn"
                type="submit"
                className="w-full py-2.5 text-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start 1-to-1 WhatsApp Chat Now</span>
              </button>
            </form>

            <div className="flex items-center justify-center space-x-1 text-[10px] text-slate-400 font-medium pt-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>Automated Direct Redirect to +91 62647-49993</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        id="floating-whatsapp-automation-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2.5 bg-emerald-500 hover:bg-emerald-600 text-white pl-3.5 pr-4.5 py-3 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 cursor-pointer"
        aria-label="1-to-1 WhatsApp Counselling Automation"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        
        <div className="text-left leading-tight hidden sm:block">
          <span className="block text-[11px] font-extrabold uppercase tracking-wider text-emerald-100">
            1-to-1 WhatsApp Mentorship
          </span>
          <span className="block text-xs font-bold text-white">
            62647-49993 (Instant Connect)
          </span>
        </div>

        <span className="sm:hidden text-xs font-bold">1-to-1 Chat</span>
      </button>
    </div>
  );
}
