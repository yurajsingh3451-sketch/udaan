import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { RANKERS } from '../data/mockData';

interface ResultsPageProps {
  setActivePage: (page: string) => void;
  openCounsellingModal: () => void;
}

export default function ResultsPage({ setActivePage, openCounsellingModal }: ResultsPageProps) {
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredRankers = selectedYear === 'All' 
    ? RANKERS 
    : RANKERS.filter(r => r.year === selectedYear);

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
            <Award className="w-4 h-4" />
            <span>Hall of Fame • Selections</span>
          </div>
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
            Results That Inspire the Next Generation
          </h1>
          <p className="text-base text-slate-600">
            Celebrating our students who cleared the Civil Services Examination with distinction through disciplined study and targeted mentoring at UDAAN.
          </p>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            DEMO RESULTS — Presentation Sample Data
          </p>
        </div>

        {/* Year Filter Tabs */}
        <div className="flex justify-center space-x-2">
          {['All', 'UPSC CSE 2024', 'UPSC CSE 2023'].map((yr) => (
            <button
              key={yr}
              id={`ranker-year-${yr.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedYear(yr)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedYear === yr
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {yr}
            </button>
          ))}
        </div>

        {/* Rankers Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRankers.map((ranker, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <img 
                    src={ranker.photo} 
                    alt={ranker.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-navy-900 text-amber-400 font-extrabold text-xs px-2.5 py-1 rounded shadow-md border border-amber-400/30">
                    {ranker.rank}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent p-4 text-white">
                    <p className="font-extrabold text-lg leading-tight">{ranker.name}</p>
                    <p className="text-xs font-semibold text-amber-400">{ranker.service}</p>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span>{ranker.year}</span>
                    <span>{ranker.attempt}</span>
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "{ranker.quote}"
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-navy-800">
                  <span>Optional: {ranker.optional}</span>
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspiring Bottom Card */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Want to See Your Name on This Board Next Year?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book a 1-on-1 counseling session with our academic mentors to formulate a personalized, achievable timetable.
          </p>
          <button 
            id="results-start-journey-btn"
            onClick={openCounsellingModal}
            className="px-8 py-3.5 text-sm font-bold text-navy-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md cursor-pointer"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
}
