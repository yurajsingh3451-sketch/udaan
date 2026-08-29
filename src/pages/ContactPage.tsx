import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { 
  COUNSELLING_PHONE_DISPLAY, 
  COUNSELLING_PHONE_RAW,
  openWhatsAppCounselling 
} from '../utils/whatsapp';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Automated transfer to WhatsApp on 6264749993
    openWhatsAppCounselling({
      name: formData.name,
      phone: formData.phone,
      courseInterest: formData.message,
      mode: 'Contact Form Automated WhatsApp Transfer',
      queryType: 'general'
    });
  };

  const handleDirectWhatsApp = () => {
    openWhatsAppCounselling({
      name: formData.name || 'Aspirant',
      phone: formData.phone || '',
      courseInterest: formData.message || '1-to-1 UPSC Counselling & Strategy Session',
      mode: 'Direct WhatsApp 1-to-1 Connect',
      queryType: 'counselling'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-100 px-3 py-1 rounded">
            Get in Touch
          </span>
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
            Visit Our Raipur Campus or Reach Out Online
          </h1>
          <p className="text-base text-slate-600">
            Our academic counselors are available 7 days a week on WhatsApp and offline at Civil Lines to guide your UPSC journey.
          </p>
        </div>

        {/* Highlight 1-to-1 WhatsApp Automation Card */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-navy-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold uppercase tracking-wider text-emerald-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant 1-to-1 WhatsApp Counselling Automation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Direct Mentor Chat on {COUNSELLING_PHONE_DISPLAY}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
              Book a personal roadmap session directly with our Academic Director. Automated WhatsApp routing delivers instant response for syllabus planning, batch schedules, and scholarship guidance.
            </p>
          </div>

          <button
            id="contact-instant-whatsapp-btn"
            onClick={handleDirectWhatsApp}
            className="px-6 py-3.5 bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-sm rounded-2xl shadow-lg transition-all flex items-center space-x-2 group cursor-pointer flex-shrink-0"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span>Launch WhatsApp 1-to-1 ({COUNSELLING_PHONE_RAW})</span>
            <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info */}
          <div className="lg:col-span-5 bg-navy-900 text-white p-8 rounded-3xl shadow-navy space-y-6">
            <h2 className="text-2xl font-bold text-white">UDAAN IAS Academy</h2>
            <p className="text-sm text-slate-300">Central India's leading civil services ecosystem.</p>

            <div className="space-y-4 text-xs text-slate-300 pt-2">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>3rd Floor, UDAAN Tower, Near Raj Bhavan Square, Civil Lines, Raipur, Chhattisgarh - 492001</span>
              </div>
              
              {/* WhatsApp 1-to-1 Direct item */}
              <div 
                onClick={handleDirectWhatsApp}
                className="flex items-center space-x-3 p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 hover:text-white hover:bg-emerald-900/80 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="font-bold block text-white">1-to-1 WhatsApp Counselling:</span>
                  <span className="font-mono text-emerald-300 font-bold">{COUNSELLING_PHONE_DISPLAY} (Direct Automation)</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>+91 771-492-8000 (Campus Reception)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>admissions@udaanupscraipur.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>Office Hours: 07:30 AM – 08:30 PM (Daily)</span>
              </div>
            </div>

            {/* Campus Map Simulation */}
            <div className="rounded-2xl overflow-hidden h-44 bg-navy-950 border border-navy-800 relative flex items-center justify-center text-center p-4">
              <div>
                <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-1 animate-bounce" />
                <p className="text-xs font-bold text-white">Civil Lines Raipur Main Center</p>
                <p className="text-[10px] text-slate-400">1.2 km from Raipur Junction • Opposite SBI Main Branch</p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-card">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Message Forwarded to WhatsApp!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you {formData.name}. We have transferred your inquiry directly to our senior mentor on <strong>{COUNSELLING_PHONE_DISPLAY}</strong>.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                  <button
                    id="contact-reopen-whatsapp-btn"
                    onClick={handleDirectWhatsApp}
                    className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat Again</span>
                  </button>
                  <button
                    id="send-another-inquiry-btn"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 text-xs font-bold text-navy-800 bg-navy-50 rounded-xl cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-navy-900">Send an Inquiry / Book Slot</h3>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Auto-WhatsApp Transfer
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    id="contact-input-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone (WhatsApp)</label>
                    <input
                      id="contact-input-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      id="contact-input-email"
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">How Can We Help You?</label>
                  <textarea
                    id="contact-input-message"
                    rows={4}
                    required
                    placeholder="Tell us about your target attempt year, graduation background or course queries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600"
                  />
                </div>
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  className="w-full py-3.5 text-center text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Submit & Transfer to WhatsApp 1-to-1 ({COUNSELLING_PHONE_RAW})</span>
                </button>
                <div className="flex items-center justify-center space-x-1.5 text-[10px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct 1-to-1 automation with senior academic counselor</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
