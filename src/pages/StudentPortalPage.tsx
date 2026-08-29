import React, { useState } from 'react';
import { 
  BarChart3, 
  BookOpen, 
  Video, 
  FileText, 
  PhoneCall, 
  LogOut, 
  Download 
} from 'lucide-react';

interface StudentPortalPageProps {
  setActivePage: (page: string) => void;
}

export default function StudentPortalPage({ setActivePage }: StudentPortalPageProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const student = {
    name: "Aditya Sharma",
    rollNumber: "UDAAN/2025/F-104",
    course: "SAMARTH 2-Year Foundation (Prelims + Mains)",
    batch: "Morning Alpha (08:00 AM)",
    attendance: "94.2%",
    testsTaken: 18,
    avgScore: "118.4 / 200",
    mentor: "Dr. Vikramaditya Sharma"
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-navy-950 text-white flex-shrink-0 p-5 space-y-6 border-r border-navy-800">
        <div className="flex items-center space-x-3 pb-4 border-b border-navy-800">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-navy-950 font-bold flex items-center justify-center">
            U
          </div>
          <div>
            <p className="font-extrabold text-sm text-white">UDAAN Portal</p>
            <p className="text-[10px] text-slate-400 font-mono">{student.rollNumber}</p>
          </div>
        </div>

        <nav className="space-y-1 text-xs font-semibold">
          <button 
            id="portal-tab-dashboard"
            onClick={() => setActiveTab('dashboard')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center space-x-2.5 transition-colors cursor-pointer ${activeTab === 'dashboard' ? 'bg-blue-600 text-white font-bold' : 'text-slate-300 hover:bg-navy-900'}`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button 
            id="portal-tab-classes"
            onClick={() => setActiveTab('classes')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center space-x-2.5 transition-colors cursor-pointer ${activeTab === 'classes' ? 'bg-blue-600 text-white font-bold' : 'text-slate-300 hover:bg-navy-900'}`}
          >
            <Video className="w-4 h-4" />
            <span>Live & Recorded Classes</span>
          </button>
          <button 
            id="portal-tab-tests"
            onClick={() => setActiveTab('tests')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center space-x-2.5 transition-colors cursor-pointer ${activeTab === 'tests' ? 'bg-blue-600 text-white font-bold' : 'text-slate-300 hover:bg-navy-900'}`}
          >
            <FileText className="w-4 h-4" />
            <span>Tests & Answer Evaluation</span>
          </button>
          <button 
            id="portal-tab-locker"
            onClick={() => setActiveTab('locker')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center space-x-2.5 transition-colors cursor-pointer ${activeTab === 'locker' ? 'bg-blue-600 text-white font-bold' : 'text-slate-300 hover:bg-navy-900'}`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Study Material Locker</span>
          </button>
          <button 
            id="portal-tab-mentorship"
            onClick={() => setActiveTab('mentorship')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center space-x-2.5 transition-colors cursor-pointer ${activeTab === 'mentorship' ? 'bg-blue-600 text-white font-bold' : 'text-slate-300 hover:bg-navy-900'}`}
          >
            <PhoneCall className="w-4 h-4" />
            <span>1-on-1 Mentorship</span>
          </button>
        </nav>

        <div className="pt-6 border-t border-navy-800">
          <button 
            id="portal-exit-website-btn"
            onClick={() => setActivePage('home')}
            className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-navy-900 flex items-center space-x-2 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Exit to Public Website</span>
          </button>
        </div>
      </aside>

      {/* Main Portal Canvas */}
      <main className="flex-1 p-6 lg:p-8 space-y-8 overflow-y-auto">
        {/* Top Student Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-6 rounded-2xl border border-slate-200 shadow-sm gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-navy-900">Welcome back, {student.name}!</span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Enrolled Active</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">{student.course} • Batch: {student.batch}</p>
          </div>

          <div className="flex items-center space-x-4 text-xs font-semibold">
            <div className="bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
              <span className="text-slate-400 block text-[10px]">Attendance</span>
              <span className="text-navy-900 font-bold">{student.attendance}</span>
            </div>
            <div className="bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
              <span className="text-slate-400 block text-[10px]">Tests Done</span>
              <span className="text-navy-900 font-bold">{student.testsTaken} Tests</span>
            </div>
          </div>
        </div>

        {/* TAB 1: DASHBOARD VIEW */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Live Class Alert Box */}
            <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 text-white p-6 rounded-2xl shadow-navy flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400 text-navy-950">
                  Live Classroom Stream • Starting in 25 mins
                </span>
                <h3 className="text-lg font-bold text-white">GS Paper 2: Constitutional Bodies & CAG Role</h3>
                <p className="text-xs text-slate-300">Dr. Vikramaditya Sharma • Civil Lines Smart Room 03</p>
              </div>

              <button 
                id="portal-join-stream-btn"
                onClick={() => alert("Joining Live Classroom Video Player...")}
                className="px-6 py-2.5 text-xs font-bold text-navy-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md flex-shrink-0 cursor-pointer"
              >
                Join Live Stream
              </button>
            </div>

            {/* Metric KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <p className="text-xs font-semibold text-slate-500">Latest Prelims Simulator Score</p>
                <p className="text-2xl font-extrabold text-navy-900">{student.avgScore}</p>
                <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Top 8% in Raipur Cohort</span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <p className="text-xs font-semibold text-slate-500">Mains Answers Evaluated</p>
                <p className="text-2xl font-extrabold text-navy-900">32 / 34 Submitted</p>
                <span className="text-[11px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">Avg Turnaround: 36 Hours</span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <p className="text-xs font-semibold text-slate-500">Assigned Senior Mentor</p>
                <p className="text-lg font-bold text-navy-900">{student.mentor}</p>
                <span className="text-[11px] text-purple-600 font-semibold bg-purple-50 px-2 py-0.5 rounded">Next Review: Friday 04:00 PM</span>
              </div>
            </div>

            {/* Performance Bar Chart Preview */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-navy-900">Recent Test Accuracy Progression</h3>
                <span className="text-xs text-slate-400 font-medium">Last 5 Simulator Mocks</span>
              </div>

              <div className="grid grid-cols-5 gap-3 text-center pt-2">
                {[
                  { mock: 'Mock 1', score: '62%' },
                  { mock: 'Mock 2', score: '68%' },
                  { mock: 'Mock 3', score: '74%' },
                  { mock: 'Mock 4', score: '79%' },
                  { mock: 'Mock 5 (Latest)', score: '84%' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                    <p className="text-[11px] text-slate-500 font-medium">{item.mock}</p>
                    <p className="text-base font-extrabold text-navy-900">{item.score}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CLASSES VIEW */}
        {activeTab === 'classes' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-navy-900">Recorded Video Library & Archives</h3>
            <div className="space-y-3">
              {[
                { title: "Polity Lecture 14: Emergency Provisions (Art 352-360)", faculty: "Dr. Vikramaditya Sharma", date: "Yesterday", duration: "2h 15m" },
                { title: "Economy Lecture 09: Inflation & Monetary Policy Tools", faculty: "Er. Shashank Shekhar", date: "May 12, 2025", duration: "2h 05m" },
                { title: "History Lecture 22: Non-Cooperation to Civil Disobedience", faculty: "Prof. Arvind Trivedi", date: "May 10, 2025", duration: "2h 30m" }
              ].map((lec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-navy-900">{lec.title}</p>
                    <p className="text-xs text-slate-500">{lec.faculty} • {lec.date} • {lec.duration}</p>
                  </div>
                  <button 
                    onClick={() => alert(`Playing: ${lec.title}`)}
                    className="px-4 py-2 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg cursor-pointer"
                  >
                    Watch Recording
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TESTS VIEW */}
        {activeTab === 'tests' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-navy-900">Evaluated Mains Answer Copies</h3>
            <div className="space-y-3">
              {[
                { test: "GS Paper 2 Sectional Mock 04", marks: "108 / 250", remarks: "Excellent structure in constitutional questions. Need more case laws in IR section.", evaluator: "Meenakshi Ma'am" },
                { test: "GS Paper 3 Economy & Science Mock 02", marks: "114 / 250", remarks: "Great use of budget charts. Improve handwriting in 15-markers.", evaluator: "Shashank Sir" }
              ].map((test, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-sm text-navy-900">{test.test}</p>
                    <span className="font-extrabold text-navy-900 text-sm">{test.marks}</span>
                  </div>
                  <p className="text-xs text-slate-600 italic">Evaluator Remark: "{test.remarks}"</p>
                  <div className="pt-2 flex justify-between items-center text-xs">
                    <span className="text-slate-400">Evaluated by: {test.evaluator}</span>
                    <button 
                      onClick={() => alert("Downloading evaluated copy PDF with inline annotations...")}
                      className="text-navy-700 font-bold underline cursor-pointer"
                    >
                      Download Evaluated Copy PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: LOCKER */}
        {activeTab === 'locker' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-navy-900">Digital Handouts & Hardcopy Booklets</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "UDAAN Indian Polity Complete Class Notes PDF",
                "Economic Survey & Budget 2025 Value Addition Booklet",
                "Ethics 50 Case Studies with Solved Frameworks",
                "Modern Indian History Chronological Maps Dossier"
              ].map((doc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-navy-900">{doc}</span>
                  <button 
                    onClick={() => alert(`Downloading: ${doc}`)}
                    className="p-2 text-navy-700 hover:bg-slate-200 rounded-lg cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: MENTORSHIP */}
        {activeTab === 'mentorship' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-6">
            <h3 className="text-lg font-bold text-navy-900">Schedule 1-on-1 Strategy Call</h3>
            <p className="text-xs text-slate-600">You are entitled to 2 mentor calls per month. Pick an available slot with your lead mentor.</p>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-3">
              <p className="text-xs font-bold text-navy-900">Available Slots for this Week:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <button onClick={() => alert("Slot Booked: Friday 04:00 PM")} className="p-2 bg-white border border-blue-200 rounded-lg text-xs font-bold text-navy-900 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">Friday 04:00 PM</button>
                <button onClick={() => alert("Slot Booked: Saturday 11:30 AM")} className="p-2 bg-white border border-blue-200 rounded-lg text-xs font-bold text-navy-900 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">Saturday 11:30 AM</button>
                <button onClick={() => alert("Slot Booked: Sunday 03:00 PM")} className="p-2 bg-white border border-blue-200 rounded-lg text-xs font-bold text-navy-900 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">Sunday 03:00 PM</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
