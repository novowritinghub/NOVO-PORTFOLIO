import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { BRAND_INFO, SERVICES_DATA, PORTFOLIO_SAMPLES } from '../data/content';
import { 
  ArrowRight, Sparkles, CheckCircle2, 
  ChevronRight, ExternalLink, MessageSquare, Layers, 
  ShieldCheck, Cpu, Layout, MessageCircle
} from 'lucide-react';

export default function Home() {
  const featuredServices = SERVICES_DATA.slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#FAFAFA]">
      <SEOHead
        title="Digital Solutions for Ideas, Projects, and Businesses"
        description="NOVO WRITING HUB — We Write. You Shine. Independent digital services by Anand Krishnan focused on web development, presentations, documentation, technical solutions, and creative digital work."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/80 bg-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Tagline & Official Logo Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>{BRAND_INFO.tagline}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              {BRAND_INFO.heroHeadline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              {BRAND_INFO.heroSubheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm transition-all duration-300 backdrop-blur-md"
              >
                <span>Start a Project</span>
              </Link>
            </div>

            {/* Value Highlights Pill Bar */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-mono font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Clean Code & Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>100% Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Direct Owner Communication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concise Introduction to NOVO */}
      <section className="py-16 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block font-semibold">
            About The Brand
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Practical Digital Solutions by Anand Krishnan
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl mx-auto">
            {BRAND_INFO.introShort}
          </p>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3 font-semibold">
                Digital Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Featured Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors group"
            >
              <span>Explore All 9 Services</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-20 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3 font-semibold">
                Selected Work & Concepts
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Technical Capabilities Showcase
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors group"
            >
              <span>View Selected Work</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_SAMPLES.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* "Why NOVO?" Section */}
      <section className="py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3 font-semibold">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why NOVO WRITING HUB?
            </h2>
            <p className="text-sm text-slate-600">
              We focus on delivering high-quality, practical digital solutions through direct technical capability and dedicated service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 text-center bg-white">
              <MessageSquare className="w-8 h-8 text-amber-700 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">Clear Communication</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Direct, responsive communication with founder Anand Krishnan throughout every phase.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200 text-center bg-white">
              <Cpu className="w-8 h-8 text-amber-700 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">Practical Solutions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Functional tools and lightweight web code designed to solve real tasks efficiently.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200 text-center bg-white">
              <Layout className="w-8 h-8 text-amber-700 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">Clean Design</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Modern white UI aesthetic, legible typography, and structured content layouts.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200 text-center bg-white">
              <ShieldCheck className="w-8 h-8 text-amber-700 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">Attention to Detail</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Meticulous check of cross-browser formatting, responsiveness, and clean code standards.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200 text-center md:col-span-3 lg:col-span-1 bg-white">
              <Layers className="w-8 h-8 text-amber-700 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">Client-Focused Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Structured 7-step process with clear milestones and dedicated post-delivery support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Home Page Contact CTA */}
      <section className="py-16 border-b border-slate-200/80 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-amber-500/30 text-center space-y-4 bg-white shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Have a project in mind?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed">
              Let’s discuss your idea and find a practical digital solution.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 hover:from-amber-400 hover:to-yellow-500 shadow-md shadow-amber-500/20 transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={BRAND_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fiverr Platform Section */}
      <section className="py-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-amber-500 text-slate-950 font-bold uppercase">
                {BRAND_INFO.fiverr.heading}
              </span>
              <h3 className="text-xl font-bold text-slate-900">Order Via Fiverr Platform</h3>
              <p className="text-xs text-slate-600 max-w-xl">
                {BRAND_INFO.fiverr.text}
              </p>
            </div>
            <a
              href={BRAND_INFO.fiverr.profileUrlPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-amber-400 shadow-sm transition-all shrink-0"
            >
              <span>View Fiverr Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
