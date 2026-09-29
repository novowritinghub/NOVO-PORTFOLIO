import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink, Shield, FileText, Phone, MessageCircle } from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070A10] border-t border-amber-500/20 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <img
                src="/assets/novo-logo.jpg"
                alt="NOVO WRITING HUB Logo"
                className="w-10 h-10 rounded-xl object-contain border border-amber-500/30 bg-black/50 shadow-md"
              />
              <span className="font-heading text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {BRAND_INFO.name}
              </span>
            </Link>
            <p className="text-xs font-semibold text-amber-400 tracking-wide">
              “{BRAND_INFO.tagline}”
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {BRAND_INFO.positioning}. Independent digital-services brand operated by <span className="text-slate-200 font-medium">{BRAND_INFO.owner}</span>. Practical solutions for students, professionals, creators, and small businesses.
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono bg-amber-950/50 border border-amber-500/30 text-amber-300">
                Independent Digital Services
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white tracking-wider uppercase font-mono">Navigation</h3>
            <ul className="space-y-2 text-xs">
              {['Home', 'About', 'Services', 'Portfolio', 'Skills', 'Process', 'FAQ', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 text-slate-300"
                    >
                      <span>{item}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Featured Services Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white tracking-wider uppercase font-mono">Services Offered</h3>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="hover:text-amber-400 transition-colors text-slate-300 line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Info & Fiverr */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white tracking-wider uppercase font-mono">Contact Details</h3>
            <div className="space-y-2.5 text-xs">
              {/* Phone (Clickable) */}
              <a
                href={BRAND_INFO.contact.phoneLink}
                className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors group"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-slate-200 group-hover:text-amber-400">
                  Phone: {BRAND_INFO.contact.phone}
                </span>
              </a>

              {/* WhatsApp (Clickable) */}
              <a
                href={BRAND_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-slate-200 group-hover:text-emerald-400">
                  WhatsApp: {BRAND_INFO.contact.whatsapp}
                </span>
              </a>

              {/* Email (Clickable) */}
              <a
                href={BRAND_INFO.contact.emailLink}
                className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-slate-200 group-hover:text-amber-400 text-[11px]">
                  {BRAND_INFO.contact.email}
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-slate-300">
                  Location: {BRAND_INFO.contact.location}
                </span>
              </div>

              {/* Fiverr Profile */}
              <div className="pt-2">
                <a
                  href={BRAND_INFO.fiverr.profileUrlPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 border border-amber-500/30 transition-colors inline-flex items-center gap-1.5 font-mono text-[11px]"
                >
                  <span>Fiverr: {BRAND_INFO.fiverr.username}</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {BRAND_INFO.name}. All rights reserved. Operated by {BRAND_INFO.owner}.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-amber-400" /> Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-amber-400" /> Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
