import React from 'react';
import { MapPin, Phone, Mail, Clock, Shield, ArrowUpRight, MessageCircle } from 'lucide-react';
import { 
  COUNSELLING_PHONE_DISPLAY, 
  COUNSELLING_PHONE_RAW,
  openWhatsAppCounselling 
} from '../utils/whatsapp';

interface FooterProps {
  setActivePage: (page: string) => void;
  openCounsellingModal: () => void;
  openScholarshipModal: () => void;
}

export default function Footer({ setActivePage, openCounsellingModal, openScholarshipModal }: FooterProps) {
  const navigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center text-amber-400 font-serif font-bold text-2xl">
                U
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white">UDAAN</span>
                <span className="text-[10px] ml-2 font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-navy-800 text-amber-400 border border-amber-500/30">IAS</span>
                <p className="text-xs text-slate-400">Civil Services Institute • Raipur</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              “Prepare Today. Serve Tomorrow.” Central India’s premier UPSC civil services ecosystem delivering structured classroom pedagogy, rigorous answer evaluation, and bureaucrat mentorship.
            </p>

            <div className="p-3 bg-navy-900/80 rounded-xl border border-navy-800 flex items-center space-x-3 text-xs text-slate-300">
              <Shield className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span>Official Raipur Campus • Reg. No. CG-UPSC/2016/482 • Certified Offline & EdTech Facility</span>
            </div>
          </div>

          {/* Quick Courses */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-amber-400 mb-4">UPSC Programs</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><button onClick={() => navigate('courses')} className="hover:text-white transition-colors cursor-pointer">SAMARTH: 2-Yr Foundation</button></li>
              <li><button onClick={() => navigate('courses')} className="hover:text-white transition-colors cursor-pointer">LAKSHYA: 1-Yr Integrated</button></li>
              <li><button onClick={() => navigate('courses')} className="hover:text-white transition-colors cursor-pointer">GATI: Prelims High-Yield</button></li>
              <li><button onClick={() => navigate('courses')} className="hover:text-white transition-colors cursor-pointer">NIRMAN: Mains Answer Writing</button></li>
              <li><button onClick={() => navigate('courses')} className="hover:text-white transition-colors cursor-pointer">PSIR & Sociology Optional</button></li>
              <li><button onClick={() => navigate('test-series')} className="hover:text-white transition-colors cursor-pointer">ABHYAS: Mock Test Series</button></li>
            </ul>
          </div>

          {/* Resources & Portal */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-amber-400 mb-4">Learning Hub</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><button onClick={() => navigate('current-affairs')} className="hover:text-white transition-colors cursor-pointer">Daily Editorial & Current Affairs</button></li>
              <li><button onClick={() => navigate('study-material')} className="hover:text-white transition-colors cursor-pointer">NCERT & PYQ Solved Banks</button></li>
              <li><button onClick={() => navigate('results')} className="hover:text-white transition-colors cursor-pointer">Selections & Ranker Copies</button></li>
              <li><button onClick={() => navigate('student-portal')} className="hover:text-white transition-colors flex items-center space-x-1 cursor-pointer"><span>Student Portal Login</span> <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" /></button></li>
              <li><button onClick={openScholarshipModal} className="text-amber-400 font-semibold hover:underline cursor-pointer">U-SAT 50% Scholarship Test</button></li>
              <li><button onClick={() => openWhatsAppCounselling({ queryType: 'counselling' })} className="text-emerald-400 font-semibold hover:underline cursor-pointer flex items-center space-x-1"><MessageCircle className="w-3 h-3" /><span>WhatsApp 1-to-1 Mentorship</span></button></li>
              <li><button onClick={openCounsellingModal} className="hover:text-white transition-colors cursor-pointer">Free Academic Counselling</button></li>
            </ul>
          </div>

          {/* Raipur Campus Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-amber-400 mb-4">Raipur Campus</h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>3rd Floor, UDAAN Tower, Near Raj Bhavan Square, Civil Lines, Raipur, Chhattisgarh - 492001</span>
              </div>
              <div 
                onClick={() => openWhatsAppCounselling({ queryType: 'counselling' })}
                className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 cursor-pointer font-semibold"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                <span>1-to-1 Counselling: {COUNSELLING_PHONE_DISPLAY}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+91 771-492-8000 / {COUNSELLING_PHONE_DISPLAY}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>admissions@udaanupscraipur.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Mon – Sun: 07:30 AM – 08:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-navy-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-semibold text-[10px] uppercase tracking-wider border border-amber-500/30">
              DEMO DATA NOTICE
            </span>
            <span>All student rankings, testimonials, and faculty profiles represent sample presentation architecture for UDAAN redesign.</span>
          </div>

          <div className="flex items-center space-x-6 text-slate-400">
            <span>© {new Date().getFullYear()} UDAAN IAS Academy Raipur. All Rights Reserved.</span>
            <button onClick={() => navigate('about')} className="hover:underline cursor-pointer">Privacy Policy</button>
            <button onClick={() => navigate('about')} className="hover:underline cursor-pointer">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
