import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  BarChart3,
  MessageCircle
} from 'lucide-react';
import { COURSES, BATCHES, RANKERS, FACULTY_MEMBERS, CURRENT_AFFAIRS_ARTICLES, EVENTS_DATA } from '../data/mockData';
import { 
  COUNSELLING_PHONE_DISPLAY, 
  COUNSELLING_PHONE_RAW,
  openWhatsAppCounselling 
} from '../utils/whatsapp';

interface HomePageProps {
  setActivePage: (page: string) => void;
  setSelectedCourseId: (id: string) => void;
  openCounsellingModal: () => void;
  openScholarshipModal: () => void;
}

export default function HomePage({ setActivePage, setSelectedCourseId, openCounsellingModal, openScholarshipModal }: HomePageProps) {
  const [activeBatchIndex, setActiveBatchIndex] = useState(0);

  const navigateToCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setActivePage('course-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextBatch = () => {
    setActiveBatchIndex((prev) => (prev + 1) % BATCHES.length);
  };

  const handlePrevBatch = () => {
    setActiveBatchIndex((prev) => (prev - 1 + BATCHES.length) % BATCHES.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50/60 via-white to-white pt-10 pb-20 lg:pt-16 lg:pb-28">
        {/* Subtle geometric background grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B1B3D08_1px,transparent_1px),linear-gradient(to_bottom,#0B1B3D08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-navy-100 border border-blue-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-navy-800">
                  UPSC Civil Services Preparation • Raipur Campus
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.12]">
                Prepare Today. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 via-blue-700 to-navy-900">
                  Serve Tomorrow.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
                Structured classroom pedagogy, daily evaluated answer writing, and 1-on-1 bureaucrat mentorship for serious UPSC civil services aspirants in Chhattisgarh.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <button 
                  id="hero-explore-courses-btn"
                  onClick={() => { setActivePage('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-7 py-3.5 text-base font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl shadow-navy hover:shadow-card-hover transition-all duration-200 flex items-center justify-center space-x-2 group cursor-pointer"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button 
                  id="hero-book-counselling-btn"
                  onClick={openCounsellingModal}
                  className="px-7 py-3.5 text-base font-bold text-navy-900 bg-white hover:bg-navy-50 rounded-xl border-2 border-navy-900/15 shadow-sm transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-navy-700" />
                  <span>Book Free Counselling</span>
                </button>
              </div>

              {/* Trust Indicators Pill */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Offline Raipur + Live Interactive</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>48-Hour Answer Evaluation</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Dedicated Personal Mentor</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card */}
                <div className="relative rounded-2xl bg-white p-3 shadow-card-hover border border-slate-200/80">
                  <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden bg-navy-900">
                    <img 
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                      alt="UDAAN Raipur UPSC Classroom" 
                      className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                    
                    {/* Floating Overlay Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-amber-500 text-navy-950 text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Civil Lines Campus • Raipur</span>
                      </div>
                      <p className="text-base font-bold text-white">Interactive Mains Strategy Seminar</p>
                      <p className="text-xs text-slate-300">Live lecture with Ex-Civil Servants & Subject Matter Experts</p>
                    </div>
                  </div>
                </div>

                {/* Floating Ranker Badge */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-xl shadow-card border border-slate-100 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-extrabold text-sm">
                    AIR 27
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-900">Ananya Sharma (IAS)</p>
                    <p className="text-[10px] text-slate-500">UDAAN Foundation Cohort</p>
                  </div>
                </div>

                {/* Floating Test Series Badge */}
                <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-navy-900 text-white p-3.5 rounded-xl shadow-navy border border-navy-700 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">AI Test Analytics</p>
                    <p className="text-[10px] text-slate-300">Instant All India Benchmarking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST STRIP */}
      <section className="bg-navy-900 text-white py-8 border-y border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-amber-400">10+ Years</p>
              <p className="text-xs font-medium text-slate-300">Academic Pedagogy</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-white">2,500+</p>
              <p className="text-xs font-medium text-slate-300">Aspirants Mentored</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-amber-400">150+ Selections*</p>
              <p className="text-xs font-medium text-slate-300 flex items-center justify-center space-x-1">
                <span>Civil Services & State PSC</span>
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-extrabold text-white">50+ Mentors</p>
              <p className="text-xs font-medium text-slate-300">Faculty & Evaluators</p>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-1">
              <p className="text-3xl font-extrabold text-amber-400">Raipur, CG</p>
              <p className="text-xs font-medium text-slate-300">Civil Lines Main Campus</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold bg-navy-950/60 px-3 py-1 rounded-full border border-navy-800">
              * DEMO DATA — Illustrative figures for presentation purposes
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY UDAAN */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-blue-100 text-navy-800 text-xs font-bold uppercase tracking-wider">
                Our Advantage
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                A Smarter, Disciplined Way to Crack UPSC.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                UDAAN moves away from superficial mass coaching. We engineer a high-intensity learning ecosystem where concept clarity, answer structuring, and stress resilience are nurtured step-by-step.
              </p>
              <div className="pt-2">
                <button 
                  id="why-udaan-philosophy-btn"
                  onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-navy-700 hover:text-navy-900 group cursor-pointer"
                >
                  <span>Read Our Full Teaching Philosophy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right 4 Concise Benefits Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-navy-700 flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Integrated Prelims + Mains</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No isolated rote learning. Every topic is taught from conceptual depth for Prelims and analytical dimension for GS 1-4 papers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-navy-700 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">1-on-1 Bureaucrat Mentorship</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Direct fortnightly reviews with mentors to audit study hours, identify knowledge blindspots, and refine answer writing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-navy-700 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">48h Answer Evaluation</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Micro-feedback on introduction hooks, body sub-headings, flowchart placement, and conclusion summary on every test.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-navy-700 flex items-center justify-center font-bold mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">AI-Powered Performance Portal</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Granular speed-vs-accuracy analysis and topic-wise weakness radar charts updated with every test submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COURSES PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-navy-600 bg-navy-50 px-3 py-1 rounded">
                Flagship Curricula
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Find the Right Path for Your UPSC Journey
              </h2>
              <p className="text-base text-slate-600 max-w-xl">
                Rigorous classroom & hybrid programs engineered for undergraduate beginners to seasoned re-attempters.
              </p>
            </div>
            <button 
              id="courses-preview-all-btn"
              onClick={() => { setActivePage('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-bold text-navy-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <span>View All Courses & Fee Structure</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course) => (
              <div 
                key={course.id} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Banner */}
                  <div className="p-6 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-navy-900 text-white">
                        {course.badge}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" /> {course.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-1">Target: {course.targetYear}</p>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {course.tagline}
                    </p>

                    <div className="space-y-2 pt-2">
                      {course.features.slice(0, 3).map((feat, idx) => (
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
                          <span className="text-xs font-normal text-slate-500"> (incl. GST)</span>
                        </p>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        Save 18%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => navigateToCourse(course.id)}
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
        </div>
      </section>

      {/* SECTION 5: UPCOMING BATCHES */}
      <section className="py-20 bg-navy-50/50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-600 bg-white px-3 py-1 rounded border border-blue-100">
                Admissions Open 2025-26
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-2">
                Upcoming Batches in Raipur
              </h2>
            </div>

            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <button 
                id="batch-prev-btn"
                onClick={handlePrevBatch}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-navy-50 transition-colors cursor-pointer"
                aria-label="Previous Batch"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                id="batch-next-btn"
                onClick={handleNextBatch}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-navy-50 transition-colors cursor-pointer"
                aria-label="Next Batch"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BATCHES.slice(0, 3).map((batch) => (
              <div key={batch.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-4 hover:border-navy-300 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {batch.status}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{batch.duration}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy-900 leading-snug">{batch.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{batch.courseName}</p>
                </div>

                <div className="space-y-2 py-2 border-y border-slate-100 text-xs text-slate-700 font-medium">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Commencement:</span>
                    <span className="font-bold text-navy-900">{batch.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Session Timing:</span>
                    <span className="font-bold text-navy-900">{batch.timing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Venue / Mode:</span>
                    <span className="font-semibold text-slate-800">{batch.mode}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-slate-500">Available Seats:</span>
                    <div className="w-28 bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-navy-800 h-full rounded-full" 
                        style={{ width: `${(batch.seatsFilled / batch.seatsTotal) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button 
                    onClick={() => { setActivePage('batches'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-xs font-bold text-navy-600 hover:text-navy-900 cursor-pointer"
                  >
                    View Batch Timetable →
                  </button>
                  <button 
                    onClick={() => { setActivePage('registration'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="px-4 py-2 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm cursor-pointer"
                  >
                    Reserve Seat
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button 
              id="view-all-batches-footer-btn"
              onClick={() => { setActivePage('batches'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-sm font-bold text-navy-800 hover:underline cursor-pointer"
            >
              Explore All Batches & Download Academic Calendar →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: RESULTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200">
              DEMO RESULTS — SAMPLE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Success Stories That Inspire the Next Cohort
            </h2>
            <p className="text-base text-slate-600">
              Aspirants who trusted UDAAN's rigorous syllabus coverage and evaluated test feedback to achieve top ranks in the Civil Services Examination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RANKERS.map((ranker, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all text-left">
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <img 
                    src={ranker.photo} 
                    alt={ranker.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-navy-900 text-amber-400 font-extrabold text-xs px-2.5 py-1 rounded-md shadow-md border border-amber-400/30">
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
                    <span>Opt: {ranker.optional}</span>
                  </div>
                  <p className="text-xs text-slate-600 italic line-clamp-3 leading-relaxed">
                    "{ranker.quote}"
                  </p>
                  <p className="text-[11px] text-slate-500 font-semibold pt-2 border-t border-slate-100">
                    Course: {ranker.course}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button 
              id="view-results-hall-of-fame-btn"
              onClick={() => { setActivePage('results'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-6 py-3 text-sm font-bold text-navy-900 bg-navy-50 hover:bg-navy-100 rounded-xl transition-all border border-blue-100 cursor-pointer"
            >
              View Full Hall of Fame & Toppers' Copies →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: FACULTY PREVIEW */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-navy-600 bg-white px-3 py-1 rounded border border-blue-100">
                Academic Leadership
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
                Mentored by Renowned UPSC Educators
              </h2>
              <p className="text-base text-slate-600 max-w-xl">
                A faculty board with decades of combined experience, published academic works, and civil services interview credentials.
              </p>
            </div>

            <button 
              id="view-all-faculty-btn"
              onClick={() => { setActivePage('faculty'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-4 md:mt-0 text-sm font-bold text-navy-800 hover:text-blue-600 transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <span>View All 18+ Faculty Members</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY_MEMBERS.slice(0, 4).map((member, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all text-left space-y-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-200 mx-auto shadow-sm">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-bold text-base text-navy-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-blue-600">{member.subject}</p>
                  <p className="text-[11px] text-slate-500 font-medium">{member.experience} Teaching Exp.</p>
                </div>
                <p className="text-xs text-slate-600 text-center line-clamp-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TEST SERIES FEATURE */}
      <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-navy-800 border border-navy-700 text-amber-400 text-xs font-bold uppercase tracking-wider">
                ABHYAS All India Test Series
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Test. Analyse. Improve. Repeat.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                UPSC cannot be cracked by passive reading. ABHYAS simulates exact exam conditions, strict time limits, and negative marking hazards with granular AI diagnostic reports.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
                  <p className="text-2xl font-extrabold text-amber-400">45+ Tests</p>
                  <p className="text-xs text-slate-300 mt-1">GS Sectional, Full Simulator & CSAT</p>
                </div>
                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
                  <p className="text-2xl font-extrabold text-amber-400">48h SLA</p>
                  <p className="text-xs text-slate-300 mt-1">Line-by-line Mains answer evaluation</p>
                </div>
                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
                  <p className="text-2xl font-extrabold text-amber-400">AIR Ranking</p>
                  <p className="text-xs text-slate-300 mt-1">Benchmarking across 8,000+ test-takers</p>
                </div>
                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800">
                  <p className="text-2xl font-extrabold text-amber-400">Video Solutions</p>
                  <p className="text-xs text-slate-300 mt-1">Micro-concept breakdown by faculty</p>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  id="explore-test-series-btn"
                  onClick={() => { setActivePage('test-series'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-6 py-3 text-sm font-bold text-navy-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md flex items-center space-x-2 cursor-pointer"
                >
                  <span>Explore Test Series Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Test Series Scorecard Mockup */}
            <div className="lg:col-span-6 bg-navy-900 rounded-2xl p-6 border border-navy-800 shadow-navy space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-navy-800">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Sample Diagnostic Scorecard</p>
                  <p className="text-sm font-bold text-white">GS Full Simulator Mock 08 (UPSC 2025)</p>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-1 rounded">
                  Percentile: 94.8%
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-navy-950 p-3 rounded-xl border border-navy-800">
                  <p className="text-xs text-slate-400">Score</p>
                  <p className="text-xl font-bold text-white">124.66 <span className="text-xs text-slate-500">/ 200</span></p>
                </div>
                <div className="bg-navy-950 p-3 rounded-xl border border-navy-800">
                  <p className="text-xs text-slate-400">Accuracy</p>
                  <p className="text-xl font-bold text-emerald-400">79.2%</p>
                </div>
                <div className="bg-navy-950 p-3 rounded-xl border border-navy-800">
                  <p className="text-xs text-slate-400">Rank (AIR)</p>
                  <p className="text-xl font-bold text-amber-400">142 <span className="text-xs text-slate-500">/ 4,200</span></p>
                </div>
              </div>

              {/* Subject Breakdown Bars */}
              <div className="space-y-2 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-slate-300">Polity & Governance</span>
                    <span className="text-emerald-400 font-bold">88% (High Strong)</span>
                  </div>
                  <div className="w-full bg-navy-950 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-slate-300">Economy & Budget</span>
                    <span className="text-blue-400 font-bold">74% (Solid)</span>
                  </div>
                  <div className="w-full bg-navy-950 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '74%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-slate-300">Environment & Ecology</span>
                    <span className="text-amber-400 font-bold">58% (Revision Required)</span>
                  </div>
                  <div className="w-full bg-navy-950 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '58%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: STUDENT PORTAL TECH EXPERIENCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-900 via-navy-850 to-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-card-hover overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/20">
                  UDAAN EdTech Ecosystem
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Seamless Tech-Enabled Learning For Every Enrolled Aspirant
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  Every classroom student gets full access to our proprietary Student Portal: high-definition lecture recordings, automated answer evaluation tracking, 1-on-1 mentor booking, and downloadable study notes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center space-x-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Live & Recorded Lecture Player</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Daily Mains Answer Upload Portal</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>1-on-1 Mentor Slot Booking</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Digital Study Material Locker</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button 
                    id="launch-student-portal-btn"
                    onClick={() => { setActivePage('student-portal'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="px-6 py-3 text-sm font-bold text-navy-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md flex items-center space-x-2 cursor-pointer"
                  >
                    <span>Launch Student Portal Demo</span>
                    <ArrowRight className="w-4 h-4 text-navy-900" />
                  </button>
                </div>
              </div>

              {/* Portal Graphic UI Preview */}
              <div className="lg:col-span-5 bg-navy-950 p-5 rounded-2xl border border-navy-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-navy-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">portal.udaanupscraipur.com</span>
                </div>

                <div className="bg-navy-900 p-3.5 rounded-xl border border-navy-800 space-y-2">
                  <p className="text-xs font-bold text-amber-400">Next Scheduled Session</p>
                  <p className="text-sm font-bold text-white">Polity GS-2: Judicial Review & Basic Structure</p>
                  <p className="text-xs text-slate-400">Live in 35 mins • Dr. Vikramaditya Sharma</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-navy-900 p-3 rounded-xl border border-navy-800 text-center">
                    <p className="text-xs text-slate-400">Mains Answers</p>
                    <p className="text-lg font-bold text-emerald-400">24 Evaluated</p>
                  </div>
                  <div className="bg-navy-900 p-3 rounded-xl border border-navy-800 text-center">
                    <p className="text-xs text-slate-400">Mentor Call</p>
                    <p className="text-lg font-bold text-blue-400">Booked (Fri)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: CURRENT AFFAIRS PREVIEW */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-600 bg-white px-3 py-1 rounded border border-blue-100">
                Daily Exam Relevance
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-2">
                Daily UPSC Current Affairs & Editorial Decodes
              </h2>
            </div>
            <button 
              id="explore-current-affairs-btn"
              onClick={() => { setActivePage('current-affairs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-4 md:mt-0 text-sm font-bold text-navy-800 hover:text-blue-600 transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <span>Explore Current Affairs Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CURRENT_AFFAIRS_ARTICLES.map((art) => (
              <div key={art.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-navy-700 bg-navy-50 px-2.5 py-1 rounded">
                      {art.category}
                    </span>
                    <span className="text-slate-400 font-medium">{art.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base text-navy-900 leading-snug hover:text-blue-700 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">{art.date}</span>
                  <button 
                    onClick={() => { setActivePage('current-affairs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-xs font-bold text-navy-700 hover:text-navy-900 cursor-pointer"
                  >
                    Read Analysis →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: UPCOMING EVENTS & SEMINARS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-600 bg-navy-50 px-3 py-1 rounded">
                Campus Activities
              </span>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight mt-2">
                Seminars, Workshops & Scholarship Tests
              </h2>
            </div>
            <button 
              id="view-all-events-btn"
              onClick={() => { setActivePage('events'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-4 sm:mt-0 text-sm font-bold text-navy-800 hover:underline cursor-pointer"
            >
              View Full Event Calendar →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS_DATA.map((evt) => (
              <div key={evt.id} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 shadow-xs hover:bg-white hover:shadow-card transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-navy-900 text-white">
                    {evt.type}
                  </span>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {evt.seatsLeft} Seats Left
                  </span>
                </div>

                <h3 className="font-bold text-base text-navy-900 leading-snug">{evt.title}</h3>

                <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5 text-navy-600" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-navy-600" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-navy-600 font-bold">•</span>
                    <span>Lead: {evt.speaker}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={openCounsellingModal}
                    className="w-full py-2.5 text-center text-xs font-bold text-navy-900 bg-white hover:bg-navy-100 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                  >
                    Register for Free Seat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: COUNSELLING CTA STRIP */}
      <section className="py-16 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-navy-800 px-3 py-1 rounded border border-amber-400/20">
                1-on-1 Strategy Session
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Not Sure Where to Begin Your UPSC Journey?
              </h2>
              <p className="text-sm text-slate-300">
                Sit down with a senior UDAAN mentor at our Raipur campus or over phone to map your customized attempt strategy, optional selection, and study timetable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button 
                id="bottom-book-counselling-btn"
                onClick={openCounsellingModal}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-navy-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Book Free Counselling Session
              </button>
              <button 
                id="whatsapp-cta-link"
                onClick={() => openWhatsAppCounselling({ queryType: 'counselling' })}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl border border-emerald-500 shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>1-to-1 WhatsApp ({COUNSELLING_PHONE_DISPLAY})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL INSPIRATIONAL CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Your Civil Services Journey Starts With One Decision.
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Join hundreds of aspirants from Raipur, Bilaspur, Durg, Bhilai and beyond who are training with national-standard pedagogy right in Chhattisgarh.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button 
              id="final-cta-explore-courses-btn"
              onClick={() => { setActivePage('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl shadow-navy transition-all cursor-pointer"
            >
              Explore All Courses
            </button>
            <button 
              id="final-cta-usat-btn"
              onClick={openScholarshipModal}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-navy-900 bg-amber-50 hover:bg-amber-100 rounded-xl border border-amber-300 transition-all cursor-pointer"
            >
              Take 50% Scholarship Test (U-SAT)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
