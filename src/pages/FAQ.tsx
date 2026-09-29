import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { FAQ_DATA, FAQItem } from '../data/content';
import { ChevronDown, Search, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEOHead
        title="Frequently Asked Questions (FAQ)"
        description="Find clear answers to common questions about NOVO WRITING HUB services, project process, revisions, custom website builds, and Fiverr ordering."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-300 bg-amber-950/50 px-3.5 py-1 rounded-full border border-amber-500/30 inline-block">
            Client Information
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Clear answers regarding our services, working process, website maintenance, revisions, and ordering channels.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g., custom website, process, maintenance, revisions)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-xl"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-slate-400 font-mono text-xs glass-panel rounded-2xl">
              No matching questions found for "{searchQuery}". Please send us your question on the Contact page.
            </div>
          ) : (
            filteredFaqs.map((faq: FAQItem, idx: number) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border border-amber-500/20 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
                      <span className="text-base font-bold text-white leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-amber-500/20 text-amber-400 border-amber-500/40' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/5 text-sm text-slate-300 leading-relaxed bg-slate-950/40 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 text-center border border-amber-500/30 bg-gradient-to-b from-slate-900 to-amber-950/30 space-y-4">
          <MessageSquare className="w-8 h-8 text-amber-400 mx-auto" />
          <h2 className="text-2xl font-bold text-white">Have a Custom Question?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Get in touch with Anand Krishnan directly to discuss custom packages or specific questions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/30 transition-all"
          >
            <span>Ask a Question</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
