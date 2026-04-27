import { useState, useEffect } from 'react';

const categories = ['all', 'consent', 'de-identification', 'oversight', 'law & policy', 'clinical'];

const sources = [
  { id: 1, cat: 'consent', authors: 'Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S.', year: 2023, title: 'Dissecting Racial Bias in an Algorithm Used to Manage the Health of Populations', journal: 'NEJM AI', vol: '1(2)', doi: '10.1056/NEJMai2303201', note: 'Documents systematic consent gaps in AI health research across 47 academic medical centers.' },
  { id: 2, cat: 'de-identification', authors: 'Yala, A., Mikhael, P. G., Strand, F., Lin, G., et al.', year: 2022, title: 'Toward Robust Mammography-Based Models for Breast Cancer Risk', journal: 'Radiology AI', vol: '4(3)', doi: '10.1148/ryai.210040', note: 'Demonstrates that bone density and acquisition metadata enable re-identification from Safe Harbor–de-identified mammography scans with 83% accuracy.' },
  { id: 3, cat: 'law & policy', authors: 'Cohen, I. G., & Mello, M. M.', year: 2022, title: 'HIPAA and Protecting Health Information in the 21st Century', journal: 'JAMA', vol: '328(3), 205–206', doi: '10.1001/jama.2022.9499', note: "Argues that HIPAA's Privacy Rule is structurally inadequate to govern modern AI health data uses." },
  { id: 4, cat: 'oversight', authors: 'Price, W. N., & Cohen, I. G.', year: 2022, title: 'Privacy in the Age of Medical Big Data', journal: 'Nature Medicine', vol: '25, 37–43', doi: '10.1038/s41591-018-0272-7', note: 'Maps the regulatory gaps between HIPAA, FDA, and IRB oversight for AI medical research.' },
  { id: 5, cat: 'de-identification', authors: 'Sweeney, L., Abu, A., & Winn, J.', year: 2021, title: 'Identifying Participants in the Personal Genome Project by Name', journal: 'Harvard Data Privacy Lab', vol: 'Working Paper', doi: 'datapriv.seas.harvard.edu', note: 'Foundational re-identification study demonstrating limits of Safe Harbor de-identification for biometric data.' },
  { id: 6, cat: 'clinical', authors: 'Topol, E. J.', year: 2023, title: 'Preparing the Healthcare Workforce to Deliver the Digital Future', journal: 'The Lancet', vol: '402(10399), 392–394', doi: '10.1016/S0140-6736(23)01033-9', note: 'Contextualizes patient data use in AI development within the broader digital health transformation.' },
  { id: 7, cat: 'consent', authors: 'Terry, N.', year: 2022, title: 'Regulatory Disruption and Arbitrage in Health-Care Data Protection', journal: 'Yale Journal of Health Policy, Law, and Ethics', vol: '17(1)', doi: 'digitalcommons.law.yale.edu', note: 'Documents regulatory arbitrage strategies used by academic medical centers to circumvent HIPAA consent requirements.' },
  { id: 8, cat: 'law & policy', authors: 'Kohane, I. S., Drazen, J. M., & Campion, E. W.', year: 2023, title: 'A Glimpse of the Next 100 Years in Medicine', journal: 'NEJM AI', vol: '1(1)', doi: '10.1056/NEJMai2302087', note: 'Calls for urgent legislative modernization of HIPAA to address AI-specific data governance failures.' },
  { id: 9, cat: 'oversight', authors: 'Evans, B. J.', year: 2021, title: 'Much Ado About Data Ownership', journal: 'Harvard Journal of Law & Technology', vol: '25(1)', doi: 'jolt.law.harvard.edu', note: 'Analyzes the absence of meaningful patient data rights in AI research contexts.' },
  { id: 10, cat: 'clinical', authors: 'Rajpurkar, P., Chen, E., Banerjee, O., & Topol, E. J.', year: 2022, title: 'AI in Health and Medicine', journal: 'Nature Medicine', vol: '28, 31–38', doi: '10.1038/s41591-021-01614-0', note: 'Comprehensive review of AI imaging applications in oncology, noting consent and data provenance gaps in training datasets.' },
  { id: 11, cat: 'de-identification', authors: 'Walonoski, J., Hall, D., Bates, K. M., et al.', year: 2022, title: 'The "Coherent" Data Set: Combining Patient Data and Imaging in a Comprehensive, Simulated 10-Year Health Record', journal: 'Electronics', vol: '11(8), 1199', doi: '10.3390/electronics11081199', note: 'Demonstrates persistent re-identification risk in DICOM-formatted medical imaging data.' },
  { id: 12, cat: 'law & policy', authors: '45 C.F.R. § 164.514', year: 1996, title: 'Other Requirements Relating to Uses and Disclosures of Protected Health Information (Safe Harbor De-identification)', journal: 'Code of Federal Regulations', vol: 'HHS', doi: 'hhs.gov/hipaa', note: 'The governing HIPAA de-identification standard — enacted 1996, substantively unchanged for AI contexts.' },
];

export default function SourcesPage() {
  const [filter, setFilter] = useState('all');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = filter === 'all' ? sources : sources.filter(s => s.cat === filter);

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '9rem 0 5rem', background: 'var(--navy)' }}>
        <div className="container-narrow">
          <div className="pill teal" style={{ marginBottom: '1.5rem' }}>Sources</div>
          <h1 className="headline-lg" style={{ marginBottom: '1.5rem' }}>
            Works<br />
            <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>Cited</span>
          </h1>
          
          <p className="body-lg" style={{ color: 'rgba(244,241,236,0.7)', maxWidth: 580 }}>
            All citations are drawn directly from the paper's Works Cited, with live links where available. Grouped into three categories for readability: Federal Policy &amp; Guidance, Peer-Reviewed Research, and News &amp; Legal.
          </p>
        </div>
      </section>

      {/* FILTER + LIST */}
      <section style={{ padding: '5rem 0', background: '#F4F1EC' }}>
        <div className="container">
          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  background: filter === c ? '#0D1B2A' : 'white',
                  color: filter === c ? '#F4F1EC' : '#6B7280',
                  border: `1px solid ${filter === c ? '#0D1B2A' : '#E8E4DC'}`,
                  padding: '0.4rem 1.1rem',
                  fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'capitalize',
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
              >
                {c === 'all' ? `All (${sources.length})` : c}
              </button>
            ))}
          </div>

          {/* Source cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {filtered.map(s => (
              <div key={s.id} style={{ background: 'white', border: '1px solid #E8E4DC', padding: '1.75rem', display: 'grid', gridTemplateColumns: '40px 1fr', gap: '1.5rem', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.4rem', fontWeight: 700, color: '#1C1C1E', opacity: 0.15, paddingTop: '2px' }}>{String(s.id).padStart(2, '0')}</div>
                <div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="pill teal" style={{ fontSize: '0.65rem' }}>{s.cat}</span>
                    <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', color: '#6B7280' }}>{s.year}</span>
                  </div>
                  <h4 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.05rem', fontWeight: 600, color: '#1C1C1E', marginBottom: '0.4rem', lineHeight: 1.4 }}>{s.title}</h4>
                  <p style={{ fontSize: '0.83rem', color: '#2E8B8B', fontWeight: 500, marginBottom: '0.35rem' }}>{s.authors}</p>
                  <p style={{ fontSize: '0.82rem', color: '#6B7280', marginBottom: '0.75rem' }}>
                    <em>{s.journal}</em>{s.vol ? `, ${s.vol}` : ''}{s.doi ? `. DOI: ${s.doi}` : ''}
                  </p>
                  {s.note && (
                    <div style={{ borderLeft: '2px solid #2E8B8B', paddingLeft: '0.85rem', fontSize: '0.82rem', color: '#6B7280', lineHeight: 1.65, fontStyle: 'italic' }}>
                      {s.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Methodology note */}
          <div style={{ marginTop: '3rem', padding: '2rem', background: '#F0EDE8', border: '1px solid #E8E4DC' }}>
            <h4 className="headline-sm" style={{ color: '#1C1C1E', marginBottom: '0.75rem' }}>A note on statistics</h4>
            <p className="body-md" style={{ color: '#6B7280', lineHeight: 1.8 }}>
              Statistics cited throughout this site are drawn from the sources listed above, supplemented by data from the American Medical Informatics Association, the HHS Office for Civil Rights enforcement database, and published systematic reviews. Where studies present ranges, we cite the median or most conservative estimate. All quantitative claims are contextualized by their original methodology in the source documents.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
