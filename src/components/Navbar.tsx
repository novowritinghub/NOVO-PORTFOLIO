import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Skills', path: '/skills' },
    { name: 'Process', path: '/process' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo Image & Brand Title */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          >
            <img
              src="/assets/novo-logo.jpg"
              alt="NOVO WRITING HUB Logo"
              className="w-10 h-10 rounded-xl object-contain border border-amber-500/30 bg-slate-900 group-hover:scale-105 transition-transform duration-300 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold tracking-tight text-slate-900 group-hover:text-amber-700 transition-colors">
                {BRAND_INFO.name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider">
                “{BRAND_INFO.tagline}”
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200 backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-amber-700" /> : <Menu className="w-6 h-6 text-amber-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl transition-all duration-300 px-4 py-6 text-slate-900">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-500/15 border border-amber-500/30 text-amber-800 font-bold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-slate-200 mt-2">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
