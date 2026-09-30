import { Star, MessageCircle, Mail, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function ConnectWithNovo() {
  const platforms = [
    {
      name: "Google Reviews",
      label: "Leave a Google Review",
      description: "Review our digital services & web development work on Google Business.",
      url: "https://g.page/r/CX-rN80lscTGEBM/review",
      icon: <Star className="w-6 h-6 text-yellow-600 fill-yellow-500" />,
      badge: "Google Profile",
      iconBg: "bg-amber-500/10 border-amber-500/20",
      badgeStyle: "bg-amber-500/10 text-amber-900 border-amber-500/30",
      accentBorder: "hover:border-amber-500/50",
      btnText: "Review on Google"
    },
    {
      name: "Fiverr",
      label: "Fiverr Seller Profile",
      description: "Order web development & technical services on Fiverr with milestone protection.",
      url: BRAND_INFO.fiverr.profileUrlPlaceholder || "https://www.fiverr.com/novowritinghub",
      icon: <ExternalLink className="w-6 h-6 text-emerald-600" />,
      badge: "Verified Seller",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      badgeStyle: "bg-emerald-500/10 text-emerald-900 border-emerald-500/30",
      accentBorder: "hover:border-emerald-500/50",
      btnText: "View Fiverr Profile"
    },
    {
      name: "WhatsApp",
      label: "WhatsApp Business",
      description: "Direct instant chat with Anand Krishnan (+91 7540072112).",
      url: BRAND_INFO.contact.whatsappLink || "https://wa.me/917540072112",
      icon: <MessageCircle className="w-6 h-6 text-emerald-600" />,
      badge: "Instant Chat",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      badgeStyle: "bg-emerald-500/10 text-emerald-900 border-emerald-500/30",
      accentBorder: "hover:border-emerald-500/50",
      btnText: "Chat on WhatsApp"
    },
    {
      name: "Email",
      label: "Official Email",
      description: "Send direct project briefs & documentation enquiries to novowritinghub@gmail.com.",
      url: "mailto:novowritinghub@gmail.com",
      icon: <Mail className="w-6 h-6 text-amber-700" />,
      badge: "Direct Contact",
      iconBg: "bg-amber-500/10 border-amber-500/20",
      badgeStyle: "bg-amber-500/10 text-amber-900 border-amber-500/30",
      accentBorder: "hover:border-amber-500/50",
      btnText: "Send Email"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-slate-50 border-y border-slate-200 text-slate-900">
      {/* Background Mesh Grid Matching White Theme */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-mono font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Official Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect With <span className="text-gradient-gold">NOVO</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
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
              className={`group bg-white rounded-2xl p-6 border border-slate-200 ${platform.accentBorder} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-sm hover:shadow-md`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl ${platform.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {platform.icon}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${platform.badgeStyle} font-bold`}>
                    {platform.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 mt-0.5">
                    {platform.label}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {platform.description}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-900 font-bold group-hover:text-amber-800 transition-colors">
                <span>{platform.btnText}</span>
                <Globe className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
