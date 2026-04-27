import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const findings = {
  consent: {
    label: 'Consent Failures',
    data: [
      { label: 'Studies using patient images without explicit AI consent', pct: 81, color: '#E87070' },
      { label: 'IRB waivers granted for AI imaging research (2019–2023)', pct: 74, color: '#E87070' },
      { label: 'Patients who recalled any imaging data consent discussion', pct: 8, color: '#2E8B8B' },
      { label: 'Institutions with AI-specific consent language', pct: 14, color: '#2E8B8B' },
    ],
    quote: '"The gap between what patients believe they have consented to and what their data is actually used for represents one of the most significant ethical failures in modern medical research."',
    attribution: 'Obermeyer et al., NEJM AI, 2023',
    finding: <>A 2023 audit of 47 top academic medical centers found that <mark>not a single institution</mark> had a consent process that specifically disclosed AI training as a potential use of patient imaging data.</>,
  },
  deid: {
    label: 'De-identification',
    data: [
      { label: 'Re-identification success rate on "Safe Harbor" MRI data', pct: 83, color: '#E87070' },
      { label: 'Imaging files retaining metadata enabling re-identification', pct: 67, color: '#E87070' },
      { label: 'Institutions auditing de-identification effectiveness', pct: 22, color: '#2E8B8B' },
      { label: 'Published AI papers disclosing de-identification method', pct: 29, color: '#2E8B8B' },
    ],
    quote: '"Current HIPAA de-identification standards are not fit for purpose in the age of deep learning. The information in medical images extends far beyond the 18 Safe Harbor identifiers."',
    attribution: 'Yala et al., Radiology AI, 2022',
    finding: 'Researchers at MIT demonstrated that mammography scans de-identified under HIPAA Safe Harbor could be re-linked to patients using only bone density patterns and image acquisition metadata retained in DICOM files.',
  },
  oversight: {
    label: 'Oversight Gaps',
    data: [
      { label: 'Academic AI imaging projects reviewed by dedicated ethics board', pct: 17, color: '#2E8B8B' },
      { label: 'Institutions with commercial AI data-sharing agreements undisclosed to patients', pct: 58, color: '#E87070' },
      { label: 'Cancer AI datasets licensed to commercial entities from academic sources', pct: 44, color: '#E87070' },
      { label: 'HHS enforcement actions related to AI imaging data (2020–2026)', pct: 2, color: '#2E8B8B' },
    ],
    quote: '"There is no federal agency with a clear mandate to oversee the use of patient imaging data in AI model development. The result is a self-regulated industry with obvious conflicts of interest."',
    attribution: 'Price & Cohen, JAMA, 2022',
    finding: 'A 2024 investigation found that 12 of the top 20 academic medical centers had active data-sharing agreements with commercial AI companies that were not disclosed in their public privacy notices or patient-facing materials.',
  },
};

const cases = [
  {
    year: '2019', tag: 'Data Transfer',
    institution: 'Major Academic Medical Center (anonymized)',
    title: 'Google-Hospital Imaging Partnership',
    desc: "A partnership between a leading technology company and a major hospital system transferred millions of patient records, including imaging data, without patients' knowledge. A whistleblower lawsuit revealed the scope of the transfer, which the institution maintained was HIPAA-compliant due to a business associate agreement.",
    outcome: 'No regulatory action. Lawsuit settled confidentially.',
  },
  {
    year: '2021', tag: 'Commercialization',
    institution: 'University Medical System',
    title: 'Cancer Imaging Dataset Commercialization',
    desc: 'An academic medical center licensed a dataset of over 200,000 annotated cancer scans to a commercial AI startup for $12 million. Patients had consented only to "research purposes." No individual notification was provided. The startup subsequently sold the trained model to an insurance company.',
    outcome: 'HHS inquiry opened, later closed without finding.',
  },
  {
    year: '2023', tag: 'De-identification Failure',
    institution: 'Research Hospital Network',
    title: 'Re-identification of "De-identified" MRI Dataset',
    desc: 'Security researchers demonstrated that a publicly released dataset of de-identified brain MRIs could be re-linked to individual patients through a combination of skull geometry, age estimation from bone density, and matching to public demographic records. The dataset had been certified HIPAA-compliant.',
    outcome: 'Dataset withdrawn. No patient notification issued.',
  },
];

const quotes = [
  { quote: '"The existing HIPAA framework is fundamentally inadequate to govern the use of patient data in machine learning applications."', name: 'Kohane et al.', journal: 'NEJM AI, 2023' },
  { quote: '"Without a federal mandate for AI-specific consent, the growth of medical AI will outpace the law\'s ability to protect patients."', name: 'Cohen & Mello', journal: 'JAMA, 2022' },
  { quote: '"De-identification as currently defined by HIPAA provides a false sense of privacy in the context of modern re-identification techniques."', name: 'Yala et al.', journal: 'Radiology AI, 2022' },
];

export default function EvidencePage() {
  const [activeTab, setActiveTab] = useState('consent');
  const navigate = useNavigate();
  const active = findings[activeTab];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '9rem 0 5rem', background: 'var(--navy)' }}>
        <div className="container-narrow">
          <div className="pill teal" style={{ marginBottom: '1.5rem' }}>Evidence</div>
          <h1 className="headline-lg" style={{ marginBottom: '1.5rem' }}>
            The gaps have<br />
            <span style={{ fontStyle: 'italic', color: 'var(--teal-light)' }}>real consequences.</span>
          </h1>
          <div className="sep teal" />
          <p className="body-lg" style={{ color: 'rgba(244,241,236,0.72)', maxWidth: 620 }}>
            A growing body of peer-reviewed research documents the failures of current law. These findings are not speculative — they are measurable, documented, and escalating.
          </p>
        </div>
      </section>

      {/* HEADLINE STATS */}
      <section style={{ padding: '5rem 0 4rem', background: 'var(--navy)', borderTop: '1px solid rgba(232,168,56,0.12)' }}>
        <div className="container">
          <div className="grid-3" style={{ gap: '2rem' }}>
            {[
              { num: '10.9%', color: 'var(--amber)', desc: 'Accuracy gap in lung cancer subtype classification between white and Black patients, found in a 2024 Nature Medicine study of over 4,300 cancer patients. The gap persisted after standard bias-mitigation techniques were applied.' },
              { num: '82%', color: 'var(--teal-light)', desc: 'of real-world AI implementations studied encountered HIPAA-related barriers — not because the law is too strict, but because it is too vague.', cite: 'Palama, 2024' },
              { num: '72', color: '#E87070', desc: 'real-world AI implementations analyzed in a peer-reviewed policy review that found regulatory uncertainty — not over-regulation — is what slows adoption.' },
            ].map((s, i) => (
              <div key={i} className="stat-card" style={{ borderColor: s.color, padding: '0.5rem 0 0.5rem 1.75rem' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.6rem', fontWeight: 700, color: s.color, lineHeight: 1, marginBottom: '1rem' }}>{s.num}</div>
                <p className="body-md" style={{ color: 'rgba(244,241,236,0.72)', lineHeight: 1.7 }}>{s.desc}</p>
                {s.cite && <p style={{ fontSize: '0.75rem', color: 'rgba(244,241,236,0.4)', marginTop: '0.75rem', fontStyle: 'italic' }}>{s.cite}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA TABS */}
      <section style={{ padding: '5rem 0', background: '#142233' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 0, marginBottom: '2.5rem', borderBottom: '1px solid rgba(244,241,236,0.1)' }}>
            {Object.entries(findings).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0.85rem 1.75rem',
                  fontFamily: 'DM Sans,sans-serif', fontSize: '0.85rem', fontWeight: 600,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: activeTab === key ? '#E8A838' : 'rgba(244,241,236,0.45)',
                  borderBottom: activeTab === key ? '2px solid #E8A838' : '2px solid transparent',
                  marginBottom: -1, transition: 'color 0.2s',
                }}
              >
                {val.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              {active.data.map((bar, i) => (
                <div key={i} className="data-bar-wrap" style={{ marginBottom: '1.75rem' }}>
                  <div className="data-bar-label">
                    <span style={{ color: 'rgba(244,241,236,0.75)', fontSize: '0.88rem', maxWidth: '75%', lineHeight: 1.4 }}>{bar.label}</span>
                    <span style={{ color: bar.color, fontWeight: 700, fontFamily: 'Playfair Display,serif', fontSize: '1.3rem' }}>{bar.pct}%</span>
                  </div>
                  <div className="data-bar-track" style={{ height: 10 }}>
                    <div className="data-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} />
                  </div>
                </div>
              ))}
              <p style={{ fontSize: '0.72rem', color: 'rgba(244,241,236,0.28)', marginTop: '1rem' }}>
                Sources: JAMA Network Open, Radiology AI, NEJM AI, BMJ Health & Care Informatics (2020–2026)
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="pull-quote">
                {active.quote}
                <div className="attribution">{active.attribution}</div>
              </div>
              <div className="card-dark">
                <div className="section-label" style={{ marginBottom: '0.75rem' }}>Key Finding</div>
                <p className="body-md" style={{ color: 'rgba(244,241,236,0.7)' }}>{active.finding}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY + US vs EU */}
      <section style={{ padding: '6rem 0', background: 'var(--offwhite)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label teal" style={{ display: 'flex', justifyContent: 'center' }}>Documented Case</div>
            <h2 className="headline-lg" style={{ color: 'var(--charcoal)' }}>This is already happening</h2>
          </div>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div style={{ background: 'white', border: '1px solid var(--offwhite-dim)', padding: '2.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: '160px 1fr', gap: '2.5rem' }}>
              <div style={{ borderRight: '1px solid var(--offwhite-dim)', paddingRight: '2rem' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', fontWeight: 700, color: 'var(--charcoal)' }}>2019</div>
                <div className="pill red" style={{ marginTop: '0.75rem', fontSize: '0.65rem' }}>Class-action filed</div>
              </div>
              <div>
                <h3 className="headline-md" style={{ color: 'var(--charcoal)', marginBottom: '0.5rem' }}>University of Chicago</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--teal)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Hospital + Google Partnership</p>
                <p className="body-md" style={{ color: 'var(--gray)', marginBottom: '1rem', lineHeight: 1.85 }}>
                  The University of Chicago Medical Center shared hundreds of thousands of de-identified patient records — including physicians' notes and date stamps — with Google for machine learning research without patients' prior knowledge.
                </p>
                <p className="body-md" style={{ color: 'var(--gray)', marginBottom: '1.25rem', lineHeight: 1.85 }}>
                  A federal class-action lawsuit followed, alleging the records were insufficiently anonymized and that patients had not consented to commercial data sharing.
                </p>
              </div>
            </div>
          </div>

          {/* US vs EU table */}
          <div style={{ maxWidth: 860, margin: '4rem auto 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="section-label teal" style={{ display: 'flex', justifyContent: 'center' }}>Regulatory Comparison</div>
              <h2 className="headline-md" style={{ color: 'var(--charcoal)' }}>United States vs. European Union</h2>
            </div>
            <div style={{ background: 'white', border: '1px solid var(--offwhite-dim)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', background: 'var(--charcoal)', color: 'white' }}>
                <div style={{ padding: '1rem 1.25rem', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.6 }}>&nbsp;</div>
                <div style={{ padding: '1rem 1.25rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>United States</div>
                <div style={{ padding: '1rem 1.25rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>European Union</div>
              </div>
              {[
                { label: 'Primary framework', us: 'HIPAA (1996)', eu: 'EU AI Act (2024)' },
                { label: 'Medical AI classification', us: 'Not specified', eu: 'High-risk' },
                { label: 'AI-specific consent requirements', us: 'None', eu: 'Required' },
                { label: 'Binding data governance rules', us: 'None', eu: 'Required' },
                { label: 'Human oversight mandates', us: 'None', eu: 'Required' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', borderTop: '1px solid var(--offwhite-dim)', background: i % 2 === 0 ? 'white' : '#FAFAF7' }}>
                  <div style={{ padding: '1.1rem 1.25rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--charcoal)' }}>{row.label}</div>
                  <div style={{ padding: '1.1rem 1.25rem', fontSize: '0.9rem', color: '#B85050', borderLeft: '1px solid var(--offwhite-dim)', fontWeight: 500 }}>{row.us}</div>
                  <div style={{ padding: '1.1rem 1.25rem', fontSize: '0.9rem', color: 'var(--teal)', borderLeft: '1px solid var(--offwhite-dim)', fontWeight: 500 }}>{row.eu}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC CONSENSUS */}
      <section style={{ padding: '6rem 0', background: '#0D1B2A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>Academic Consensus</div>
            <h2 className="headline-lg">What leading researchers say</h2>
          </div>
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {quotes.map((q, i) => (
              <div key={i} style={{ borderLeft: '3px solid #2E8B8B', paddingLeft: '1.5rem' }}>
                <p style={{ fontFamily: 'Playfair Display,serif', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.65, color: '#F4F1EC', marginBottom: '1rem' }}>{q.quote}</p>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#3AABAB' }}>{q.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(244,241,236,0.4)' }}>{q.journal}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: '#142233', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 className="headline-md" style={{ marginBottom: '1.5rem' }}>The evidence is clear. What should Congress do?</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/policy')}>Read the Policy Proposal →</button>
            <button className="btn-secondary" onClick={() => navigate('/sources')}>View All Sources</button>
          </div>
        </div>
      </section>
    </div>
  );
}
