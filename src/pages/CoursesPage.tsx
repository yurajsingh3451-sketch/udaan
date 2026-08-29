import React, { useState } from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import { COURSES } from '../data/mockData';

interface CoursesPageProps {
  setActivePage: (page: string) => void;
  setSelectedCourseId: (id: string) => void;
  openCounsellingModal: () => void;
}

export default function CoursesPage({ setActivePage, setSelectedCourseId, openCounsellingModal }: CoursesPageProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Foundation', 'Prelims & Mains', 'Prelims', 'Mains', 'Optional', 'Test Series'];

  const filteredCourses = activeFilter === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeFilter);

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setActivePage('course-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-100 px-3 py-1 rounded">
            Curriculum Catalogue 2025-26
          </span>
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
            Choose Your UPSC Preparation Program
          </h1>
          <p className="text-base text-slate-600">
            From two-year foundational journeys for college students to high-octane answer writing cohorts and test simulators.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Strip */}
                <div className="p-6 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-navy-900 text-white">
                      {course.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" /> {course.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Target Year: {course.targetYear}</p>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {course.tagline}
                  </p>

                  <div className="space-y-2 pt-2">
                    {course.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-navy-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 line-through">₹{course.originalPrice.toLocaleString('en-IN')}</span>
                      <p className="text-2xl font-extrabold text-navy-900">
                        ₹{course.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Mode: {course.mode.split(' ')[0]}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleSelectCourse(course.id)}
                  className="w-full py-2.5 text-center text-xs font-bold text-navy-800 bg-navy-50 hover:bg-navy-100 rounded-xl transition-colors cursor-pointer"
                >
                  View Details
                </button>
                <button 
                  onClick={() => { setActivePage('registration'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full py-2.5 text-center text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free Academic Consultation Banner */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-navy">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Need help choosing between 1-Year or 2-Year Foundation?</h3>
            <p className="text-sm text-slate-300">Book a 15-minute diagnostic session with our academic counselor at Raipur.</p>
          </div>
          <button 
            id="courses-consultation-counselling-btn"
            onClick={openCounsellingModal}
            className="px-6 py-3 text-sm font-bold text-navy-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex-shrink-0 cursor-pointer"
          >
            Book Free Counselling
          </button>
        </div>
      </div>
    </div>
  );
}
