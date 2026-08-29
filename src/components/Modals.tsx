import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { 
  COUNSELLING_PHONE_DISPLAY, 
  COUNSELLING_PHONE_RAW,
  openWhatsAppCounselling 
} from '../utils/whatsapp';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CounsellingModal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    targetYear: 'UPSC CSE 2026',
    mode: 'Raipur Civil Lines Campus (In-Person)',
    courseInterest: 'SAMARTH 2-Year Foundation (Prelims + Mains)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Automated Direct Transfer to WhatsApp on 6264749993
    openWhatsAppCounselling({
      name: formData.name,
      phone: formData.phone,
      targetYear: formData.targetYear,
      mode: formData.mode,
      courseInterest: formData.courseInterest,
      queryType: 'counselling'
    });
  };

  const handleInstantWhatsAppClick = () => {
    openWhatsAppCounselling({
      name: formData.name || 'Civil Services Aspirant',
      phone: formData.phone || '',
      targetYear: formData.targetYear,
      mode: formData.mode,
      courseInterest: formData.courseInterest,
      queryType: 'counselling'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        <button 
          id="close-counselling-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-navy-900 hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                Automated WhatsApp Transfer Activated
              </span>
              <h3 className="text-2xl font-extrabold text-navy-900">1-to-1 Slot Connected!</h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
              We have forwarded your details to our Senior Academic Director on WhatsApp (<strong>{COUNSELLING_PHONE_DISPLAY}</strong>). If the chat did not open automatically, click the button below.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
              <p><span className="font-bold text-navy-900">Aspirant Name:</span> {formData.name}</p>
              <p><span className="font-bold text-navy-900">Phone:</span> {formData.phone}</p>
              <p><span className="font-bold text-navy-900">Target Year:</span> {formData.targetYear}</p>
              <p><span className="font-bold text-navy-900">Assigned Counselor WhatsApp:</span> <span className="font-mono font-bold text-emerald-700">{COUNSELLING_PHONE_DISPLAY}</span></p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button 
                id="reopen-whatsapp-chat-btn"
                onClick={handleInstantWhatsAppClick}
                className="flex-1 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat Again</span>
              </button>

              <button 
                id="counselling-modal-done-btn"
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-6 py-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse" />
                  Live WhatsApp Automation
                </span>
                <span className="text-[11px] font-bold text-slate-500 font-mono">
                  {COUNSELLING_PHONE_DISPLAY}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900">Book 1-to-1 UPSC Counselling</h3>
              <p className="text-xs text-slate-500">
                Directly connect with Senior UPSC Mentors for personalized attempt planning, syllabus breakdown, and optional choice.
              </p>
            </div>

            {/* Quick 1-Click WhatsApp Shortcut Banner */}
            <div 
              onClick={handleInstantWhatsAppClick}
              className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl flex items-center justify-between cursor-pointer hover:border-emerald-400 transition-all group"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-950">Skip Form & Direct WhatsApp</p>
                  <p className="text-[10px] text-emerald-700">Instant 1-to-1 chat on {COUNSELLING_PHONE_DISPLAY}</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
              <input 
                id="counselling-input-name"
                type="text" 
                required 
                placeholder="e.g. Priyanka Verma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-600 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile (WhatsApp)</label>
                <input 
                  id="counselling-input-phone"
                  type="tel" 
                  required 
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Target Attempt</label>
                <select 
                  id="counselling-select-year"
                  value={formData.targetYear}
                  onChange={(e) => setFormData({ ...formData, targetYear: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-600 outline-none"
                >
                  <option>UPSC CSE 2026</option>
                  <option>UPSC CSE 2027</option>
                  <option>UPSC CSE 2025</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Program of Interest</label>
              <select 
                id="counselling-select-course"
                value={formData.courseInterest}
                onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-600 outline-none"
              >
                <option>SAMARTH 2-Year Foundation (Prelims + Mains)</option>
                <option>LAKSHYA 1-Year Integrated Classroom</option>
                <option>NIRMAN Mains Evaluated Answer Writing</option>
                <option>GATI Prelims Booster Crash Course</option>
                <option>PSIR / Sociology / Geography Optional</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Consultation Mode</label>
              <select 
                id="counselling-select-mode"
                value={formData.mode}
                onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-600 outline-none"
              >
                <option>Raipur Civil Lines Campus (In-Person)</option>
                <option>Direct WhatsApp Video / Audio Call (+91 62647-49993)</option>
                <option>Telephonic Call with Senior Mentor</option>
                <option>Google Meet / Zoom Consultation</option>
              </select>
            </div>

            <button 
              id="counselling-form-submit-btn"
              type="submit"
              className="w-full py-3.5 text-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm & Transfer to WhatsApp 1-to-1 ({COUNSELLING_PHONE_RAW})</span>
            </button>

            <div className="flex items-center justify-center space-x-1.5 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant direct WhatsApp automation technology • No wait time</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function ScholarshipModal({ isOpen, onClose }: ModalProps) {
  const [registered, setRegistered] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button 
          id="close-scholarship-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-navy-900 hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!registered ? (
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>U-SAT 2025 Scholarship</span>
            </div>

            <h3 className="text-2xl font-extrabold text-navy-900">
              Win Up To 50% Tuition Fee Waiver
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              UDAAN Scholarship & Aptitude Test (U-SAT) tests basic NCERT awareness, logical reasoning, and current affairs aptitude.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Test Date:</span>
                <span className="font-bold text-navy-900">Sunday, June 08, 2025 (11 AM)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Pattern:</span>
                <span className="font-bold text-navy-900">50 MCQs (General Knowledge & CSAT)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Exam Center:</span>
                <span className="font-bold text-navy-900">Civil Lines Campus, Raipur</span>
              </div>
            </div>

            <button 
              id="generate-hall-ticket-btn"
              onClick={() => setRegistered(true)}
              className="w-full py-3 text-center text-xs font-bold text-navy-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Generate Free Hall Ticket
            </button>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900">Hall Ticket Generated!</h3>
            <p className="text-xs text-slate-600">
              Registration No: <span className="font-mono font-bold text-navy-900">USAT-2025-4921</span>. We have sent the test link and reporting details to your registered phone.
            </p>
            <button 
              id="scholarship-modal-close-btn"
              onClick={() => { setRegistered(false); onClose(); }}
              className="px-6 py-2.5 text-xs font-bold text-white bg-navy-900 rounded-xl cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
