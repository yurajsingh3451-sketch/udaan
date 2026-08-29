import React, { useState } from 'react';
import { CURRENT_AFFAIRS_ARTICLES } from '../data/mockData';
import { Download, Search, Calendar, Clock } from 'lucide-react';

interface CurrentAffairsPageProps {
  setActivePage: (page: string) => void;
}

export default function CurrentAffairsPage({ setActivePage }: CurrentAffairsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [readArticleId, setReadArticleId] = useState<string | null>(null);

  const categories = ['All', 'Polity & Governance', 'Economy', 'Environment & Tech', 'International Relations', 'Security'];

  const filteredArticles = CURRENT_AFFAIRS_ARTICLES.filter(art => {
    const matchesCat = selectedCategory === 'All' || art.category.includes(selectedCategory);
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || art.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-100 px-3 py-1 rounded">
            PRATIBIMB Current Affairs Portal
          </span>
          <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
            Daily UPSC Current Affairs & Editorial Decodes
          </h1>
          <p className="text-base text-slate-600">
            Surgically curated from The Hindu, Indian Express, PIB, and Yojana with GS paper linkage, syllabus themes, and probable exam questions.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`ca-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="ca-search-input"
              type="text"
              placeholder="Search current affairs topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600"
            />
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {filteredArticles.map((art) => (
            <div key={art.id} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-navy-50 text-navy-800">
                    {art.category}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                    {art.paper}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-500">
                  <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {art.date}</span>
                  <span>•</span>
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {art.readTime}</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 leading-snug">
                {art.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {art.summary}
              </p>

              {/* Key Takeaways Box */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-navy-900">High-Yield UPSC Mains Hooks:</p>
                <div className="space-y-1 text-xs text-slate-700">
                  {art.keyTakeaways.map((point, idx) => (
                    <p key={idx}>• {point}</p>
                  ))}
                </div>
              </div>

              {readArticleId === art.id && (
                <div className="p-4 bg-navy-50 rounded-xl text-xs text-slate-700 space-y-2 animate-in fade-in duration-200">
                  <p className="font-bold text-navy-900">Probable UPSC Mains Question:</p>
                  <p className="italic text-slate-800">"Evaluate the constitutional implications of sub-classification among marginalized communities with specific reference to affirmative action jurisprudence. (15 Marks, 250 Words)"</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Model approach and structured answer frameworks are available for enrolled students in the Student Portal.</p>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <button 
                  onClick={() => alert(`Downloading PDF dossier for: ${art.title}`)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-navy-700 hover:text-navy-900 bg-slate-100 px-3 py-1.5 rounded-lg cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Summary PDF</span>
                </button>
                <button 
                  onClick={() => setReadArticleId(readArticleId === art.id ? null : art.id)}
                  className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                >
                  {readArticleId === art.id ? "Hide Question Hook ↑" : "Read Question Hook & Approach →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
