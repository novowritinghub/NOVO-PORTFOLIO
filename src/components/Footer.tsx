import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink, Shield, FileText, Phone, MessageCircle } from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100/90 border-t border-slate-200/90 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <img
                src="/assets/novo-logo.jpg"
                alt="NOVO WRITING HUB Logo"
                className="w-10 h-10 rounded-xl object-contain border border-amber-500/30 bg-slate-900 shadow-sm"
              />
              <span className="font-heading text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                {BRAND_INFO.name}
              </span>
            </Link>
            <p className="text-xs font-semibold text-amber-700 tracking-wide">
              “{BRAND_INFO.tagline}”
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {BRAND_INFO.positioning}. Independent digital-services brand operated by <span className="text-slate-900 font-semibold">{BRAND_INFO.owner}</span>. Practical solutions for students, professionals, creators, and small businesses.
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-800 font-medium">
                Independent Digital Services
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase font-mono">Navigation</h3>
            <ul className="space-y-2 text-xs">
              {['Home', 'About', 'Services', 'Portfolio', 'Skills', 'Process', 'FAQ', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className="hover:text-amber-700 transition-colors inline-flex items-center gap-1 text-slate-600 hover:font-medium"
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
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase font-mono">Services Offered</h3>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="hover:text-amber-700 transition-colors text-slate-600 line-clamp-1 hover:font-medium"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Info & Fiverr */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase font-mono">Contact Details</h3>
            <div className="space-y-2.5 text-xs">
              {/* Phone (Clickable) */}
              <a
                href={BRAND_INFO.contact.phoneLink}
                className="flex items-center gap-2.5 text-slate-700 hover:text-amber-700 transition-colors group"
              >
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="font-mono text-slate-800 group-hover:text-amber-700 font-medium">
                  Phone: {BRAND_INFO.contact.phone}
                </span>
              </a>

              {/* WhatsApp (Clickable) */}
              <a
                href={BRAND_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-700 hover:text-emerald-700 transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-mono text-slate-800 group-hover:text-emerald-700 font-medium">
                  WhatsApp: {BRAND_INFO.contact.whatsapp}
                </span>
              </a>

              {/* Email (Clickable) */}
              <a
                href={BRAND_INFO.contact.emailLink}
                className="flex items-center gap-2.5 text-slate-700 hover:text-amber-700 transition-colors group"
              >
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="font-mono text-slate-800 group-hover:text-amber-700 text-[11px] font-medium">
                  {BRAND_INFO.contact.email}
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-slate-700">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="font-mono text-slate-700">
                  Location: {BRAND_INFO.contact.location}
                </span>
              </div>

              {/* Fiverr Profile */}
              <div className="pt-2">
                <a
                  href={BRAND_INFO.fiverr.profileUrlPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 border border-amber-500/30 transition-colors inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold"
                >
                  <span>Fiverr: {BRAND_INFO.fiverr.username}</span>
                  <ExternalLink className="w-3 h-3 text-amber-700" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {BRAND_INFO.name}. All rights reserved. Operated by {BRAND_INFO.owner}.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-900 transition-colors flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-amber-700" /> Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-900 transition-colors flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-amber-700" /> Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
