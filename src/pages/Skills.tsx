import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { SKILLS_DATA, SkillItem } from '../data/content';
import { 
  Code2, Palette, FileCode, Terminal, Server, Smartphone, 
  Globe, Presentation, FileSpreadsheet, LifeBuoy, Layout, Wrench, CheckCircle 
} from 'lucide-react';

const skillIconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-amber-700" />,
  Palette: <Palette className="w-6 h-6 text-amber-700" />,
  FileCode: <FileCode className="w-6 h-6 text-amber-700" />,
  Terminal: <Terminal className="w-6 h-6 text-amber-700" />,
  Server: <Server className="w-6 h-6 text-amber-700" />,
  Smartphone: <Smartphone className="w-6 h-6 text-amber-700" />,
  Globe: <Globe className="w-6 h-6 text-amber-700" />,
  Presentation: <Presentation className="w-6 h-6 text-amber-700" />,
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-amber-700" />,
  LifeBuoy: <LifeBuoy className="w-6 h-6 text-amber-700" />,
  Layout: <Layout className="w-6 h-6 text-amber-700" />,
  Wrench: <Wrench className="w-6 h-6 text-amber-700" />
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Design & Docs', 'Services'];

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => selectedCategory === 'All' || skill.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAFAFA] text-slate-900">
      <SEOHead
        title="Skills & Technical Capabilities"
        description="Technical stack and capabilities at NOVO WRITING HUB: HTML, CSS, JavaScript, Python, Flask, Responsive Web Design, Web Development, Presentation Design, Microsoft PowerPoint, Technical Support, Website Maintenance, Graphic Design."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20 inline-block font-semibold">
            Technical Stack
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Skills & <span className="text-gradient-gold">Technical Capabilities</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
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
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: SkillItem) => {
            const icon = skillIconMap[skill.iconName] || <Code2 className="w-6 h-6 text-amber-700" />;

            return (
              <div
                key={skill.name}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-200 bg-white flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {icon}
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-amber-500/10 text-amber-900 border border-amber-500/30 font-bold">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-700" /> Active Capability
                  </span>
                  <span className="text-slate-400">NOVO Studio</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
