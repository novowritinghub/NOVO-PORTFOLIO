import SEOHead from '../components/SEOHead';
import { BRAND_INFO } from '../data/content';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEOHead
        title="Privacy Policy"
        description="Privacy Policy for NOVO WRITING HUB in Thanjavur. Learn how we handle client enquiry data, project details, and privacy standards."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Shield className="w-3.5 h-3.5" /> Legal & Privacy Data Policy
          </div>
          <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-xs font-mono text-slate-400">
            Last Updated: September 2026 | Operator: {BRAND_INFO.name} ({BRAND_INFO.owner}) — {BRAND_INFO.contact.location}
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 lg:p-12 border border-amber-500/20 space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Overview & Data Philosophy</h2>
            <p>
              NOVO WRITING HUB (“we”, “our”, or “us”), operated by Anand Krishnan in Thanjavur, values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, process, and protect data provided to us when you visit our website or submit project inquiries.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-white/5">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>
              We collect information strictly necessary to communicate with you and perform agreed-upon digital services. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-slate-300">
              <li><strong>Contact Information:</strong> Name, email address ({BRAND_INFO.contact.email}), phone/WhatsApp number ({BRAND_INFO.contact.phone}), and messaging handles when submitted via our enquiry form.</li>
              <li><strong>Project Requirements:</strong> Technical specifications, budget preferences, slide content, and project briefs.</li>
              <li><strong>Usage Data:</strong> Standard server access logs collected anonymously for site performance optimization.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-white/5">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            <p>We use your submitted data exclusively for the following operational purposes:</p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-slate-300">
              <li>Responding to your project inquiries and preparing accurate cost proposals.</li>
              <li>Executing agreed-upon web development, presentation design, or technical documentation services.</li>
              <li>Sending essential transactional updates regarding active projects.</li>
            </ul>
            <p className="text-xs text-amber-300 font-mono pt-1">
              We DO NOT sell, rent, or trade your personal information to third-party marketing companies.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-white/5">
            <h2 className="text-xl font-bold text-white">4. Confidentiality & Non-Disclosure</h2>
            <p>
              All proprietary project data, source code, business slide decks, and documentation shared with NOVO WRITING HUB are treated with strict confidentiality.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-white/5">
            <h2 className="text-xl font-bold text-white">5. Contacting Us Regarding Data Rights</h2>
            <p>
              If you wish to review, update, or request the deletion of any personal details provided to NOVO WRITING HUB, please contact Anand Krishnan via Phone/WhatsApp (7540072112) or Email ({BRAND_INFO.contact.email}).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
