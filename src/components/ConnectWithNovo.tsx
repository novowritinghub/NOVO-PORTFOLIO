import { Star, MessageCircle, Mail, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function ConnectWithNovo() {
  const platforms = [
    {
      name: "Google Reviews",
      label: "Leave a Google Review",
      description: "Review our digital services & web development work on Google Business.",
      url: "https://g.page/r/CX-rN80lscTGEBM/review",
      icon: <Star className="w-6 h-6 text-yellow-400 fill-yellow-400/20" />,
      badge: "Google Profile",
      accentBorder: "hover:border-yellow-400/50",
      accentGlow: "group-hover:shadow-yellow-500/10",
      btnText: "Review on Google"
    },
    {
      name: "Fiverr",
      label: "Fiverr Profile",
      description: "Order web development & technical services on Fiverr with escrow protection.",
      url: BRAND_INFO.fiverr.profileUrlPlaceholder || "https://www.fiverr.com/novowritinghub",
      icon: <ExternalLink className="w-6 h-6 text-emerald-400" />,
      badge: "Verified Seller",
      accentBorder: "hover:border-emerald-500/50",
      accentGlow: "group-hover:shadow-emerald-500/10",
      btnText: "View Fiverr Profile"
    },
    {
      name: "WhatsApp",
      label: "WhatsApp Business",
      description: "Direct instant chat with Anand Krishnan (+91 7540072112).",
      url: BRAND_INFO.contact.whatsappLink || "https://wa.me/917540072112",
      icon: <MessageCircle className="w-6 h-6 text-cyan-400" />,
      badge: "Instant Chat",
      accentBorder: "hover:border-cyan-400/50",
      accentGlow: "group-hover:shadow-cyan-500/10",
      btnText: "Chat on WhatsApp"
    },
    {
      name: "Email",
      label: "Official Email",
      description: "Send direct project briefs & documentation enquiries.",
      url: "mailto:novowritinghub@gmail.com",
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      badge: "Direct Contact",
      accentBorder: "hover:border-blue-500/50",
      accentGlow: "group-hover:shadow-blue-500/10",
      btnText: "Send Email"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-[#070A10] border-y border-blue-500/20 text-slate-100">
      {/* Dark Navy / Near-Black Background Glow Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[200px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-mono font-semibold shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">NOVO</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            Find NOVO WRITING HUB across our official platforms.
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target={platform.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`group bg-[#0D121F]/90 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 ${platform.accentBorder} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl ${platform.accentGlow}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {platform.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-blue-950/80 text-cyan-300 border border-blue-500/30 font-semibold">
                    {platform.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-300 mt-1">
                    {platform.label}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {platform.description}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-blue-500/10 flex items-center justify-between text-xs font-mono text-cyan-400 font-semibold group-hover:text-white transition-colors">
                <span>{platform.btnText}</span>
                <Globe className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
