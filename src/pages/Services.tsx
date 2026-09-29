import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../data/content';
import { Layers, Sparkles, Code, Palette, LifeBuoy } from 'lucide-react';

export default function Services() {
  const [filter, setFilter] = useState<'all' | 'web' | 'design' | 'support'>('all');

  const filteredServices = SERVICES_DATA.filter(
    (service) => filter === 'all' || service.category === filter
  );

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEOHead
        title="Digital Services Portfolio"
        description="Comprehensive services by NOVO WRITING HUB: Website Development, Portfolio Sites, Business Websites, Small Web Applications, Presentation Design, Project Documentation, Graphic Design, Website Maintenance, and Support."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-300 bg-amber-950/50 px-3.5 py-1 rounded-full border border-amber-500/30 inline-block">
            Our Complete Service Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Practical Digital Services for <span className="text-gradient-gold">Modern Needs</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            From responsive web development to presentation decks and technical project documentation, explore our 9 core specialized services.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              filter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 font-bold'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-amber-500/20'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> All 9 Services
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              filter === 'web'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 font-bold'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-amber-500/20'
            }`}
          >
            <Code className="w-3.5 h-3.5" /> Web & Applications
          </button>
          <button
            onClick={() => setFilter('design')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              filter === 'design'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 font-bold'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-amber-500/20'
            }`}
          >
            <Palette className="w-3.5 h-3.5" /> Presentation & Design
          </button>
          <button
            onClick={() => setFilter('support')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
              filter === 'support'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 font-bold'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-amber-500/20'
            }`}
          >
            <LifeBuoy className="w-3.5 h-3.5" /> Support & Maintenance
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Service Quality Assurance Guarantee */}
        <div className="glass-panel rounded-3xl p-8 border border-amber-500/20 text-center max-w-4xl mx-auto space-y-3 bg-slate-950/40">
          <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
          <h3 className="text-xl font-bold text-white">Need a Custom Digital Package?</h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            We frequently combine web development with presentation decks and technical documentation for custom project requirements. Reach out on our Contact page or WhatsApp us at 7540072112.
          </p>
        </div>
      </div>
    </div>
  );
}
