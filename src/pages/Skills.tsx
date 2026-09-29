import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { SKILLS_DATA, SkillItem } from '../data/content';
import { 
  Code2, Palette, FileCode, Terminal, Server, Smartphone, 
  Globe, Presentation, FileSpreadsheet, LifeBuoy, Layout, Wrench, CheckCircle 
} from 'lucide-react';

const skillIconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-amber-400" />,
  Palette: <Palette className="w-6 h-6 text-amber-400" />,
  FileCode: <FileCode className="w-6 h-6 text-amber-400" />,
  Terminal: <Terminal className="w-6 h-6 text-amber-400" />,
  Server: <Server className="w-6 h-6 text-amber-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-amber-400" />,
  Globe: <Globe className="w-6 h-6 text-amber-400" />,
  Presentation: <Presentation className="w-6 h-6 text-amber-400" />,
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-amber-400" />,
  LifeBuoy: <LifeBuoy className="w-6 h-6 text-amber-400" />,
  Layout: <Layout className="w-6 h-6 text-amber-400" />,
  Wrench: <Wrench className="w-6 h-6 text-amber-400" />
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Design & Docs', 'Services'];

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => selectedCategory === 'All' || skill.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEOHead
        title="Skills & Technical Capabilities"
        description="Technical stack and capabilities at NOVO WRITING HUB: HTML, CSS, JavaScript, Python, Flask, Responsive Web Design, Web Development, Presentation Design, Microsoft PowerPoint, Technical Support, Website Maintenance, Graphic Design."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-300 bg-amber-950/50 px-3.5 py-1 rounded-full border border-amber-500/30 inline-block">
            Technical Stack
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Skills & <span className="text-gradient-gold">Technical Capabilities</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            A practical overview of our technical tools across web development, Python backend scripting, presentation design, and site support.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-amber-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: SkillItem) => {
            const icon = skillIconMap[skill.iconName] || <Code2 className="w-6 h-6 text-amber-400" />;

            return (
              <div
                key={skill.name}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-amber-500/20 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-950/50 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {icon}
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-amber-950 text-amber-300 border border-amber-500/40">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 mt-6 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" /> Active Capability
                  </span>
                  <span className="text-slate-500">NOVO Studio</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
