import React, { useState } from 'react';
import { Clock, MapPin, Users, Calendar, MessageCircle } from 'lucide-react';
import { BATCHES } from '../data/mockData';
import { 
  COUNSELLING_PHONE_DISPLAY, 
  COUNSELLING_PHONE_RAW,
  openWhatsAppCounselling 
} from '../utils/whatsapp';

interface BatchesPageProps {
  setActivePage: (page: string) => void;
  setSelectedCourseId: (id: string) => void;
  openCounsellingModal: () => void;
}

export default function BatchesPage({ setActivePage, setSelectedCourseId, openCounsellingModal }: BatchesPageProps) {
  const [filterMode, setFilterMode] = useState('All');

  const filteredBatches = filterMode === 'All' 
    ? BATCHES 
    : BATCHES.filter(b => b.mode.toLowerCase().includes(filterMode.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-100 px-3 py-1 rounded">
            Academic Timetable
          </span>
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
            Upcoming UPSC Batches (2025-26)
          </h1>
          <p className="text-base text-slate-600">
            Find the batch schedule matching your college or work routine at our Raipur Civil Lines campus or interactive live stream.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-2">
          {['All', 'Offline', 'Online', 'Hybrid'].map((mode) => (
            <button
              key={mode}
              id={`batch-mode-${mode.toLowerCase()}`}
              onClick={() => setFilterMode(mode)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                filterMode === mode
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {mode} Batches
            </button>
          ))}
        </div>

        {/* Batch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBatches.map((batch) => (
            <div key={batch.id} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-emerald-100 text-emerald-800">
                  {batch.status}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-400">ID: {batch.id}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 leading-snug">{batch.name}</h3>
                <p className="text-xs font-semibold text-blue-600 mt-1">{batch.courseName}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-xs text-slate-700">
                <div className="space-y-1">
                  <span className="text-slate-400">Start Date</span>
                  <p className="font-bold text-navy-900 flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-navy-600" /> {batch.startDate}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400">Class Hours</span>
                  <p className="font-bold text-navy-900 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-navy-600" /> {batch.timing}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400">Mode / Location</span>
                  <p className="font-bold text-navy-900 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-navy-600" /> {batch.location}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400">Lead Faculty</span>
                  <p className="font-bold text-navy-900 flex items-center">
                    <Users className="w-3.5 h-3.5 mr-1 text-navy-600" /> {batch.faculty.split('&')[0]}
                  </p>
                </div>
              </div>

              {/* Seats Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-600">Seat Occupancy: {batch.seatsFilled}/{batch.seatsTotal}</span>
                  <span className="text-amber-600">{batch.seatsTotal - batch.seatsFilled} Seats Remaining</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-navy-900 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(batch.seatsFilled / batch.seatsTotal) * 100}%` }}
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button 
                  onClick={() => openWhatsAppCounselling({
                    courseInterest: `${batch.name} (${batch.timing})`,
                    mode: `Batch Inquiry: ${batch.mode} at ${batch.location}`,
                    queryType: 'admission'
                  })}
                  className="flex-1 py-2.5 text-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp 1-to-1 ({COUNSELLING_PHONE_RAW})</span>
                </button>
                <button 
                  onClick={() => { 
                    setSelectedCourseId(batch.courseId);
                    setActivePage('registration'); 
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                  }}
                  className="px-5 py-2.5 text-center text-xs font-bold text-navy-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
