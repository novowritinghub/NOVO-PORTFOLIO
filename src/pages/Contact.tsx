import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { BRAND_INFO, SERVICES_DATA } from '../data/content';
import { 
  Mail, MapPin, ExternalLink, Send, CheckCircle2, 
  Phone, MessageCircle, Copy, Check
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
  const [copied, setCopied] = useState(false);

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

  // Generate mailto and WhatsApp URLs
  const emailSubject = `Project Enquiry: ${formData.service} - ${formData.name}`;
  const emailBody = `Hello Anand Krishnan / NOVO WRITING HUB,

I would like to enquire about your digital services:

- Name: ${formData.name}
- Email: ${formData.email}
- Service Required: ${formData.service}
- Estimated Budget: ${formData.budget}
- Location: ${BRAND_INFO.contact.location}

Project Details & Requirements:
${formData.details}

Best regards,
${formData.name}`;

  const mailtoUrl = `mailto:${BRAND_INFO.contact.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  
  const whatsappText = `Hello Anand, I want to start a project with NOVO WRITING HUB.

Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}
Budget: ${formData.budget}
Details: ${formData.details}`;

  const whatsappUrl = `https://wa.me/917540072112?text=${encodeURIComponent(whatsappText)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Trigger mailto directly so customer's email app opens pre-filled
    window.location.href = mailtoUrl;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(emailBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAFAFA] text-slate-900">
      <SEOHead
        title="Contact NOVO WRITING HUB"
        description="Contact Anand Krishnan at NOVO WRITING HUB in Thanjavur. Phone: 7540072112, Email: novowrirtinghub@gmail.com. Submit a project enquiry or hire on Fiverr."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20 inline-block font-semibold">
            Project Discussion
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Contact <span className="text-gradient-gold">NOVO WRITING HUB</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Submit your enquiry below to immediately email or WhatsApp Anand Krishnan at <span className="font-mono font-semibold text-slate-900">{BRAND_INFO.contact.email}</span> / <span className="font-mono font-semibold text-slate-900">7540072112</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 bg-white relative shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Send className="w-5 h-5 text-amber-700" /> Project Enquiry Form
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Tell us about your project objectives, timeline, and key requirements.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-amber-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Enquiry Prepared!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your project request for <strong className="text-amber-800">{formData.service}</strong> is ready. Please click below to send it directly to Anand Krishnan:
                    </p>
                  </div>

                  {/* Immediate Action Buttons for Guaranteed Delivery */}
                  <div className="flex flex-col gap-3 pt-2 max-w-md mx-auto">
                    <a
                      href={mailtoUrl}
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md hover:from-amber-400 hover:to-yellow-500 transition-all flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Email to novowrirtinghub@gmail.com</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp (+91 7540072112)</span>
                    </a>

                    <button
                      onClick={handleCopy}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied Request Text!' : 'Copy Full Request Text'}</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
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
                      className="text-xs font-mono text-slate-500 hover:text-slate-900 underline"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1.5">
                      Name <span className="text-amber-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1.5">
                      Email <span className="text-amber-700">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1.5">
                      Service Required <span className="text-amber-700">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all cursor-pointer"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title} className="bg-white text-slate-900">
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Digital Service Package" className="bg-white text-slate-900">
                        Custom Digital Service Package
                      </option>
                    </select>
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1.5">
                      Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all cursor-pointer"
                    >
                      <option value="Under $100" className="bg-white text-slate-900">Under $100</option>
                      <option value="$100 - $300" className="bg-white text-slate-900">$100 - $300</option>
                      <option value="$300 - $700" className="bg-white text-slate-900">$300 - $700</option>
                      <option value="$700 - $1,500" className="bg-white text-slate-900">$700 - $1,500</option>
                      <option value="$1,500+" className="bg-white text-slate-900">$1,500+</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1.5">
                      Project Details <span className="text-amber-700">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project goals, required features, or specific questions..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                    />
                  </div>

                  {/* Buttons: Send Enquiry & Hire on Fiverr */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-1/2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <a
                      href={BRAND_INFO.fiverr.profileUrlPlaceholder}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
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
            {/* Direct Contact Cards */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white space-y-5 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Direct Contact Details</h2>

              <div className="space-y-3.5 text-xs">
                {/* Clickable Phone */}
                <a
                  href={BRAND_INFO.contact.phoneLink}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between group transition-colors block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-500 font-mono text-[11px] block">Phone:</span>
                      <span className="font-mono text-slate-900 font-bold group-hover:text-amber-700 transition-colors text-sm">
                        {BRAND_INFO.contact.phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-800 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20 font-bold">
                    Call Direct
                  </span>
                </a>

                {/* Clickable WhatsApp */}
                <a
                  href={BRAND_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-emerald-500/30 flex items-center justify-between group transition-colors block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-500 font-mono text-[11px] block">WhatsApp:</span>
                      <span className="font-mono text-slate-900 font-bold group-hover:text-emerald-700 transition-colors text-sm">
                        {BRAND_INFO.contact.whatsapp}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 font-bold">
                    Chat Now
                  </span>
                </a>

                {/* Clickable Email */}
                <a
                  href={BRAND_INFO.contact.emailLink}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between group transition-colors block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-500 font-mono text-[11px] block">Email:</span>
                      <span className="font-mono text-slate-900 font-bold group-hover:text-amber-700 transition-colors text-xs">
                        {BRAND_INFO.contact.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-800 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20 font-bold">
                    Mail Us
                  </span>
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-amber-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono text-[11px] block">Location:</span>
                    <span className="font-mono text-slate-900 font-bold text-sm">
                      {BRAND_INFO.contact.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Fiverr Section */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 bg-slate-50 space-y-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-amber-500 text-slate-950 font-bold uppercase">
                Fiverr Platform
              </span>
              <h2 className="text-xl font-bold text-slate-900">{BRAND_INFO.fiverr.heading}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {BRAND_INFO.fiverr.text}
              </p>
              
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Seller:</span>
                  <span className="text-slate-900 font-bold">{BRAND_INFO.fiverr.displayName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Username:</span>
                  <span className="text-amber-700 font-bold">{BRAND_INFO.fiverr.username}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Title:</span>
                  <span className="text-slate-700">{BRAND_INFO.fiverr.title}</span>
                </div>
              </div>

              <a
                href={BRAND_INFO.fiverr.profileUrlPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-amber-400 transition-all shadow-md"
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
