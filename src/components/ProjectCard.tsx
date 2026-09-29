import { useState } from 'react';
import { ProjectItem } from '../data/content';
import { Layers, ArrowRight, ExternalLink, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-amber-500/20 flex flex-col justify-between h-full group">
        <div>
          {/* Visual Placeholder Header with Dark Studio Palette */}
          <div className="relative h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 p-6 flex flex-col justify-between overflow-hidden border-b border-amber-500/20">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-500/30">
                {project.badge}
              </span>
              <Layers className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>

            <div className="relative z-10 my-auto text-center py-4">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-slate-900/90 border border-amber-500/20 text-slate-300 shadow-xl group-hover:scale-105 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-amber-400 mr-2" />
                <span className="text-xs font-mono font-medium text-slate-200">
                  {project.imagePlaceholderText}
                </span>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Category: {project.category}</span>
              <span className="text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> NOVO Build
              </span>
            </div>
          </div>

          {/* Project Details Body */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-xs font-medium text-amber-400 mb-3 font-mono">
              Category: {project.category}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {project.shortDescription}
            </p>

            {/* Technologies Badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer Button */}
        <div className="p-6 pt-0 mt-auto">
          <button
            onClick={() => setShowModal(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-sm"
          >
            <span>View Specification</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div
            className="bg-[#0F172A] border border-amber-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono"
            >
              ✕ Close
            </button>

            <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-amber-950 text-amber-300 border border-amber-500/40 inline-block mb-3">
              {project.badge}
            </span>

            <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
            <p className="text-xs font-mono text-amber-400 mb-4">Category: {project.category}</p>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">Detailed Overview:</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Key Capabilities:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md text-xs font-mono bg-amber-950/60 border border-amber-500/40 text-amber-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Demo Link Placeholder */}
            {project.demoAvailable && (
              <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 flex items-center justify-between text-xs font-mono text-amber-300 mb-6">
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-amber-400" /> Interactive Preview:
                </span>
                <span className="bg-slate-900 px-2.5 py-1 rounded text-[11px] text-slate-200 border border-white/10">
                  {project.demoUrlPlaceholder}
                </span>
              </div>
            )}

            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
