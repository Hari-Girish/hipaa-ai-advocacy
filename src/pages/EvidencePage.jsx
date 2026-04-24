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
      { label: 'HHS enforcement actions related to AI imaging data (2020–2024)', pct: 2, color: '#2E8B8B' },
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
      <section style={{ padding: '9rem 0 5rem', background: '#0D1B2A' }}>
        <div className="container-narrow">
          <div className="pill teal" style={{ marginBottom: '1.5rem' }}>Evidence</div>
          <h1 className="headline-lg" style={{ marginBottom: '1.5rem' }}>
            What the research<br />
            <span style={{ fontStyle: 'italic', color: '#3AABAB' }}>actually shows</span>
          </h1>
          <div className="sep teal" />
          <p className="body-lg" style={{ color: 'rgba(244,241,236,0.72)', maxWidth: 620 }}>
            A growing body of peer-reviewed research documents the failures of current law. These findings are not speculative — they are measurable, documented, and escalating.
          </p>
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
                Sources: JAMA Network Open, Radiology AI, NEJM AI, BMJ Health & Care Informatics (2020–2024)
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

      {/* CASE STUDIES */}
      <section style={{ padding: '6rem 0', background: '#F4F1EC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label teal" style={{ display: 'flex', justifyContent: 'center' }}>Documented Cases</div>
            <h2 className="headline-lg" style={{ color: '#1C1C1E' }}>This is already happening</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 860, margin: '0 auto' }}>
            {cases.map((c, i) => (
              <div key={i} style={{ background: 'white', border: '1px solid #E8E4DC', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem' }}>
                <div style={{ borderRight: '1px solid #E8E4DC', paddingRight: '2rem' }}>
                  <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '2rem', fontWeight: 700, color: '#1C1C1E', opacity: 0.25 }}>{c.year}</div>
                  <div className="pill red" style={{ marginTop: '0.75rem', fontSize: '0.65rem' }}>{c.tag}</div>
                </div>
                <div>
                  <h3 className="headline-sm" style={{ color: '#1C1C1E', marginBottom: '0.5rem' }}>{c.title}</h3>
                  <p style={{ fontSize: '0.78rem', color: '#2E8B8B', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{c.institution}</p>
                  <p className="body-md" style={{ color: '#6B7280', marginBottom: '1rem', lineHeight: 1.75 }}>{c.desc}</p>
                  <div style={{ borderLeft: '3px solid #E87070', paddingLeft: '1rem', fontSize: '0.85rem', color: '#E87070', fontWeight: 500 }}>
                    Outcome: {c.outcome}
                  </div>
                </div>
              </div>
            ))}
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
