import { useState, useEffect } from 'react';

const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

const defaultMessage = `Dear Representative,

I am writing to urge you to support a targeted amendment to HIPAA that addresses critical gaps in patient privacy protections as they relate to artificial intelligence.

As your constituent, I am concerned that current law does not require healthcare providers to specifically disclose when patient imaging data — including cancer MRI and CT scans — is used to train AI models. Patients deserve meaningful informed consent, stronger de-identification standards, and federal oversight of academic institutions using their data.

Please support legislation that modernizes HIPAA for the AI era. Our patients — including cancer patients at their most vulnerable — deserve no less.

Sincerely,
[Your Name]`;

const shareItems = [
  { platform: 'Twitter / X', text: '"Your MRI scan may be training AI. Did anyone ask you? HIPAA was written in 1996 — before the AI era. Congress needs to act. #HIPAAReform #PatientPrivacy"', color: '#1DA1F2' },
  { platform: 'LinkedIn', text: '"For health policy professionals: a new advocacy site makes the case for targeted HIPAA reform to address AI-specific consent gaps and de-identification failures in cancer imaging."', color: '#0A66C2' },
  { platform: 'Email', text: '"I found this important advocacy resource about patient privacy and AI cancer imaging. Given your work in [health/policy/advocacy], I thought you\'d want to know about it."', color: '#2E8B8B' },
];

export default function TakeActionPage() {
  const [form, setForm] = useState({ name: '', email: '', state: '', message: defaultMessage });
  const [submitted, setSubmitted] = useState(false);
  const [shareClicked, setShareClicked] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyShare = (text, i) => {
    navigator.clipboard?.writeText(text);
    setShareClicked(i);
    setTimeout(() => setShareClicked(null), 2000);
  };

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '9rem 0 5rem', background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, rgba(232,168,56,0.06), transparent 70%)', pointerEvents: 'none' }} />
        <div className="container-narrow" style={{ position: 'relative' }}>
          <div className="pill" style={{ marginBottom: '1.5rem', background: 'rgba(232,168,56,0.2)', borderColor: 'rgba(232,168,56,0.5)' }}>Take Action</div>
          <h1 className="headline-lg" style={{ marginBottom: '1.5rem' }}>
            Congress has the authority.<br />
            <span style={{ fontStyle: 'italic', color: 'var(--amber)' }}>It needs the pressure.</span>
          </h1>
          <div className="sep" />
          <p className="body-lg" style={{ color: 'rgba(244,241,236,0.72)', maxWidth: 620 }}>
            Two committees hold direct jurisdiction over HIPAA reform. In the Senate, the Health, Education, Labor, and Pensions (HELP) Committee has historically led HIPAA reform efforts. In the House, the Energy and Commerce Committee holds jurisdiction over health privacy law. Enforcement of any new provisions would fall to the HHS Office for Civil Rights — the existing body that currently enforces HIPAA compliance.
          </p>
        </div>
      </section>

      {/* COMMITTEES */}
      <section style={{ padding: '4rem 0', background: 'var(--navy-mid)', borderTop: '1px solid rgba(232,168,56,0.1)' }}>
        <div className="container">
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              { tag: 'Senate', title: 'HELP Committee', desc: 'Health, Education, Labor, and Pensions. Historically the lead Senate committee for HIPAA reform.', color: 'var(--amber)' },
              { tag: 'House', title: 'Energy & Commerce', desc: 'Holds jurisdiction over health privacy law in the U.S. House of Representatives.', color: 'var(--teal-light)' },
              { tag: 'Enforcement', title: 'HHS Office for Civil Rights', desc: 'The existing body that enforces HIPAA compliance — the natural enforcer of any new provisions.', color: '#E87070' },
            ].map((c, i) => (
              <div key={i} style={{ background: 'var(--navy-light)', border: '1px solid rgba(244,241,236,0.06)', borderTop: `3px solid ${c.color}`, padding: '1.75rem' }}>
                <div className="pill" style={{ marginBottom: '0.75rem', fontSize: '0.65rem', color: c.color, borderColor: `${c.color}55`, background: 'transparent' }}>{c.tag}</div>
                <h3 className="headline-sm" style={{ color: c.color, marginBottom: '0.5rem' }}>{c.title}</h3>
                <p className="body-md" style={{ color: 'rgba(244,241,236,0.6)', fontSize: '0.88rem', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO AUDIENCES */}
      <section style={{ padding: '6rem 0', background: 'var(--offwhite)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>
            <div>
              <div className="section-label teal" style={{ marginBottom: '0.75rem' }}>For Health Policy Stakeholders</div>
              <h2 className="headline-md" style={{ color: 'var(--charcoal)', marginBottom: '1.25rem' }}>The evidence is in the record.</h2>
              <div className="sep teal" />
              <p className="body-md" style={{ color: 'var(--gray)', marginBottom: '1.25rem', lineHeight: 1.85 }}>
                If you work in health policy, federal regulation, or legislative affairs, the evidence for a targeted HIPAA amendment is in the record. The peer-reviewed research, the HHS's own guidance, and the EU's binding precedent all point in the same direction.
              </p>
              <p className="body-md" style={{ color: 'var(--charcoal)', fontWeight: 500, lineHeight: 1.85 }}>
                The question is not whether reform is possible — HIPAA's own amendment history proves it is. The question is whether Congress will act before the gaps deepen.
              </p>
            </div>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem', color: 'var(--charcoal)', opacity: 0.7 }}>For the General Public</div>
              <h2 className="headline-md" style={{ color: 'var(--charcoal)', marginBottom: '1.25rem' }}>A template you can send today.</h2>
              <div className="sep" />
              <div style={{ background: 'white', border: '1px solid var(--offwhite-dim)', borderLeft: '4px solid var(--amber)', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.92rem', lineHeight: 1.85, color: 'var(--charcoal)', fontStyle: 'italic' }}>
                  "I am writing to urge you to support a targeted amendment to HIPAA that addresses how patient imaging data is used in AI research. Current law does not require AI-specific informed consent, does not adequately address re-identification risk in high-dimensional data, and provides no federal oversight for academic institutions conducting this research. I ask you to support legislation that closes these gaps."
                </p>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--gray)', marginTop: '1rem', lineHeight: 1.7 }}>
                Contact your representative through <a href="https://www.congress.gov" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 600 }}>congress.gov</a>. Find your senators at <a href="https://www.senate.gov" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 600 }}>senate.gov</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTION CARDS */}
      <section style={{ padding: '4rem 0', background: '#142233' }}>
        <div className="container">
          <div className="grid-4" style={{ gap: '1.25rem' }}>
            {[
              { icon: '✉', label: 'Write Congress', desc: 'Send a personalized letter to your House and Senate representatives.', color: '#E8A838', anchor: '#write' },
              { icon: '📢', label: 'Share This Site', desc: 'Amplify the message on social media and in your networks.', color: '#3AABAB', anchor: '#share' },
              { icon: '🤝', label: 'Join the Coalition', desc: 'Add your organization or name to the advocacy coalition.', color: '#F4F1EC', anchor: '#coalition' },
              { icon: '📞', label: 'Call Your Rep', desc: 'Three-minute call scripts ready — calls are more effective than emails.', color: '#E87070', anchor: '#call' },
            ].map((a, i) => (
              <a key={i} href={a.anchor} style={{ textDecoration: 'none' }}>
                <div
                  style={{ background: '#1A2E45', border: '1px solid rgba(244,241,236,0.06)', borderTop: `3px solid ${a.color}`, padding: '1.75rem', cursor: 'pointer', transition: 'transform 0.2s', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{a.icon}</div>
                  <h3 className="headline-sm" style={{ color: a.color, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{a.label}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(244,241,236,0.55)', lineHeight: 1.6 }}>{a.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WRITE CONGRESS */}
      <section id="write" style={{ padding: '6rem 0', background: '#F4F1EC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <div className="section-label teal" style={{ marginBottom: '1rem' }}>Action 1</div>
              <h2 className="headline-lg" style={{ color: '#1C1C1E', marginBottom: '1.25rem' }}>Write to Congress</h2>
              <div className="sep teal" />
              <p className="body-md" style={{ color: '#6B7280', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                We've drafted a template letter you can personalize and send to your representatives. The most effective letters are specific, personal, and constituent-identified.
              </p>
              <div style={{ background: 'white', border: '1px solid #E8E4DC', padding: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '0.75rem', color: '#1C1C1E', opacity: 0.5 }}>Why letters work</div>
                {[
                  'Congressional offices track constituent mail volume by issue',
                  'A personal story is more persuasive than statistics alone',
                  'Letters from medical professionals carry additional weight',
                  'Form letters still count — volume matters',
                ].map((tip, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.5rem 0', borderBottom: '1px solid #F0EDE8', fontSize: '0.85rem', color: '#1C1C1E' }}>
                    <span style={{ color: '#2E8B8B', fontWeight: 700, flexShrink: 0 }}>→</span>
                    {tip}
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <div style={{ background: '#0D1B2A', padding: '3rem', textAlign: 'center', color: '#F4F1EC' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                  <h3 className="headline-md" style={{ color: '#E8A838', marginBottom: '1rem' }}>Letter submitted!</h3>
                  <p className="body-md" style={{ color: 'rgba(244,241,236,0.7)', marginBottom: '1.5rem' }}>Your message has been queued for delivery to your representatives. Thank you for taking action.</p>
                  <button className="btn-secondary" onClick={() => setSubmitted(false)}>Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label className="form-label" style={{ color: '#1C1C1E' }}>Full Name</label>
                      <input className="form-input light" type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label className="form-label" style={{ color: '#1C1C1E' }}>State</label>
                      <select className="form-input light" required value={form.state} onChange={e => setForm(f => ({ ...f, state: e.target.value }))} style={{ cursor: 'pointer' }}>
                        <option value="">Select state</option>
                        {states.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="form-label" style={{ color: '#1C1C1E' }}>Email</label>
                    <input className="form-input light" type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="form-label" style={{ color: '#1C1C1E' }}>
                      Your Letter <span style={{ fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(personalize as needed)</span>
                    </label>
                    <textarea className="form-input light form-textarea" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ minHeight: 220, fontFamily: 'Georgia,serif', fontSize: '0.88rem', lineHeight: 1.75 }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.9rem 2rem' }}>
                    Send to My Representatives →
                  </button>
                  <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>Your letter will be addressed to both your U.S. Senators and House Representative based on your state.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SHARE */}
      <section id="share" style={{ padding: '6rem 0', background: '#0D1B2A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>Action 2</div>
            <h2 className="headline-lg">Share this resource</h2>
            <p className="body-lg" style={{ color: 'rgba(244,241,236,0.6)', marginTop: '1rem', maxWidth: 540, margin: '1rem auto 0' }}>
              Every share reaches potential advocates, researchers, patients, and policymakers who may not know this issue exists.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {shareItems.map((s, i) => (
              <div key={i} className="card-dark" style={{ maxWidth: 320, borderTop: `3px solid ${s.color}` }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.color, marginBottom: '0.75rem' }}>{s.platform}</div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(244,241,236,0.65)', lineHeight: 1.65, marginBottom: '1.25rem', fontStyle: 'italic' }}>{s.text}</p>
                <button
                  onClick={() => copyShare(s.text, i)}
                  style={{
                    background: shareClicked === i ? 'rgba(232,168,56,0.2)' : 'transparent',
                    color: shareClicked === i ? '#E8A838' : s.color,
                    border: `1px solid ${s.color}`,
                    padding: '0.5rem 1rem', fontSize: '0.8rem',
                    fontFamily: 'DM Sans,sans-serif', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                >
                  {shareClicked === i ? '✓ Copied!' : 'Copy text'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL */}
      <section id="call" style={{ padding: '6rem 0', background: '#142233' }}>
        <div className="container-narrow">
          <div className="section-label" style={{ marginBottom: '1rem' }}>Action 4</div>
          <h2 className="headline-lg" style={{ marginBottom: '1.5rem' }}>Call your representative</h2>
          <div className="sep" />
          <p className="body-lg" style={{ color: 'rgba(244,241,236,0.7)', marginBottom: '2.5rem' }}>
            Phone calls are the most effective form of constituent outreach. Congressional staff tally calls daily. Use this script — it takes under three minutes.
          </p>
          <div className="card-dark" style={{ borderLeft: '4px solid #E8A838', padding: '2rem' }}>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>Call Script</div>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: '1rem', lineHeight: 1.85, color: '#F4F1EC' }}>
              <p style={{ marginBottom: '1rem' }}><em>"Hello, my name is [Name] and I'm a constituent calling from [City, State]."</em></p>
              <p style={{ marginBottom: '1rem' }}><em>"I'm calling to urge [Representative's Name] to support a targeted HIPAA amendment that would require informed consent when patient imaging data is used to train AI systems, update de-identification standards for the AI era, and establish federal oversight of academic AI research."</em></p>
              <p style={{ marginBottom: '1rem' }}><em>"As a [patient / healthcare worker / researcher / concerned citizen], I believe this is urgent. Cancer patients deserve to know when their scans are being used to build commercial AI products."</em></p>
              <p><em>"Can the office tell me the Representative's current position on medical AI data privacy legislation? Thank you."</em></p>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a className="btn-primary" href="https://www.congress.gov/members/find-your-member" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Find Your Representative →</a>
            <a className="btn-secondary" href="tel:12022243121" style={{ textDecoration: 'none' }}>Call Capitol Switchboard: (202) 224-3121</a>
          </div>
        </div>
      </section>
    </div>
  );
}
