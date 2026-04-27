import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const flowSteps = [
  { step: '01', title: 'Patient Receives Care', desc: 'A cancer patient undergoes an MRI or CT scan at a hospital or academic medical center. They sign general consent forms for treatment.', tag: 'Clinical Setting' },
  { step: '02', title: 'Data Enters Research Pipeline', desc: "The imaging data is collected by the institution's radiology department and flagged as potentially useful for research under a broad IRB waiver.", tag: 'Institutional Review' },
  { step: '03', title: 'De-identification (Attempts)', desc: 'Patient identifiers are removed under HIPAA Safe Harbor or Expert Determination — but metadata, rare diagnoses, and imaging artifacts can still enable re-identification.', tag: 'HIPAA Safe Harbor' },
  { step: '04', title: 'Transfer to AI Research Team', desc: 'The "de-identified" dataset is shared with an internal AI research team, or licensed to a commercial vendor or startup partner.', tag: 'Data Transfer' },
  { step: '05', title: 'AI Model Training', desc: 'The imaging data is used to train a diagnostic AI model. The resulting model may be commercialized, generating revenue the patient never shares in.', tag: 'AI Development' },
  { step: '06', title: 'No Patient Notification', desc: 'The patient is never informed their scan was used. No consent was specifically sought. No legal obligation required it under current HIPAA.', tag: 'Consent Gap' },
];

const bars = [
  { label: 'Oncology AI market share of medical AI', pct: 38, color: '#E8A838' },
  { label: 'Cancer imaging datasets used in published AI research', pct: 72, color: '#E8A838' },
  { label: 'Academic institutions with explicit AI consent protocols', pct: 12, color: '#2E8B8B' },
  { label: 'AI imaging papers disclosing patient consent method', pct: 19, color: '#2E8B8B' },
  { label: 'Re-identification risk in standard de-identified images', pct: 83, color: '#E87070' },
];

export default function ProblemPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [barsVisible, setBarsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const t = setTimeout(() => setBarsVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '9rem 0 5rem', background: 'var(--navy)' }}>
        <div className="container-narrow">
          <div className="pill red" style={{ marginBottom: '1.5rem' }}>The Problem</div>
          <h1 className="headline-lg" style={{ marginBottom: '1.5rem' }}>
            HIPAA was written for<br />
            <span style={{ fontStyle: 'italic', color: 'var(--amber)' }}>a different era.</span>
          </h1>
          <div className="sep" />
          <p className="body-lg" style={{ color: 'rgba(244,241,236,0.72)', maxWidth: 620 }}>
            HIPAA allows researchers to use health data with patient identifiers removed — name, birthdate, address — without additional consent. Once those identifiers are stripped, the data is no longer treated as protected. Academic medical centers use this rule when training AI models on MRI and CT scans.
          </p>
        </div>
      </section>

      {/* HIPAA TIMELINE */}
      <section style={{ padding: '5rem 0', background: 'var(--navy-mid)' }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto 3.5rem' }}>
            <div className="section-label">A Three-Decade Lag</div>
            <h2 className="headline-md" style={{ marginBottom: '1.5rem' }}>The law stopped updating before AI started reading scans</h2>
          </div>
          <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { year: '1996', title: 'HIPAA enacted', desc: 'Governs identifiable health information. AI does not exist as a clinical tool.' },
              { year: '2013', title: 'Congress updates HIPAA', desc: 'Updates respond to electronic health records and cloud storage. The de-identification exemption remains intact.' },
              { year: 'Today', title: 'AI trains on imaging data', desc: 'Academic medical centers use de-identified cancer imaging data to train machine learning models. HIPAA has no provisions covering this use.' },
            ].map((step, i) => (
              <div key={i} className="timeline-item" style={{ paddingBottom: '2rem' }}>
                <div className="timeline-dot" style={{ width: 56, height: 56, fontSize: '0.78rem', textAlign: 'center', lineHeight: 1 }}>{step.year}</div>
                <div style={{ paddingTop: '0.75rem', flex: 1 }}>
                  <h4 className="headline-sm" style={{ marginBottom: '0.4rem' }}>{step.title}</h4>
                  <p className="body-md" style={{ color: 'rgba(244,241,236,0.65)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 760, margin: '2.5rem auto 0' }}>
            <p className="body-md" style={{ color: 'rgba(244,241,236,0.7)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              The problem is that de-identification was designed for a different kind of data. High-dimensional imaging data contains complex patterns. When combined with other datasets, researchers or third parties may be able to re-link that data to individual patients.
            </p>
            <p className="body-md" style={{ color: 'rgba(244,241,236,0.7)', lineHeight: 1.85, marginBottom: '2rem' }}>
              The U.S. Department of Health and Human Services acknowledges this in its own guidance. HIPAA does not address how algorithms extract long-term predictive value from patient data. It was written in 1996. It has never been updated for AI.
            </p>
            <div className="pull-quote">
              "Both HIPAA de-identification methods, even when properly applied, yield data that retains some risk of re-identification — and that risk is not zero."
              <div className="attribution">U.S. Department of Health and Human Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA FLOW */}
      <section style={{ padding: '5rem 0', background: '#142233' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Data Flow Explainer</div>
            <h2 className="headline-md">The pipeline no one told you about</h2>
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Step selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: 260 }}>
              {flowSteps.map((s, i) => (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  style={{
                    padding: '1rem 1.25rem',
                    background: activeStep === i ? '#1A2E45' : 'transparent',
                    border: `1px solid ${activeStep === i ? 'rgba(232,168,56,0.4)' : 'rgba(244,241,236,0.06)'}`,
                    borderLeft: `3px solid ${activeStep === i ? '#E8A838' : 'transparent'}`,
                    cursor: 'pointer', transition: 'all 0.2s',
                    display: 'flex', gap: '1rem', alignItems: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.1rem', fontWeight: 700, color: activeStep === i ? '#E8A838' : 'rgba(244,241,236,0.3)' }}>{s.step}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 500, color: activeStep === i ? '#F4F1EC' : 'rgba(244,241,236,0.5)' }}>{s.title}</span>
                </div>
              ))}
            </div>

            {/* Detail panel */}
            <div style={{ flex: 1, minWidth: 300 }}>
              <div className="card-dark" style={{ padding: '2.5rem', minHeight: 280, borderTop: '3px solid #E8A838' }}>
                <div className="pill" style={{ marginBottom: '1.25rem' }}>{flowSteps[activeStep].tag}</div>
                <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '3.5rem', fontWeight: 700, color: 'rgba(232,168,56,0.15)', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {flowSteps[activeStep].step}
                </div>
                <h3 className="headline-md" style={{ marginBottom: '1rem', color: '#E8A838' }}>{flowSteps[activeStep].title}</h3>
                <p className="body-lg" style={{ color: 'rgba(244,241,236,0.72)' }}>{flowSteps[activeStep].desc}</p>
                {activeStep === 5 && (
                  <div className="alert-banner" style={{ marginTop: '1.5rem' }}>
                    <strong>Key legal gap:</strong> Under current HIPAA, de-identified data is not covered by Privacy Rule restrictions — meaning no consent is required for its use in AI training.
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', justifyContent: 'flex-end' }}>
                <button className="btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }} onClick={() => setActiveStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0}>← Prev</button>
                <button className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }} onClick={() => setActiveStep(Math.min(5, activeStep + 1))} disabled={activeStep === 5}>Next →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE GAPS */}
      <section style={{ padding: '6rem 0', background: '#F4F1EC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label teal" style={{ display: 'flex', justifyContent: 'center' }}>HIPAA's Critical Gaps</div>
            <h2 className="headline-lg" style={{ color: '#1C1C1E' }}>Three places the law falls short</h2>
          </div>
          <div className="grid-3">
            {[
              { n: '1', color: '#E8A838', title: 'No AI-Specific Informed Consent', body: "HIPAA's authorization requirements were designed for traditional research. They do not require healthcare providers to specifically disclose that patient imaging data may be used to train AI models — a use case with commercial implications far beyond conventional research.", quote: '"Patients have no meaningful opportunity to consent to, or opt out of, AI training uses of their imaging data."' },
              { n: '2', color: '#2E8B8B', title: 'Weak De-identification Standards', body: "HIPAA's two de-identification methods — Safe Harbor (removing 18 identifiers) and Expert Determination — were developed before modern re-identification attacks. Medical images contain biometric data inherent to the scan itself: bone structure, organ geometry, and rare pathologies that resist standard stripping.", quote: '"Studies show that even properly de-identified medical images can be re-linked to patients with 83% accuracy."' },
              { n: '3', color: '#E87070', title: 'No Oversight of Academic AI Use', body: 'Academic medical centers occupy a regulatory gray zone. They are subject to HIPAA but not to FDA oversight of AI model development. IRBs (Institutional Review Boards) review human subjects research, but AI training with de-identified data is frequently not classified as human subjects research.', quote: '"IRB waivers are routinely granted for AI imaging research, removing the last meaningful checkpoint."' },
            ].map(gap => (
              <div key={gap.n} style={{ background: 'white', border: '1px solid #E8E4DC', borderTop: `4px solid ${gap.color}`, padding: '2rem', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
                <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '3.5rem', fontWeight: 700, color: gap.color, opacity: 0.18, lineHeight: 1, marginBottom: '0.25rem' }}>{gap.n}</div>
                <h3 className="headline-sm" style={{ color: '#1C1C1E', marginBottom: '1rem' }}>{gap.title}</h3>
                <p className="body-md" style={{ color: '#6B7280', marginBottom: '1.25rem', lineHeight: 1.75 }}>{gap.body}</p>
                <div style={{ borderLeft: `3px solid ${gap.color}`, paddingLeft: '1rem', fontStyle: 'italic', fontSize: '0.9rem', color: '#1C1C1E', lineHeight: 1.6 }}>
                  {gap.quote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CANCER IMAGING */}
      <section style={{ padding: '6rem 0', background: '#0D1B2A' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">Why Imaging Data Specifically?</div>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem' }}>
                Cancer scans are uniquely valuable — and uniquely sensitive
              </h2>
              <div className="sep" />
              <p className="body-lg" style={{ color: 'rgba(244,241,236,0.7)', marginBottom: '1.25rem' }}>
                Medical imaging — MRI, CT, PET scans — represents the highest-value data in AI healthcare development. Unlike lab results or clinical notes, images contain dense, structured information that AI models can extract patterns from directly.
              </p>
              <p className="body-lg" style={{ color: 'rgba(244,241,236,0.7)', marginBottom: '1.25rem' }}>
                Cancer imaging is especially prized because oncology AI commands the largest commercial market. A dataset of 50,000 labeled breast cancer MRIs can be worth millions of dollars to a medical AI startup.
              </p>
              <p className="body-lg" style={{ color: 'rgba(244,241,236,0.7)' }}>
                Yet the patients whose bodies generated this value receive nothing — no compensation, no notification, and no meaningful legal protection.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {bars.map((bar, i) => (
                <div key={i} className="data-bar-wrap">
                  <div className="data-bar-label">
                    <span style={{ color: 'rgba(244,241,236,0.72)', fontSize: '0.83rem' }}>{bar.label}</span>
                    <span style={{ color: bar.color, fontWeight: 600, fontFamily: 'Playfair Display,serif' }}>{bar.pct}%</span>
                  </div>
                  <div className="data-bar-track">
                    <div className="data-bar-fill" style={{ width: barsVisible ? `${bar.pct}%` : '0%', background: bar.color }} />
                  </div>
                </div>
              ))}
              <p style={{ fontSize: '0.72rem', color: 'rgba(244,241,236,0.3)', marginTop: '0.5rem' }}>Sources: NEJM AI, JAMA Network Open, Radiology AI (2022–2026)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: '#142233', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 className="headline-md" style={{ marginBottom: '1.5rem' }}>Now that you understand the problem</h2>
          <p className="body-lg" style={{ color: 'rgba(244,241,236,0.65)', marginBottom: '2rem' }}>See what the research says — and what Congress can do about it.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('/evidence')}>See the Evidence →</button>
            <button className="btn-secondary" onClick={() => navigate('/policy')}>Read the Policy Case</button>
          </div>
        </div>
      </section>
    </div>
  );
}
