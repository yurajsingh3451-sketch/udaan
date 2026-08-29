import React, { useState } from 'react';
import { CheckCircle2, Clock, Calendar, Users, ShieldCheck, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { COURSES } from '../data/mockData';
import { 
  COUNSELLING_PHONE_DISPLAY, 
  COUNSELLING_PHONE_RAW,
  openWhatsAppCounselling 
} from '../utils/whatsapp';

interface CourseDetailsPageProps {
  courseId: string;
  setActivePage: (page: string) => void;
  openCounsellingModal: () => void;
}

export default function CourseDetailsPage({ courseId, setActivePage, openCounsellingModal }: CourseDetailsPageProps) {
  const course = COURSES.find(c => c.id === courseId) || COURSES[0];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can I switch between Offline Raipur and Live Online classes if I travel?",
      a: "Yes. All enrolled students receive 100% hybrid backup. If you miss a classroom lecture in Raipur, the complete session with teacher audio and whiteboard notes is uploaded to your Student Portal within 4 hours."
    },
    {
      q: "How does the daily answer evaluation system function?",
      a: "Students receive 2 daily Mains questions based on the morning lecture. You submit handwritten answer sheets directly in class or upload scans on the portal. Copies are returned with detailed remarks within 48 hours."
    },
    {
      q: "What is the fee installment structure for this course?",
      a: "We offer 2-part and 3-part zero-interest installment options as well as education loan facilitation with leading national banks."
    },
    {
      q: "Are the study material booklets provided in Hindi or English?",
      a: "UDAAN provides separate, fully updated bilingual study material sets in both English and Hindi mediums."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
          <button onClick={() => setActivePage('home')} className="hover:text-navy-900 cursor-pointer">Home</button>
          <span>/</span>
          <button onClick={() => setActivePage('courses')} className="hover:text-navy-900 cursor-pointer">Courses</button>
          <span>/</span>
          <span className="text-navy-900">{course.title}</span>
        </div>

        {/* Course Hero Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-navy-900 text-white">
                  {course.badge}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-blue-100 text-navy-800">
                  {course.category}
                </span>
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded">
                  Target: {course.targetYear}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-snug">
                {course.title}
              </h1>

              <p className="text-base text-slate-600 leading-relaxed">
                {course.overview}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-700 font-semibold">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-navy-600" />
                  <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-navy-600" />
                  <span>Mode: {course.mode}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-navy-600" />
                  <span>Next Batch: {course.nextBatch}</span>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-4 bg-navy-900 text-white p-6 rounded-2xl shadow-navy space-y-5">
              <div>
                <p className="text-xs text-slate-400 font-medium">Standard Admission Fee</p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-extrabold text-white">₹{course.price.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-slate-400 line-through">₹{course.originalPrice.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-[11px] text-emerald-400 font-semibold mt-1">Inclusive of GST, Hardcopy Books & Test Series</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-navy-800 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Includes 22 Printed Booklet Set</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Full Abhyas Test Series Included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>1-on-1 Bureaucrat Mentorship</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button 
                  id="enroll-in-course-btn"
                  onClick={() => { setActivePage('registration'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full py-3 text-center text-sm font-bold text-navy-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Enroll in this Course
                </button>
                <button 
                  id="whatsapp-course-inquiry-btn"
                  onClick={() => openWhatsAppCounselling({
                    courseInterest: course.title,
                    mode: 'Course Page 1-to-1 Inquiry',
                    queryType: 'admission'
                  })}
                  className="w-full py-2.5 text-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>1-to-1 WhatsApp Chat ({COUNSELLING_PHONE_RAW})</span>
                </button>
                <button 
                  id="request-syllabus-pdf-btn"
                  onClick={openCounsellingModal}
                  className="w-full py-2 text-center text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Request Detailed Syllabus PDF / Slot
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Curriculum & Methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {/* What You Will Learn */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-card space-y-6">
              <h2 className="text-2xl font-bold text-navy-900">What This Program Covers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-navy-700 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subjects Covered */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-card space-y-6">
              <h2 className="text-2xl font-bold text-navy-900">Structured Module Breakdown</h2>
              <div className="space-y-3 text-sm">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <p className="font-bold text-navy-900">Module 1: General Studies Paper 1 (Heritage, Geography & Society)</p>
                  <p className="text-xs text-slate-600 mt-1">Ancient, Medieval & Modern Indian History, Art & Culture, World Geography and Indian Social Structure.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <p className="font-bold text-navy-900">Module 2: General Studies Paper 2 (Polity, Constitution & IR)</p>
                  <p className="text-xs text-slate-600 mt-1">Indian Constitution, Governance, Social Justice, Supreme Court Judgments, Geopolitics and International Institutions.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <p className="font-bold text-navy-900">Module 3: General Studies Paper 3 (Economy, Tech & Security)</p>
                  <p className="text-xs text-slate-600 mt-1">Indian Macroeconomics, Budget, Agriculture, Science & Technology, Biodiversity, Climate Change and Internal Security.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <p className="font-bold text-navy-900">Module 4: General Studies Paper 4 (Ethics, Integrity & Case Studies)</p>
                  <p className="text-xs text-slate-600 mt-1">Moral Thinkers, Ethical Dilemmas in Public Administration, Emotional Intelligence, and 50+ Real Administrative Case Studies.</p>
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-card space-y-4">
              <h2 className="text-2xl font-bold text-navy-900">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 text-left flex justify-between items-center font-bold text-sm text-navy-900 bg-slate-50/60 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 text-xs text-slate-600 bg-white border-t border-slate-200 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Raipur Campus Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-4">
              <h3 className="font-bold text-base text-navy-900">Attend at Raipur Campus</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Experience high-tech smart classrooms with individual ergonomic seating, digital smartboards, and air-conditioned library access in Civil Lines, Raipur.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 font-medium space-y-1">
                <p className="font-bold text-navy-900">Batch Timing Options:</p>
                <p>• Morning Batch: 08:00 AM – 11:30 AM</p>
                <p>• Evening Batch: 04:30 PM – 08:00 PM</p>
              </div>
              <button 
                id="schedule-campus-visit-btn"
                onClick={openCounsellingModal}
                className="w-full py-2.5 text-center text-xs font-bold text-navy-800 bg-navy-50 hover:bg-navy-100 rounded-xl transition-colors cursor-pointer"
              >
                Schedule Campus Visit
              </button>
            </div>

            {/* Mentorship Guarantee */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 rounded-2xl border border-blue-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-navy-900">The UDAAN Mentorship Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You are never left alone in a huge crowd. Every registered student is paired with a dedicated mentor for bi-weekly progress audits until the final interview.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
