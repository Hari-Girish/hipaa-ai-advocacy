import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const pillars = [
  {
    n: '01', color: '#E8A838',
    title: 'AI-Specific Informed Consent',
    subtitle: 'Require explicit, standalone disclosure when patient imaging data is used for AI training',
    problem: 'Current HIPAA authorizations are broad and non-specific. Patients sign general research consent without understanding that their scans may train commercial AI systems.',
    proposal: "Amend 45 CFR § 164.508 to require a distinct, plain-language AI Use Disclosure that clearly states: (1) that the patient's imaging data may be used to train AI models, (2) whether those models may be commercialized, (3) any commercial partners involved, and (4) the patient's right to opt out without affecting care.",
    impact: 'Restores meaningful patient autonomy. Aligns U.S. standards with EU AI Act requirements. Enables genuine informed participation in the AI research ecosystem.',
    draft: '"Any covered entity or business associate that uses protected health information, including medical imaging data in de-identified or pseudonymized form, to develop, train, validate, or improve artificial intelligence systems must obtain a separate, specific written authorization from the patient, distinct from any other authorization for treatment or research purposes..."',
    comparable: "The EU AI Act (2024) requires explicit consent for AI training uses of personal data. Canada's PIPEDA modernization (Bill C-27) includes AI transparency requirements. The U.S. currently has no federal equivalent.",
  },
  {
    n: '02', color: '#3AABAB',
    title: 'Modernized De-identification Standards',
    subtitle: 'Update HIPAA Safe Harbor to reflect the reality of modern re-identification capabilities',
    problem: 'The 18-identifier Safe Harbor standard was developed in the 1990s. Modern deep learning models can re-identify patients from "de-identified" images using biometric features invisible to human reviewers.',
    proposal: 'Direct HHS to update de-identification standards within 18 months to include: (1) mandatory removal of DICOM metadata beyond current Safe Harbor fields, (2) image perturbation requirements for biometric features, (3) mandatory annual re-identification risk assessments for any dataset with >10,000 records, and (4) an approved algorithm registry for de-identification tools.',
    impact: 'Closes the most technically exploitable gap in current law. Brings HIPAA standards into alignment with modern threat models. Requires industry to maintain ongoing compliance rather than one-time certification.',
    draft: '"The Secretary of Health and Human Services shall, within 18 months of enactment, issue updated standards for the de-identification of medical imaging data that account for biometric re-identification risks specific to imaging modalities including MRI, CT, PET, and mammography, and shall update such standards not less than once every 5 years thereafter..."',
    comparable: "The NIST AI Risk Management Framework (2023) recommends updated de-identification standards for AI systems. California's CMIA has been interpreted to require stronger de-identification for AI uses. No federal standard currently exists.",
  },
  {
    n: '03', color: '#E87070',
    title: 'Federal Oversight of Academic AI Research',
    subtitle: 'Establish a dedicated oversight mechanism for AI uses of patient data at academic institutions',
    problem: 'Academic medical centers occupy a regulatory gray zone. HIPAA applies but is rarely enforced. FDA oversight applies only to cleared AI devices. IRBs are not designed to evaluate AI-specific harms.',
    proposal: 'Establish an Academic AI Imaging Oversight Program within the Office for Civil Rights (OCR), requiring: (1) mandatory registration of all AI research projects using patient imaging data, (2) annual compliance audits for institutions exceeding 50,000 patient images, (3) mandatory disclosure of commercial partnerships, and (4) a patient advocacy liaison role in institutional AI governance.',
    impact: 'Creates accountability without stifling legitimate research. Generates a national database of AI imaging research that can inform future regulation. Provides patients and advocates with meaningful oversight access.',
    draft: '"The Office for Civil Rights of the Department of Health and Human Services shall establish an Academic Artificial Intelligence Imaging Oversight Program, which shall require covered entities that are academic medical centers to register all research projects involving the use of medical imaging data for artificial intelligence development, training, or validation..."',
    comparable: "The FTC has begun investigating commercial AI data practices. The FDA's Digital Health Center of Excellence oversees AI medical devices. Neither body has jurisdiction over the research-to-AI pipeline at academic centers.",
  },
];

const timeline = [
  { year: 'Now', title: 'Build the Coalition', desc: 'Engage cancer patient advocacy organizations, medical informatics societies, and civil liberties groups to co-sponsor the proposal.' },
  { year: '2025', title: 'Committee Hearings', desc: 'Push for hearings before the Senate HELP Committee and House Energy & Commerce subcommittees on health IT and privacy.' },
  { year: '2025–26', title: 'Pilot Program Legislation', desc: 'Pass targeted pilot program establishing AI consent requirements at federally-funded academic medical centers as a first step.' },
  { year: '2026+', title: 'Full HIPAA Amendment', desc: 'Build on pilot program evidence to enact the full three-pillar amendment, with phased compliance timelines for all covered entities.' },
];

const supporters = ['American Cancer Society (Advocacy)', 'American Medical Informatics Association', 'Patient Privacy Rights Foundation', 'Electronic Frontier Foundation', 'Coalition of Cancer Patient Advocates'];

export default function PolicyPage() {
  const [openPillar, setOpenPillar] = useState(0);
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const p = pillars[openPillar];

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '9rem 0 5rem', background: '#0D1B2A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', opacity: 0.03, background: 'linear-gradient(135deg,#E8A838,transparent)', pointerEvents: 'none' }} />
        <div className="container-narrow">
          <div className="pill" style={{ marginBottom: '1.5rem' }}>Policy Proposal</div>
          <h1 className="headline-lg" style={{ marginBottom: '1.5rem' }}>
            A three-pillar<br />
            <span style={{ fontStyle: 'italic', color: '#E8A838' }}>HIPAA amendment</span><br />
            for the AI era
          </h1>
          <div className="sep" />
          <p className="body-lg" style={{ color: 'rgba(244,241,236,0.72)', maxWidth: 620 }}>
            We propose a targeted legislative amendment — not a wholesale HIPAA overhaul — that closes three specific gaps. These are changes Congress can pass now, before the AI medical imaging market scales beyond the law's reach.
          </p>
        </div>
      </section>

      {/* SUMMARY CARDS */}
      <section style={{ padding: '4rem 0', background: '#142233', borderBottom: '1px solid rgba(232,168,56,0.1)' }}>
        <div className="container">
          <div className="grid-3">
            {pillars.map((pl, i) => (
              <div
                key={i}
                onClick={() => { setOpenPillar(i); document.getElementById('pillar-detail')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  padding: '2rem', cursor: 'pointer',
                  background: openPillar === i ? '#1A2E45' : 'transparent',
                  border: `1px solid ${openPillar === i ? 'rgba(244,241,236,0.12)' : 'rgba(244,241,236,0.04)'}`,
                  borderTop: `3px solid ${pl.color}`,
                  transition: 'background 0.2s',
                }}
              >
                <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '3rem', fontWeight: 700, color: pl.color, opacity: 0.2, lineHeight: 1 }}>{pl.n}</div>
                <h3 className="headline-sm" style={{ color: pl.color, margin: '0.75rem 0 0.5rem' }}>{pl.title}</h3>
                <p className="body-md" style={{ color: 'rgba(244,241,236,0.55)', fontSize: '0.85rem' }}>{pl.subtitle}</p>
                <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: pl.color, fontWeight: 600 }}>
                  {openPillar === i ? 'Currently viewing ↓' : 'Read full proposal →'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLAR DETAIL */}
      <section id="pillar-detail" style={{ padding: '6rem 0', background: '#F4F1EC' }}>
        <div className="container">
          {/* Pill tabs */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {pillars.map((pl, i) => (
              <button
                key={i}
                onClick={() => setOpenPillar(i)}
                style={{
                  background: openPillar === i ? pl.color : 'transparent',
                  color: openPillar === i ? (i === 2 ? 'white' : '#0D1B2A') : '#6B7280',
                  border: `1px solid ${openPillar === i ? pl.color : '#E8E4DC'}`,
                  padding: '0.5rem 1.25rem',
                  fontFamily: 'DM Sans,sans-serif', fontSize: '0.82rem', fontWeight: 600,
                  letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                Pillar {pl.n}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '5rem', fontWeight: 700, color: p.color, opacity: 0.15, lineHeight: 1 }}>{p.n}</div>
                <div>
                  <h2 className="headline-md" style={{ color: '#1C1C1E' }}>{p.title}</h2>
                  <p style={{ color: '#2E8B8B', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.25rem' }}>{p.subtitle}</p>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E87070', marginBottom: '0.75rem' }}>The Problem</div>
                <p className="body-md" style={{ color: '#6B7280', lineHeight: 1.8 }}>{p.problem}</p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2E8B8B', marginBottom: '0.75rem' }}>Our Proposal</div>
                <p className="body-md" style={{ color: '#1C1C1E', lineHeight: 1.8 }}>{p.proposal}</p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1C1C1E', opacity: 0.5, marginBottom: '0.75rem' }}>Expected Impact</div>
                <p className="body-md" style={{ color: '#6B7280', lineHeight: 1.8 }}>{p.impact}</p>
              </div>

              <div style={{ background: '#F8F6F0', border: '1px solid #E8E4DC', borderLeft: `4px solid ${p.color}`, padding: '1.5rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.color, marginBottom: '0.75rem' }}>Draft Amendment Language (excerpt)</div>
                <p style={{ fontFamily: 'Georgia,serif', fontSize: '0.9rem', lineHeight: 1.75, color: '#1C1C1E', fontStyle: 'italic' }}>{p.draft}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'white', border: '1px solid #E8E4DC', borderTop: `3px solid ${p.color}`, padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div className="section-label teal" style={{ marginBottom: '1rem' }}>Comparable Legislation</div>
                <p className="body-md" style={{ color: '#6B7280', lineHeight: 1.75 }}>{p.comparable}</p>
              </div>

              <div style={{ background: 'white', border: '1px solid #E8E4DC', padding: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Who supports this?</div>
                {supporters.map((org, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0', borderBottom: '1px solid #F0EDE8', fontSize: '0.85rem', color: '#1C1C1E' }}>
                    <div style={{ width: 6, height: 6, background: p.color, flexShrink: 0 }} />
                    {org}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGISLATIVE TIMELINE */}
      <section style={{ padding: '6rem 0', background: '#0D1B2A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>Legislative Strategy</div>
            <h2 className="headline-lg">The path to passage</h2>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {timeline.map((step, i) => (
              <div key={i} className="timeline-item" style={{ paddingBottom: '2rem' }}>
                <div className="timeline-dot">{step.year.slice(0, 2)}</div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E8A838', marginBottom: '0.25rem' }}>{step.year}</div>
                  <h4 className="headline-sm" style={{ marginBottom: '0.5rem' }}>{step.title}</h4>
                  <p className="body-md" style={{ color: 'rgba(244,241,236,0.6)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: '#142233', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 className="headline-md" style={{ marginBottom: '1.5rem' }}>Ready to make your voice heard?</h2>
          <p className="body-lg" style={{ color: 'rgba(244,241,236,0.65)', marginBottom: '2rem' }}>
            Contact your representatives, share this resource, and join the coalition pushing for HIPAA reform.
          </p>
          <button className="btn-primary" onClick={() => navigate('/action')} style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Take Action →
          </button>
        </div>
      </section>
    </div>
  );
}
