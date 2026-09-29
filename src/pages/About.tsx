import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { BRAND_INFO } from '../data/content';
import { 
  User, Target, Compass, 
  ArrowRight, Sparkles, Shield, Users 
} from 'lucide-react';

export default function About() {
  const coreTech = ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask', 'React', 'Tailwind CSS', 'Microsoft PowerPoint', 'Technical Documentation'];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEOHead
        title="About NOVO WRITING HUB"
        description="Learn about NOVO WRITING HUB, an independent digital-services brand operated by Anand Krishnan in Thanjavur. Our background, working philosophy, technical capabilities, and future direction."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-300 bg-amber-950/50 px-3.5 py-1 rounded-full border border-amber-500/30 inline-block">
            About The Brand
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            About <span className="text-gradient-gold">NOVO WRITING HUB</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            An independent digital-services brand operated by Anand Krishnan, delivering clean web development, presentation design, technical documentation, and site maintenance.
          </p>
        </div>

        {/* Anand Krishnan Profile & Background */}
        <div className="glass-panel rounded-3xl p-8 lg:p-12 border border-amber-500/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Official Logo & Owner Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 border border-amber-500/30 p-8 shadow-2xl relative text-center">
                <img
                  src="/assets/novo-logo.jpg"
                  alt="NOVO WRITING HUB Official Logo"
                  className="w-24 h-24 rounded-2xl object-contain border border-amber-500/40 bg-black/50 mx-auto mb-4 shadow-xl"
                />
                <h3 className="text-2xl font-bold text-white mb-0.5">
                  {BRAND_INFO.owner}
                </h3>
                <p className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-6">
                  Founder & Principal Operator
                </p>
                <div className="space-y-2.5 text-xs text-slate-300 font-mono pt-4 border-t border-white/10 text-left">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Brand:</span>
                    <span className="text-slate-100 font-bold">{BRAND_INFO.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tagline:</span>
                    <span className="text-amber-400 font-bold">“{BRAND_INFO.tagline}”</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-slate-200">{BRAND_INFO.contact.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" /> Background & Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Practical Solutions for Students, Professionals, and Small Businesses
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                NOVO WRITING HUB is an independent digital-services brand founded and operated by <strong className="text-white">Anand Krishnan</strong> in <strong className="text-amber-300">Thanjavur</strong>. 
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rather than operating as a bloated agency, NOVO focuses on providing practical, direct digital services with absolute attention to detail, clean code standards, and transparent client communication.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-1.5 font-mono">
                    <Target className="w-4 h-4 text-amber-400" /> Working Philosophy
                  </h4>
                  <p className="text-xs text-slate-400">Build lightweight, clean web tools and clear presentation assets that solve specific tasks without unnecessary complexity.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-1.5 font-mono">
                    <Compass className="w-4 h-4 text-amber-400" /> Direct Communication
                  </h4>
                  <p className="text-xs text-slate-400">Work directly with Anand Krishnan via Phone/WhatsApp (7540072112) or Email (novowrirtinghub@gmail.com).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who NOVO Works With */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-300 bg-amber-950/50 px-3 py-1 rounded border border-amber-500/30 inline-block mb-3">
              Target Audience
            </span>
            <h2 className="text-3xl font-bold text-white">Who NOVO Works With</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 text-center">
              <Users className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Students & Learners</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Formatting guidance, presentation design support, and technical documentation templates.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 text-center">
              <User className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Professionals & Freelancers</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Personal portfolio websites, resume presentation sites, and executive presentation decks.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 text-center">
              <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Creators & Independent Brands</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Digital asset design, landing pages, graphic banners, and content maintenance.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 text-center">
              <Shield className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Small Businesses</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Clean multi-page business websites, small web application prototypes, and technical support.</p>
            </div>
          </div>
        </div>

        {/* Technical Capabilities */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-300 bg-amber-950/50 px-3 py-1 rounded border border-amber-500/30 inline-block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl font-bold text-white mb-2">Core Technical Stack</h2>
            <p className="text-xs text-slate-400">Practical tools used to engineer fast websites, technical docs, and slide decks.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {coreTech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 text-xs font-mono font-semibold hover:border-amber-500/50 transition-colors shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Future Direction */}
        <div className="glass-panel p-8 rounded-3xl border border-amber-500/20 space-y-4 max-w-4xl mx-auto bg-slate-950/40">
          <h2 className="text-xl font-bold text-white text-center">Future Direction</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-center max-w-2xl mx-auto">
            NOVO WRITING HUB is committed to building a reliable track record by consistently delivering clean code, functional prototypes, and clear technical documentation for every client project.
          </p>
        </div>

        {/* CTA to Contact */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center border border-amber-500/30 bg-gradient-to-b from-slate-900 to-amber-950/30">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Start a Project Discussion</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Get in touch with Anand Krishnan directly to review your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/30 transition-all"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
