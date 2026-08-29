import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  UserCheck, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { 
  COUNSELLING_PHONE_DISPLAY, 
  openWhatsAppCounselling 
} from '../utils/whatsapp';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  openCounsellingModal: () => void;
  openScholarshipModal: () => void;
}

export default function Navbar({ activePage, setActivePage, openCounsellingModal, openScholarshipModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
    setResourcesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-slate-100 py-3' 
        : 'bg-white border-b border-slate-100 py-4'
    }`}>
      {/* Top micro announcement bar */}
      <div className="hidden lg:block bg-navy-900 text-white text-xs py-1.5 px-6 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-navy-950 uppercase tracking-wider">
              Admissions Open 2025-26
            </span>
            <span className="text-slate-300">
              New UPSC Integrated Foundation Batches starting June 15 at Civil Lines Campus, Raipur.
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              id="header-usat-btn"
              onClick={openScholarshipModal}
              className="text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-1 font-semibold cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>U-SAT Scholarship (Up to 50% Off)</span>
            </button>
            <span className="text-slate-500">|</span>
            <button 
              id="header-whatsapp-counselling-btn"
              onClick={() => openWhatsAppCounselling({ queryType: 'counselling' })}
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center space-x-1 font-bold cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>1-to-1 Counselling: {COUNSELLING_PHONE_DISPLAY}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div 
            id="brand-logo-btn"
            onClick={() => navigate('home')} 
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-600 flex items-center justify-center text-white shadow-navy group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-amber-400 font-serif">U</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-navy-900">UDAAN</span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-blue-50 text-navy-700 border border-blue-100">IAS</span>
              </div>
              <p className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">Raipur, Chhattisgarh</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-700">
            <button 
              id="nav-home-btn"
              onClick={() => navigate('home')}
              className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${activePage === 'home' ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'}`}
            >
              Home
            </button>

            {/* Courses Dropdown */}
            <div className="relative" onMouseLeave={() => setCoursesDropdownOpen(false)}>
              <button 
                id="nav-courses-dropdown-btn"
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                onClick={() => navigate('courses')}
                className={`px-3.5 py-2 rounded-lg transition-colors inline-flex items-center space-x-1 cursor-pointer ${['courses', 'course-details'].includes(activePage) ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'}`}
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-navy-900" />
              </button>

              {coursesDropdownOpen && (
                <div 
                  onMouseEnter={() => setCoursesDropdownOpen(true)}
                  className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-card-hover border border-slate-100 p-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="p-2 border-b border-slate-100 mb-1">
                    <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">UPSC Programs</p>
                  </div>
                  <button onClick={() => navigate('courses')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-navy-50 hover:text-navy-900 transition-colors flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-navy-900">2-Year Foundation (SAMARTH)</p>
                      <p className="text-xs text-slate-500">For Undergraduates & Beginners</p>
                    </div>
                  </button>
                  <button onClick={() => navigate('courses')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-navy-50 hover:text-navy-900 transition-colors flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-navy-900">1-Year Integrated (LAKSHYA)</p>
                      <p className="text-xs text-slate-500">Prelims + Mains Classroom</p>
                    </div>
                  </button>
                  <button onClick={() => navigate('courses')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-navy-50 hover:text-navy-900 transition-colors flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-navy-900">Prelims Booster (GATI)</p>
                      <p className="text-xs text-slate-500">Crash Course + CSAT</p>
                    </div>
                  </button>
                  <button onClick={() => navigate('courses')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-navy-50 hover:text-navy-900 transition-colors flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-navy-900">Mains Answer Writing (NIRMAN)</p>
                      <p className="text-xs text-slate-500">48h Evaluated GS 1-4 & Essay</p>
                    </div>
                  </button>
                  <div className="pt-2 border-t border-slate-100 mt-1">
                    <button onClick={() => navigate('courses')} className="w-full text-center text-xs font-bold text-navy-600 hover:text-navy-800 py-1.5 cursor-pointer">
                      View Full Course Directory →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              id="nav-batches-btn"
              onClick={() => navigate('batches')}
              className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${activePage === 'batches' ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'}`}
            >
              Batches
            </button>

            <button 
              id="nav-test-series-btn"
              onClick={() => navigate('test-series')}
              className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${activePage === 'test-series' ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'}`}
            >
              Test Series
            </button>

            <button 
              id="nav-results-btn"
              onClick={() => navigate('results')}
              className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${activePage === 'results' ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'}`}
            >
              Results
            </button>

            <button 
              id="nav-faculty-btn"
              onClick={() => navigate('faculty')}
              className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${activePage === 'faculty' ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'}`}
            >
              Faculty
            </button>

            {/* Resources Dropdown */}
            <div className="relative" onMouseLeave={() => setResourcesDropdownOpen(false)}>
              <button 
                id="nav-resources-dropdown-btn"
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                className={`px-3.5 py-2 rounded-lg transition-colors inline-flex items-center space-x-1 cursor-pointer ${['current-affairs', 'study-material', 'events'].includes(activePage) ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'}`}
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {resourcesDropdownOpen && (
                <div 
                  onMouseEnter={() => setResourcesDropdownOpen(true)}
                  className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-card-hover border border-slate-100 p-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <button onClick={() => navigate('current-affairs')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-navy-50 hover:text-navy-900 transition-colors cursor-pointer">
                    <p className="text-sm font-semibold text-slate-800">Daily Current Affairs</p>
                    <p className="text-xs text-slate-500">Editorials, Notes & MCQs</p>
                  </button>
                  <button onClick={() => navigate('study-material')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-navy-50 hover:text-navy-900 transition-colors cursor-pointer">
                    <p className="text-sm font-semibold text-slate-800">Study Material & Mindmaps</p>
                    <p className="text-xs text-slate-500">NCERTs, PYQs & Value Add</p>
                  </button>
                  <button onClick={() => navigate('events')} className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-navy-50 hover:text-navy-900 transition-colors cursor-pointer">
                    <p className="text-sm font-semibold text-slate-800">Seminars & Workshops</p>
                    <p className="text-xs text-slate-500">Raipur Offline Sessions</p>
                  </button>
                </div>
              )}
            </div>

            <button 
              id="nav-about-btn"
              onClick={() => navigate('about')}
              className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${activePage === 'about' ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'}`}
            >
              About
            </button>

            <button 
              id="nav-contact-btn"
              onClick={() => navigate('contact')}
              className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${activePage === 'contact' ? 'text-navy-900 font-bold bg-navy-50' : 'hover:text-navy-900 hover:bg-slate-50'}`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Student Portal Login button */}
            <button 
              id="nav-student-portal-btn"
              onClick={() => navigate('student-portal')}
              className="px-4 py-2 text-sm font-semibold text-navy-800 bg-navy-50 hover:bg-navy-100 rounded-lg transition-all border border-blue-100 flex items-center space-x-1.5 cursor-pointer"
            >
              <UserCheck className="w-4 h-4 text-navy-700" />
              <span>Student Portal</span>
            </button>

            {/* Admin Switch */}
            <button 
              id="nav-admin-portal-btn"
              onClick={() => navigate('admin-portal')}
              title="Demo Admin View"
              className="p-2 text-xs font-semibold text-slate-500 hover:text-navy-900 hover:bg-slate-100 rounded-lg transition-colors border border-transparent cursor-pointer"
            >
              Admin
            </button>

            {/* High Conversion CTA */}
            <button 
              id="nav-enroll-now-btn"
              onClick={() => navigate('registration')}
              className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-navy-900 to-navy-800 hover:from-navy-800 hover:to-navy-700 rounded-lg shadow-sm hover:shadow-navy transition-all duration-200 flex items-center space-x-1.5 group cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button 
              id="mobile-portal-btn"
              onClick={() => navigate('student-portal')}
              className="px-3 py-1.5 text-xs font-semibold text-navy-800 bg-navy-50 rounded-lg cursor-pointer"
            >
              Portal
            </button>
            <button 
              id="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-white border-b border-slate-200 shadow-2xl p-5 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200 z-50">
          <div className="flex flex-col space-y-2">
            <button onClick={() => navigate('home')} className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-navy-50">Home</button>
            <button onClick={() => navigate('courses')} className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-navy-50">All Courses & Programs</button>
            <button onClick={() => navigate('batches')} className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-navy-50">Upcoming Batches 2025-26</button>
            <button onClick={() => navigate('test-series')} className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-navy-50">All India Test Series</button>
            <button onClick={() => navigate('results')} className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-navy-50">UPSC Selections & Ranks</button>
            <button onClick={() => navigate('faculty')} className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-navy-50">Our Expert Faculty</button>
            <button onClick={() => navigate('current-affairs')} className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-navy-50">Daily Current Affairs</button>
            <button onClick={() => navigate('study-material')} className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-navy-50">Study Material & PYQs</button>
            <button onClick={() => navigate('events')} className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-navy-50">Events & Raipur Seminars</button>
            <button onClick={() => navigate('about')} className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-navy-50">About UDAAN Institute</button>
            <button onClick={() => navigate('contact')} className="text-left px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-navy-50">Contact & Campus Directions</button>
            
            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2.5">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsAppCounselling({ queryType: 'counselling' });
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>1-to-1 WhatsApp Mentorship ({COUNSELLING_PHONE_DISPLAY})</span>
              </button>
              <button 
                onClick={() => { openCounsellingModal(); setMobileMenuOpen(false); }}
                className="w-full py-2.5 text-center text-sm font-bold text-navy-800 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
              >
                Book Free 1-on-1 Counselling
              </button>
              <button 
                onClick={() => navigate('registration')}
                className="w-full py-2.5 text-center text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm cursor-pointer"
              >
                Enroll Now
              </button>
              <div className="flex justify-between items-center pt-2">
                <button onClick={() => navigate('student-portal')} className="text-xs text-navy-600 font-semibold underline cursor-pointer">Student Portal</button>
                <button onClick={() => navigate('admin-portal')} className="text-xs text-slate-400 font-semibold underline cursor-pointer">Admin Dashboard Demo</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
