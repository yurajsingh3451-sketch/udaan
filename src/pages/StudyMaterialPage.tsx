import React from 'react';
import { STUDY_RESOURCES } from '../data/mockData';
import { Download } from 'lucide-react';

export default function StudyMaterialPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-100 px-3 py-1 rounded">
            Resource Library
          </span>
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
            Free UPSC Study Material & PYQ Banks
          </h1>
          <p className="text-base text-slate-600">
            Download high-yield revision mindmaps, segregated past 10-year question banks, and concise standard book summaries curated by UDAAN experts.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDY_RESOURCES.map((res) => (
            <div key={res.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 text-navy-700">
                    {res.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{res.pages}</span>
                </div>
                <h3 className="text-base font-bold text-navy-900 leading-snug">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">Downloads: {res.downloads}</p>
              </div>

              <button 
                id={`download-res-${res.id}`}
                onClick={() => alert(`Starting download for: ${res.title}`)}
                className="w-full py-2.5 text-center text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-colors shadow-sm flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Free PDF</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
