import React from 'react';
import { ShieldCheck, Target, Users } from 'lucide-react';

interface AboutPageProps {
  setActivePage: (page: string) => void;
  openCounsellingModal: () => void;
}

export default function AboutPage({ setActivePage, openCounsellingModal }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-100 px-3 py-1 rounded">
            Our Legacy & Mission
          </span>
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
            Empowering Civil Services Aspirants in Chhattisgarh
          </h1>
          <p className="text-base text-slate-600">
            Founded with the conviction that quality UPSC guidance should not require relocating to expensive metros, UDAAN delivers Delhi-caliber faculty, rigorous testing, and bureaucrat mentoring in Raipur.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-navy-800 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To build Chhattisgarh's highest-density administrative talent hub, producing honest, empathetic, and academically brilliant civil servants for the nation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-navy-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">Our Pedagogy</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Strict 360-degree integration: NCERT foundation → Standard reference mastery → Daily evaluated answer writing → Weekly simulator tests.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-navy-800 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">Mentorship First</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We reject impersonal mega-batches. Every classroom is capped at 60 students to ensure every teacher knows your strengths and weaknesses.
            </p>
          </div>
        </div>

        {/* Campus & Infrastructure Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-600 bg-navy-50 px-3 py-1 rounded">
              Infrastructure
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900">The Civil Lines Raipur Campus</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Located in the heart of Raipur's administrative hub near Raj Bhavan, our campus houses state-of-the-art smart lecture theatres, a 120-seat air-conditioned reference library, dedicated discussion rooms, and an evaluation chamber.
            </p>
            <div className="space-y-2 text-xs text-slate-700 font-semibold pt-2">
              <p>• 100% Power Backed Smartboards & Recording Studio</p>
              <p>• High-Speed Fiber Internet & Digital E-Library</p>
              <p>• 24x7 Silent Study Cubicles for Enrolled Aspirants</p>
            </div>
            <div className="pt-2">
              <button 
                id="about-book-visit-btn"
                onClick={openCounsellingModal}
                className="px-6 py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-all cursor-pointer"
              >
                Book Campus Visit & Meet Director
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-card h-80 bg-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" 
              alt="UDAAN Raipur Campus Library" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
