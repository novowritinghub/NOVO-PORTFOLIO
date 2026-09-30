import SEOHead from '../components/SEOHead';
import ProjectCard from '../components/ProjectCard';
import { PORTFOLIO_SAMPLES } from '../data/content';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAFAFA] text-slate-900">
      <SEOHead
        title="Selected Work — Projects, Prototypes & Digital Work"
        description="A selection of projects, prototypes, and digital work created by NOVO WRITING HUB. Demonstrating technical capabilities in web development, slide decks, and documentation."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20 inline-block font-semibold">
            Technical Capabilities Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Selected Work
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            A selection of projects, prototypes, and digital work created by NOVO.
          </p>
        </div>

        {/* Genuine Work & Capabilities Disclosure Box */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 max-w-3xl mx-auto text-xs text-slate-800 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-slate-900 mb-0.5 font-mono">Capabilities Showcase Commitment:</p>
            <p className="text-slate-700 leading-relaxed">
              This showcase highlights sample prototypes, technical templates, and demonstration builds created by Anand Krishnan to illustrate what NOVO WRITING HUB can build for your business or project.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_SAMPLES.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Custom Request Banner */}
        <div className="glass-panel rounded-3xl p-8 lg:p-10 border border-slate-200 text-center max-w-3xl mx-auto space-y-4 bg-white shadow-sm">
          <Sparkles className="w-6 h-6 text-amber-700 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900">Have a Specific Project Specification in Mind?</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Send us your project outline on the Contact page, or WhatsApp us at 7540072112, and we will build a custom prototype or sample tailored specifically to your required stack.
          </p>
        </div>
      </div>
    </div>
  );
}
