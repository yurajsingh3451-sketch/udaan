import React, { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface TestSeriesPageProps {
  setActivePage: (page: string) => void;
  openCounsellingModal: () => void;
}

export default function TestSeriesPage({ setActivePage, openCounsellingModal }: TestSeriesPageProps) {
  const [demoTestCompleted, setDemoTestCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  const sampleQuestions = [
    {
      id: 1,
      q: "With reference to the Constitution of India, consider the following statements regarding the 'Basic Structure Doctrine':",
      options: [
        "1. It was first propounded by the Supreme Court in the Shankari Prasad case (1951).",
        "2. The Constitution explicitly defines what constitutes the Basic Structure.",
        "3. Judicial review is considered an inviolable part of the Basic Structure."
      ],
      correct: 2,
      explanation: "Judicial review was declared part of basic structure in Kesavananda Bharati (1973) and Minerva Mills (1980). The Constitution does not define Basic Structure."
    },
    {
      id: 2,
      q: "Which of the following is/are the key objectives of the 'Fiscal Responsibility and Budget Management (FRBM) Act'?",
      options: [
        "1. Inter-generational equity in fiscal management.",
        "2. Long-term macro-economic stability by curbing fiscal deficit.",
        "3. Both 1 and 2."
      ],
      correct: 2,
      explanation: "FRBM Act aims to ensure inter-generational equity and prudent fiscal discipline."
    }
  ];

  const handleSelectOption = (qId: number, optionIdx: number) => {
    setSelectedAnswers({ ...selectedAnswers, [qId]: optionIdx });
  };

  const calculateDemoScore = () => {
    setDemoTestCompleted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-100 px-3 py-1 rounded">
            ABHYAS Testing Engine
          </span>
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
            All India UPSC Prelims & Mains Test Series
          </h1>
          <p className="text-base text-slate-600">
            Engineered to calibrate your elimination skills, time management, and answer structuring under actual UPSC examination rigor.
          </p>
        </div>

        {/* Test Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Prelims Test Series */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-100 text-navy-800">
                Prelims Simulator
              </span>
              <h3 className="text-xl font-bold text-navy-900">ABHYAS Prelims 2025 Test Series</h3>
              <p className="text-xs text-slate-600">35 Full-Length & Sectional GS + CSAT Mock Tests with detailed explanation PDFs and AI rank analysis.</p>

              <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>20 Subject-wise Sectional Tests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>10 Full-Length GS Mock Simulators</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>5 Comprehensive CSAT Practice Tests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>All India Ranking across 8,000+ Aspirants</span>
                </div>
              </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-extrabold text-navy-900">₹8,500</span>
                <span className="text-xs text-slate-400 line-through">₹12,000</span>
              </div>
            </div>

            <button 
              id="enroll-prelims-test-series-btn"
              onClick={() => { setActivePage('registration'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-6 w-full py-2.5 text-center text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              Enroll in Prelims Series
            </button>
          </div>

          {/* Mains Answer Writing Series */}
          <div className="bg-white p-7 rounded-2xl border-2 border-navy-800 shadow-card-hover transition-all flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 bg-amber-400 text-navy-950 text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
              Most Popular
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-navy-900 text-white">
                Mains Evaluation SLA
              </span>
              <h3 className="text-xl font-bold text-navy-900">NIRMAN Mains 2025 Answer Writing</h3>
              <p className="text-xs text-slate-600">16 Full Length Evaluated Mock Papers covering GS 1 to 4 and Essay with guaranteed 48-hour feedback return.</p>

              <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>16 Full Mock Papers (250 Marks Each)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>48-Hour Return Guarantee with Remarks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>1-on-1 Evaluator Telephonic Call</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>Model Answers + Value Addition Flowcharts</span>
                </div>
              </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-extrabold text-navy-900">₹16,500</span>
                <span className="text-xs text-slate-400 line-through">₹22,000</span>
              </div>
            </div>

            <button 
              id="enroll-mains-test-series-btn"
              onClick={() => { setActivePage('registration'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-6 w-full py-2.5 text-center text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              Enroll in Mains Series
            </button>
          </div>

          {/* Integrated Combo */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-purple-100 text-purple-900">
                Combo Pass
              </span>
              <h3 className="text-xl font-bold text-navy-900">Integrated Prelims + Mains Complete Series</h3>
              <p className="text-xs text-slate-600">The ultimate year-round test engine for aspirants wanting continuous benchmarking from day 1.</p>

              <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>All 35 Prelims + 16 Mains Papers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>Unlimited Doubt Clearing Sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>Full Year Current Affairs Monthly Tests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-navy-600" />
                  <span>Free Offline Classroom Test Center Seat</span>
                </div>
              </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-extrabold text-navy-900">₹21,000</span>
                <span className="text-xs text-slate-400 line-through">₹29,000</span>
              </div>
            </div>

            <button 
              id="enroll-combo-test-series-btn"
              onClick={() => { setActivePage('registration'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-6 w-full py-2.5 text-center text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              Enroll in Integrated Combo
            </button>
          </div>
        </div>

        {/* Interactive Demo Test Simulator Widget */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Try Instant Demo Simulation</span>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mt-1">UPSC Mini Diagnostic Test (Sample 2 Questions)</h3>
            </div>
            <span className="text-xs font-mono text-slate-500 mt-2 sm:mt-0">Time Allowed: 3 Mins</span>
          </div>

          {!demoTestCompleted ? (
            <div className="space-y-6">
              {sampleQuestions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3">
                  <p className="font-bold text-sm text-navy-900 leading-relaxed">
                    Q{idx + 1}. {q.q}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        id={`q-${q.id}-opt-${optIdx}`}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`w-full text-left p-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                          selectedAnswers[q.id] === optIdx
                            ? 'bg-navy-900 text-white font-bold'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <button
                id="submit-demo-test-btn"
                onClick={calculateDemoScore}
                className="px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                Submit Demo Answers & View AI Analytics →
              </button>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-navy-900 text-white space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Test Completed</p>
                  <h4 className="text-lg font-bold text-white">Your Diagnostic Performance Breakdown</h4>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded">
                  Status: Evaluated
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                  <p className="text-xs text-slate-400">Score</p>
                  <p className="text-2xl font-extrabold text-white">4.00 / 4.00</p>
                </div>
                <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                  <p className="text-xs text-slate-400">Accuracy</p>
                  <p className="text-2xl font-extrabold text-emerald-400">100%</p>
                </div>
                <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                  <p className="text-xs text-slate-400">Projected AIR</p>
                  <p className="text-2xl font-extrabold text-amber-400">Top 5%</p>
                </div>
                <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                  <p className="text-xs text-slate-400">Speed</p>
                  <p className="text-2xl font-extrabold text-blue-400">42s / Q</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-navy-800 pt-4">
                <p className="font-bold text-white">Key Diagnostic Recommendation:</p>
                <p>• Strong command on Constitutional Basic Structure tenets.</p>
                <p>• Recommendation: Upgrade to Full Abhyas Test Series to benchmark against all 100-question negative marking fatigue curves.</p>
              </div>

              <button
                id="reset-demo-test-btn"
                onClick={() => setDemoTestCompleted(false)}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Reset Demo Test
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
