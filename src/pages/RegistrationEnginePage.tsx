import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { COURSES, BATCHES, Course, Batch } from '../data/mockData';

interface RegistrationEnginePageProps {
  setActivePage: (page: string) => void;
}

export default function RegistrationEnginePage({ setActivePage }: RegistrationEnginePageProps) {
  const [step, setStep] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);
  const [selectedBatch, setSelectedBatch] = useState<Batch>(BATCHES[0]);
  const [studentDetails, setStudentDetails] = useState({
    fullName: 'Aditya Sharma',
    phone: '+91 94252 88899',
    email: 'aditya.sharma@example.com',
    dob: '2001-08-14',
    address: 'Shankar Nagar, Raipur, CG',
    medium: 'English'
  });

  const regId = 'UDAAN-REG-2025-8941';

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleCompletePayment = () => {
    setStep(5);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Step Indicator */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span className={step >= 1 ? 'text-navy-900' : ''}>1. Select Program</span>
            <span className={step >= 2 ? 'text-navy-900' : ''}>2. Select Batch</span>
            <span className={step >= 3 ? 'text-navy-900' : ''}>3. Personal Details</span>
            <span className={step >= 4 ? 'text-navy-900' : ''}>4. Secure Payment</span>
            <span className={step >= 5 ? 'text-emerald-600' : ''}>5. Confirmation</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-navy-900 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Select Program */}
        {step === 1 && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-6">
            <h2 className="text-2xl font-bold text-navy-900">Step 1: Choose Your UPSC Course</h2>
            <div className="space-y-3">
              {COURSES.map((c) => (
                <div 
                  key={c.id}
                  id={`course-select-${c.id}`}
                  onClick={() => setSelectedCourse(c)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedCourse.id === c.id 
                      ? 'border-navy-900 bg-navy-50/60 shadow-sm' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <p className="font-bold text-sm text-navy-900">{c.title}</p>
                    <p className="text-xs text-slate-500">Target: {c.targetYear} • {c.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-extrabold text-base text-navy-900">₹{c.price.toLocaleString('en-IN')}</p>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">All-Inclusive</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <button 
                id="step1-proceed-btn"
                onClick={handleNext}
                className="px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl flex items-center space-x-2 cursor-pointer"
              >
                <span>Proceed to Batch Selection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Select Batch */}
        {step === 2 && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-6">
            <h2 className="text-2xl font-bold text-navy-900">Step 2: Select Batch & Timing</h2>
            <div className="space-y-3">
              {BATCHES.map((b) => (
                <div 
                  key={b.id}
                  id={`batch-select-${b.id}`}
                  onClick={() => setSelectedBatch(b)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedBatch.id === b.id 
                      ? 'border-navy-900 bg-navy-50/60 shadow-sm' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <p className="font-bold text-sm text-navy-900">{b.name}</p>
                    <p className="text-xs text-slate-500">Timing: {b.timing} • Mode: {b.mode}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">
                    Starts {b.startDate}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-4">
              <button onClick={handlePrev} className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 rounded-xl cursor-pointer">Back</button>
              <button id="step2-proceed-btn" onClick={handleNext} className="px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl flex items-center space-x-2 cursor-pointer">
                <span>Enter Personal Info</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Personal Details */}
        {step === 3 && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-6">
            <h2 className="text-2xl font-bold text-navy-900">Step 3: Student Details & KYC</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Legal Name</label>
                <input 
                  id="reg-input-name"
                  type="text" 
                  value={studentDetails.fullName}
                  onChange={(e) => setStudentDetails({ ...studentDetails, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile (OTP Verified)</label>
                <input 
                  id="reg-input-phone"
                  type="text" 
                  value={studentDetails.phone}
                  onChange={(e) => setStudentDetails({ ...studentDetails, phone: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input 
                  id="reg-input-email"
                  type="email" 
                  value={studentDetails.email}
                  onChange={(e) => setStudentDetails({ ...studentDetails, email: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Medium</label>
                <select 
                  id="reg-input-medium"
                  value={studentDetails.medium}
                  onChange={(e) => setStudentDetails({ ...studentDetails, medium: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value="English">English Medium</option>
                  <option value="Hindi">Hindi Medium</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button onClick={handlePrev} className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 rounded-xl cursor-pointer">Back</button>
              <button id="step3-proceed-btn" onClick={handleNext} className="px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl flex items-center space-x-2 cursor-pointer">
                <span>Proceed to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Payment Simulation */}
        {step === 4 && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-6">
            <h2 className="text-2xl font-bold text-navy-900">Step 4: Fee Summary & Demo Payment</h2>
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between font-bold text-navy-900 text-sm">
                <span>{selectedCourse.title}</span>
                <span>₹{selectedCourse.price.toLocaleString('en-IN')}</span>
              </div>
              <p className="text-slate-500">Batch: {selectedBatch.name} ({selectedBatch.mode})</p>
              <p className="text-slate-500">Student: {studentDetails.fullName} ({studentDetails.phone})</p>
              <div className="pt-2 border-t border-slate-200 flex justify-between font-extrabold text-navy-900 text-base">
                <span>Total Amount Payable:</span>
                <span>₹{selectedCourse.price.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <p className="font-bold">DEMO PAYMENT GATEWAY SIMULATOR</p>
              <p>Clicking "Simulate Razorpay / UPI Payment" will instantly confirm your seat without real transactions.</p>
            </div>

            <div className="flex justify-between pt-4">
              <button onClick={handlePrev} className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 rounded-xl cursor-pointer">Back</button>
              <button 
                id="simulate-payment-btn"
                onClick={handleCompletePayment}
                className="px-7 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl flex items-center space-x-2 shadow-md cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Simulate Razorpay / UPI Payment</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: Success & Receipt */}
        {step === 5 && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900">Enrollment Confirmed!</h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Welcome to the UDAAN Family! Your admission credentials and classroom seat have been registered.
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Registration ID:</span>
                <span className="font-mono font-bold text-navy-900">{regId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Program:</span>
                <span className="font-bold text-navy-900">{selectedCourse.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Batch:</span>
                <span className="font-bold text-navy-900">{selectedBatch.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Amount Paid:</span>
                <span className="font-bold text-emerald-600">₹{selectedCourse.price.toLocaleString('en-IN')} (Success)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button 
                id="confirmed-goto-student-portal-btn"
                onClick={() => setActivePage('student-portal')}
                className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl shadow-md cursor-pointer"
              >
                Go to Student Portal Dashboard →
              </button>
              <button 
                id="confirmed-download-receipt-btn"
                onClick={() => alert(`Downloading official PDF fee receipt: ${regId}`)}
                className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-navy-800 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Fee Receipt PDF</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
