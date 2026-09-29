import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { PROCESS_STEPS } from '../data/content';
import { 
  MessageSquareText, MapPin, LayoutTemplate, Code2, 
  CheckCircle2, Rocket, ShieldCheck, ArrowRight, Check 
} from 'lucide-react';

const processIconMap: Record<string, React.ReactNode> = {
  MessageSquareText: <MessageSquareText className="w-6 h-6 text-amber-400" />,
  MapPin: <MapPin className="w-6 h-6 text-amber-400" />,
  LayoutTemplate: <LayoutTemplate className="w-6 h-6 text-amber-400" />,
  Code2: <Code2 className="w-6 h-6 text-amber-400" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-amber-400" />,
  Rocket: <Rocket className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />
};

export default function Process() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEOHead
        title="Professional Working Process — 7 Steps"
        description="Discover the 7-step working process at NOVO WRITING HUB: Requirement Discussion, Planning, Design, Development, Testing, Delivery, and Support."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-300 bg-amber-950/50 px-3.5 py-1 rounded-full border border-amber-500/30 inline-block">
            Step-by-Step Delivery Method
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Our 7-Step <span className="text-gradient-gold">Working Process</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Transparent, predictable, and client-focused. Here is how we turn your requirements into a completed digital deliverable.
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical Connecting Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400 to-amber-500/20 -translate-x-1/2" />

          {PROCESS_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const icon = processIconMap[step.iconName] || <Code2 className="w-6 h-6 text-amber-400" />;

            return (
              <div
                key={step.stepNumber}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                {/* Desktop Left / Right positioning */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:pr-12 lg:text-right' : 'lg:order-2 lg:pl-12 lg:text-left'
                  }`}
                >
                  <div className="glass-panel glass-panel-hover rounded-3xl p-6 lg:p-8 border border-amber-500/20 group">
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        isEven ? 'lg:justify-end' : 'lg:justify-start'
                      }`}
                    >
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-amber-950 text-amber-400 border border-amber-500/40">
                        STEP {step.stepNumber}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center">
                        {icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="pt-4 border-t border-white/10">
                      <h4
                        className={`text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5 ${
                          isEven ? 'lg:justify-end' : 'lg:justify-start'
                        }`}
                      >
                        Deliverables at this stage:
                      </h4>
                      <div
                        className={`flex flex-wrap gap-2 ${
                          isEven ? 'lg:justify-end' : 'lg:justify-start'
                        }`}
                      >
                        {step.deliverables.map((del, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-[11px] font-mono text-slate-200 bg-slate-900 px-2.5 py-1 rounded-md border border-white/5 inline-flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 text-amber-400" />
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Badge Node for Desktop */}
                <div className="hidden lg:flex lg:col-span-2 justify-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-amber-500 text-amber-400 font-mono font-bold text-sm flex items-center justify-center shadow-lg shadow-amber-500/20">
                    {step.stepNumber}
                  </div>
                </div>

                <div className={`hidden lg:block lg:col-span-4 ${isEven ? 'lg:order-2' : ''}`} />
              </div>
            );
          })}
        </div>

        {/* Start Process CTA */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center border border-amber-500/30 bg-gradient-to-b from-slate-900 to-amber-950/30">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to Begin Step 01?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Submit your project details to initiate the Requirement Discussion phase with zero obligation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/30 transition-all"
          >
            <span>Start Requirement Discussion</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
