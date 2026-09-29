import SEOHead from '../components/SEOHead';
import { BRAND_INFO } from '../data/content';
import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEOHead
        title="Terms & Conditions"
        description="Terms & Conditions for NOVO WRITING HUB. Understand client service terms, payment terms, revisions, intellectual property, and warranties."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" /> Service Agreement & Guidelines
          </div>
          <h1 className="text-4xl font-extrabold text-white">Terms & Conditions</h1>
          <p className="text-xs font-mono text-slate-400">
            Last Updated: September 2026 | Service Provider: {BRAND_INFO.name} ({BRAND_INFO.owner}) — {BRAND_INFO.contact.location}
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 lg:p-12 border border-amber-500/20 space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing the website of NOVO WRITING HUB or hiring our digital services (web development, portfolio creation, presentation design, or technical documentation), you agree to be bound by these Terms & Conditions.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-white/5">
            <h2 className="text-xl font-bold text-white">2. Scope of Services & Proposals</h2>
            <p>
              Specific project scopes, deliverables, timelines, and pricing are defined in written project proposals, Fiverr order requirements, or direct agreements.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-white/5">
            <h2 className="text-xl font-bold text-white">3. Payment Terms & Handovers</h2>
            <p>
              Payment terms follow agreed milestone schedules or platform escrow terms (Fiverr). Final source files, website code handovers, or PowerPoint slide decks are released upon payment completion.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-white/5">
            <h2 className="text-xl font-bold text-white">4. Revisions & Acceptance</h2>
            <p>
              Each project includes dedicated revision rounds specified in the project proposal to ensure final output matches agreed requirements.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-white/5">
            <h2 className="text-xl font-bold text-white">5. Governing Law & Contact</h2>
            <p>
              For any inquiries regarding these terms, please contact Anand Krishnan via Phone/WhatsApp (7540072112) or Email ({BRAND_INFO.contact.email}).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
