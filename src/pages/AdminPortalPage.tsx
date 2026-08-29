import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Phone, 
  LogOut
} from 'lucide-react';

interface AdminPortalPageProps {
  setActivePage: (page: string) => void;
}

export default function AdminPortalPage({ setActivePage }: AdminPortalPageProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-slate-900 text-white flex-shrink-0 p-5 space-y-6">
        <div className="flex items-center space-x-2 pb-4 border-b border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
            ADM
          </div>
          <div>
            <p className="font-bold text-sm text-white">UDAAN Admin</p>
            <p className="text-[10px] text-slate-400 font-mono">Raipur Center HQ</p>
          </div>
        </div>

        <nav className="space-y-1 text-xs font-semibold text-slate-300">
          <button 
            id="admin-tab-overview"
            onClick={() => setActiveTab('overview')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center space-x-2 cursor-pointer ${activeTab === 'overview' ? 'bg-slate-800 text-white font-bold' : 'hover:bg-slate-800'}`}
          >
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span>KPI Overview</span>
          </button>
          <button 
            id="admin-tab-leads"
            onClick={() => setActiveTab('leads')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center space-x-2 cursor-pointer ${activeTab === 'leads' ? 'bg-slate-800 text-white font-bold' : 'hover:bg-slate-800'}`}
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Counselling Leads</span>
          </button>
          <button 
            id="admin-tab-registrations"
            onClick={() => setActiveTab('registrations')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center space-x-2 cursor-pointer ${activeTab === 'registrations' ? 'bg-slate-800 text-white font-bold' : 'hover:bg-slate-800'}`}
          >
            <Users className="w-4 h-4 text-emerald-400" />
            <span>Admissions & Payments</span>
          </button>
        </nav>

        <div className="pt-6 border-t border-slate-800">
          <button 
            id="admin-exit-btn"
            onClick={() => setActivePage('home')}
            className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-slate-800 flex items-center space-x-2 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Exit Admin</span>
          </button>
        </div>
      </aside>

      {/* Admin Content */}
      <main className="flex-1 p-6 lg:p-8 space-y-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-6 rounded-2xl border border-slate-200 shadow-sm gap-4">
          <div>
            <h1 className="text-2xl font-bold text-navy-900">UDAAN Management Dashboard</h1>
            <p className="text-xs text-slate-500">Live operational telemetry across Raipur Civil Lines campus.</p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded bg-slate-100 text-slate-600">
            DEMO DATA PRESENTATION
          </span>
        </div>

        {/* Overview KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Enrolled</p>
            <p className="text-3xl font-extrabold text-navy-900">682</p>
            <p className="text-[11px] text-emerald-600 font-semibold">+42 this month</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Batches</p>
            <p className="text-3xl font-extrabold text-navy-900">12</p>
            <p className="text-[11px] text-blue-600 font-semibold">4 Foundation, 8 Modular</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Leads</p>
            <p className="text-3xl font-extrabold text-amber-600">28</p>
            <p className="text-[11px] text-slate-500">Callback required</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mains SLA Status</p>
            <p className="text-3xl font-extrabold text-emerald-600">98.4%</p>
            <p className="text-[11px] text-slate-500">&lt; 48h turnaround time</p>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-base text-navy-900">Recent Student Counselling Inquiries</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Target Year</th>
                  <th className="p-3">Program Interest</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-bold text-navy-900">Ravi Shankar Verma</td>
                  <td className="p-3">+91 98261 44550</td>
                  <td className="p-3">UPSC 2026</td>
                  <td className="p-3">2-Year Foundation (SAMARTH)</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">Pending Callback</span></td>
                  <td className="p-3"><button className="text-blue-600 font-bold underline cursor-pointer">Mark Contacted</button></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-navy-900">Sneha Chandrakar</td>
                  <td className="p-3">+91 97555 12099</td>
                  <td className="p-3">UPSC 2025</td>
                  <td className="p-3">Mains NIRMAN Answer Writing</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Counselling Done</span></td>
                  <td className="p-3"><button className="text-blue-600 font-bold underline cursor-pointer">Enrollment Link</button></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-navy-900">Aman Dewangan</td>
                  <td className="p-3">+91 94255 77112</td>
                  <td className="p-3">UPSC 2026</td>
                  <td className="p-3">1-Year Integrated (LAKSHYA)</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">Campus Visit Booked</span></td>
                  <td className="p-3"><button className="text-blue-600 font-bold underline cursor-pointer">View Slot</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
