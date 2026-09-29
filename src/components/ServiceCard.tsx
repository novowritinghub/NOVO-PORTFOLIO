import { Link } from 'react-router-dom';
import { ServiceItem } from '../data/content';
import { 
  Code, Briefcase, Building2, Cpu, Presentation, 
  FileText, Wrench, LifeBuoy, Palette, CheckCircle, UserCheck, ArrowRight 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6 text-amber-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-amber-400" />,
  Building2: <Building2 className="w-6 h-6 text-amber-400" />,
  Cpu: <Cpu className="w-6 h-6 text-amber-400" />,
  Presentation: <Presentation className="w-6 h-6 text-amber-400" />,
  FileText: <FileText className="w-6 h-6 text-amber-400" />,
  Wrench: <Wrench className="w-6 h-6 text-amber-400" />,
  LifeBuoy: <LifeBuoy className="w-6 h-6 text-amber-400" />,
  Palette: <Palette className="w-6 h-6 text-amber-400" />
};

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const icon = iconMap[service.iconName] || <Code className="w-6 h-6 text-amber-400" />;

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-6 lg:p-8 flex flex-col justify-between h-full border border-amber-500/20 group">
      <div>
        {/* Header Icon & Title */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300 shadow-md">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
              {service.title}
            </h3>
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300/80 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/20 inline-block mt-0.5">
              {service.category === 'web' ? 'Web Engineering' : service.category === 'design' ? 'Visual Design' : 'Technical Support'}
            </span>
          </div>
        </div>

        {/* Short Explanation */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Full Description Details */}
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* What is Included */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono">
            <CheckCircle className="w-4 h-4 text-amber-400" /> What's Included:
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {service.included.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Suitable Clients */}
        <div className="mb-6 pt-4 border-t border-white/10">
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-mono">
            <UserCheck className="w-4 h-4 text-amber-400" /> Suitable For:
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {service.suitableClients.map((client, idx) => (
              <span
                key={idx}
                className="text-[11px] text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded-md border border-white/5"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action CTA */}
      <div className="pt-4 border-t border-white/10 mt-auto">
        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-amber-500 text-slate-200 hover:text-slate-950 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 group/btn shadow-md"
        >
          <span>Enquire for {service.title}</span>
          <ArrowRight className="w-4 h-4 text-amber-400 group-hover/btn:text-slate-950 group-hover/btn:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
