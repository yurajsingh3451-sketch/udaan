import React from 'react';
import { FACULTY_MEMBERS } from '../data/mockData';
import { Clock, MessageCircle, Calendar } from 'lucide-react';
import { 
  COUNSELLING_PHONE_DISPLAY, 
  openWhatsAppCounselling 
} from '../utils/whatsapp';

interface FacultyPageProps {
  setActivePage: (page: string) => void;
  openCounsellingModal: () => void;
}

export default function FacultyPage({ openCounsellingModal }: FacultyPageProps) {
  const handleDirectFacultyWhatsApp = (facultyName: string, subject: string) => {
    openWhatsAppCounselling({
      name: 'UPSC Aspirant',
      courseInterest: `${subject} Guidance with ${facultyName}`,
      mode: '1-to-1 Faculty Mentorship Session',
      queryType: 'faculty_slot'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-100 px-3 py-1 rounded">
            Academic Board
          </span>
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
            Learn from India's Master Mentors
          </h1>
          <p className="text-base text-slate-600">
            Our faculty combines profound subject mastery, deep understanding of evolving UPSC trends, and personal attention to every classroom aspirant.
          </p>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct WhatsApp 1-to-1 Slot Booking: {COUNSELLING_PHONE_DISPLAY}</span>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTY_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all overflow-hidden flex flex-col justify-between">
              <div>
                <div className="p-6 pb-4 flex items-center space-x-4 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0 shadow-sm">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-900">{member.name}</h3>
                    <p className="text-xs font-semibold text-blue-600">{member.role}</p>
                    <p className="text-[11px] text-slate-500 flex items-center mt-0.5">
                      <Clock className="w-3 h-3 mr-1" /> {member.experience} Experience
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Subject Expertise</span>
                    <p className="font-bold text-navy-900 text-sm">{member.subject}</p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Credentials</span>
                    <p className="text-slate-700 font-medium">{member.qualifications}</p>
                  </div>

                  <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <button 
                  onClick={() => handleDirectFacultyWhatsApp(member.name, member.subject)}
                  className="w-full py-2.5 text-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors cursor-pointer flex items-center justify-center space-x-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp 1-to-1 Slot ({member.name.split(' ')[0]})</span>
                </button>
                <button 
                  onClick={openCounsellingModal}
                  className="w-full py-2 text-center text-xs font-semibold text-navy-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer flex items-center justify-center space-x-1"
                >
                  <Calendar className="w-3 h-3 text-navy-600" />
                  <span>Book In-Person Raipur Slot</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
