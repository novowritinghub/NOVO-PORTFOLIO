import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { BRAND_INFO, SERVICES_DATA } from '../data/content';
import { 
  Mail, MapPin, ExternalLink, Send, CheckCircle2, 
  Phone, MessageCircle
} from 'lucide-react';

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: SERVICES_DATA[0].title,
    budget: '$100 - $300',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      const match = SERVICES_DATA.find(
        (s) => s.title.toLowerCase() === serviceParam.toLowerCase()
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.title }));
      }
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEOHead
        title="Contact NOVO WRITING HUB"
        description="Contact Anand Krishnan at NOVO WRITING HUB in Thanjavur. Phone: 7540072112, Email: novowrirtinghub@gmail.com. Submit a project enquiry or hire on Fiverr."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-300 bg-amber-950/50 px-3.5 py-1 rounded-full border border-amber-500/30 inline-block">
            Project Discussion
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Contact <span className="text-gradient-gold">NOVO WRITING HUB</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Reach out directly via Phone, WhatsApp, Email, or submit the project enquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-500/20 relative">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Send className="w-5 h-5 text-amber-400" /> Project Enquiry Form
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Tell us about your project objectives, timeline, and key requirements.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-amber-950/30 border border-amber-500/40 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Enquiry Submitted!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your enquiry for <strong className="text-amber-300">{formData.service}</strong> has been received. We will review your details and respond to <span className="font-mono text-slate-200">{formData.email}</span>.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          service: SERVICES_DATA[0].title,
                          budget: '$100 - $300',
                          details: ''
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 text-xs font-mono"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-1.5">
                      Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 placeholder-slate-500 text-xs font-medium focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-1.5">
                      Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 placeholder-slate-500 text-xs font-medium focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-1.5">
                      Service Required <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 text-xs font-medium focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all cursor-pointer"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Digital Service Package" className="bg-slate-900 text-white">
                        Custom Digital Service Package
                      </option>
                    </select>
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-1.5">
                      Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 text-xs font-medium focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all cursor-pointer"
                    >
                      <option value="Under $100" className="bg-slate-900 text-white">Under $100</option>
                      <option value="$100 - $300" className="bg-slate-900 text-white">$100 - $300</option>
                      <option value="$300 - $700" className="bg-slate-900 text-white">$300 - $700</option>
                      <option value="$700 - $1,500" className="bg-slate-900 text-white">$700 - $1,500</option>
                      <option value="$1,500+" className="bg-slate-900 text-white">$1,500+</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-1.5">
                      Project Details <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project goals, required features, or specific questions..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 placeholder-slate-500 text-xs font-medium focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                    />
                  </div>

                  {/* Buttons: Send Enquiry & Hire on Fiverr */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-1/2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <a
                      href={BRAND_INFO.fiverr.profileUrlPlaceholder}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-amber-500/30 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <span>Hire on Fiverr</span>
                      <ExternalLink className="w-4 h-4 text-amber-400" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & Fiverr Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Clickable Contact Information Cards */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/20 space-y-5">
              <h2 className="text-xl font-bold text-white">Direct Contact Info</h2>

              <div className="space-y-3.5 text-xs">
                {/* Clickable Phone */}
                <a
                  href={BRAND_INFO.contact.phoneLink}
                  className="p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-amber-500/20 flex items-center justify-between group transition-colors block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 font-mono text-[11px] block">Phone:</span>
                      <span className="font-mono text-slate-100 font-bold group-hover:text-amber-400 transition-colors text-sm">
                        {BRAND_INFO.contact.phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-1 rounded border border-amber-500/30">
                    Call Direct
                  </span>
                </a>

                {/* Clickable WhatsApp */}
                <a
                  href={BRAND_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-emerald-500/30 flex items-center justify-between group transition-colors block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/50 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 font-mono text-[11px] block">WhatsApp:</span>
                      <span className="font-mono text-slate-100 font-bold group-hover:text-emerald-400 transition-colors text-sm">
                        {BRAND_INFO.contact.whatsapp}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/30">
                    Chat Now
                  </span>
                </a>

                {/* Clickable Email */}
                <a
                  href={BRAND_INFO.contact.emailLink}
                  className="p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-amber-500/20 flex items-center justify-between group transition-colors block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 font-mono text-[11px] block">Email:</span>
                      <span className="font-mono text-slate-100 font-bold group-hover:text-amber-400 transition-colors text-xs">
                        {BRAND_INFO.contact.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-1 rounded border border-amber-500/30">
                    Mail Us
                  </span>
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono text-[11px] block">Location:</span>
                    <span className="font-mono text-slate-200 font-bold text-sm">
                      {BRAND_INFO.contact.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Fiverr Section */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-950 space-y-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-amber-500 text-slate-950 font-bold uppercase">
                Fiverr Platform
              </span>
              <h2 className="text-xl font-bold text-white">{BRAND_INFO.fiverr.heading}</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                {BRAND_INFO.fiverr.text}
              </p>
              
              <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">Seller:</span>
                  <span className="text-white font-bold">{BRAND_INFO.fiverr.displayName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Username:</span>
                  <span className="text-amber-400">{BRAND_INFO.fiverr.username}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Title:</span>
                  <span className="text-slate-300">{BRAND_INFO.fiverr.title}</span>
                </div>
              </div>

              <a
                href={BRAND_INFO.fiverr.profileUrlPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md"
              >
                <span>View Fiverr Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
