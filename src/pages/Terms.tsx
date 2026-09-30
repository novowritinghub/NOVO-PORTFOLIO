import SEOHead from '../components/SEOHead';
import { BRAND_INFO } from '../data/content';
import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAFAFA] text-slate-900">
      <SEOHead
        title="Terms & Conditions"
        description="Terms & Conditions for NOVO WRITING HUB. Understand client service terms, payment terms, revisions, intellectual property, and warranties."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-mono font-semibold">
            <FileText className="w-3.5 h-3.5 text-amber-700" /> Service Agreement & Guidelines
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900">Terms & Conditions</h1>
          <p className="text-xs font-mono text-slate-500">
            Last Updated: September 2026 | Service Provider: {BRAND_INFO.name} ({BRAND_INFO.owner}) — {BRAND_INFO.contact.location}
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 lg:p-12 border border-slate-200 bg-white space-y-8 text-sm text-slate-700 leading-relaxed shadow-sm">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing the website of NOVO WRITING HUB or hiring our digital services (web development, portfolio creation, presentation design, or technical documentation), you agree to be bound by these Terms & Conditions.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">2. Scope of Services & Proposals</h2>
            <p>
              Specific project scopes, deliverables, timelines, and pricing are defined in written project proposals, Fiverr order requirements, or direct agreements.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">3. Payment Terms & Handovers</h2>
            <p>
              Payment terms follow agreed milestone schedules or platform escrow terms (Fiverr). Final source files, website code handovers, or PowerPoint slide decks are released upon payment completion.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">4. Revisions & Acceptance</h2>
            <p>
              Each project includes dedicated revision rounds specified in the project proposal to ensure final output matches agreed requirements.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">5. Governing Law & Contact</h2>
            <p>
              For any inquiries regarding these terms, please contact Anand Krishnan via Phone/WhatsApp (7540072112) or Email ({BRAND_INFO.contact.email}).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
