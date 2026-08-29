import React from 'react';
import { EVENTS_DATA } from '../data/mockData';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface EventsPageProps {
  openCounsellingModal: () => void;
}

export default function EventsPage({ openCounsellingModal }: EventsPageProps) {
  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-100 px-3 py-1 rounded">
            Raipur Campus Calendar
          </span>
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
            Upcoming Seminars & Scholarship Events
          </h1>
          <p className="text-base text-slate-600">
            Join interactive strategy sessions with successful officers, faculty masterclasses, and state-wide talent search tests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS_DATA.map((evt) => (
            <div key={evt.id} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-navy-900 text-white">
                    {evt.type}
                  </span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {evt.seatsLeft} Seats Left
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-900 leading-snug">{evt.title}</h3>

                <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-700 font-medium">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-navy-600" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-navy-600" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-navy-600 flex-shrink-0 mt-0.5" />
                    <span>{evt.venue}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Users className="w-4 h-4 text-navy-600 flex-shrink-0 mt-0.5" />
                    <span>Guest: {evt.speaker}</span>
                  </div>
                </div>
              </div>

              <button 
                id={`register-evt-${evt.id}`}
                onClick={openCounsellingModal}
                className="w-full py-2.5 text-center text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                Register For Free Entry
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
