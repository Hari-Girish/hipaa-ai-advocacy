import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToPreview = () => {
    document.getElementById('preview-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', background: '#0D1B2A', position: 'relative',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', paddingTop: '80px',
      }}>
        {/* Abstract pixel grid */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '55%', height: '100%',
          display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gridTemplateRows: 'repeat(10,1fr)',
          gap: 4, padding: '4rem', opacity: 0.07, pointerEvents: 'none',
        }}>
          {Array.from({ length: 120 }, (_, i) => (
            <div key={i} style={{
              background: i % 13 === 0 ? '#E8A838' : i % 7 === 0 ? '#2E8B8B' : '#F4F1EC',
              opacity: Math.random() * 0.8 + 0.1,
            }} />
          ))}
        </div>

        {/* Scanline */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(180deg,transparent 0%,rgba(46,139,139,0.03) 50%,transparent 100%)',
          animation: 'scanline 4s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 780 }}>
            <div className="fade-up">
              <div className="pill" style={{ marginBottom: '1.5rem' }}>Policy Advocacy</div>
            </div>

            <h1 className="headline-xl fade-up fade-up-2" style={{ marginBottom: '1.75rem', color: '#F4F1EC' }}>
              Your MRI scan may be{' '}
              <span style={{ fontStyle: 'italic', color: '#E8A838' }}>training AI.</span>
              <br />Did anyone ask you?
            </h1>

            <div className="fade-up fade-up-3" style={{ maxWidth: 560, marginBottom: '2.5rem' }}>
              <p className="body-lg" style={{ color: 'rgba(244,241,236,0.75)', marginBottom: '1rem' }}>
                Imagine you receive an MRI for a cancer diagnosis. You sign consent forms for your treatment — but buried in the fine print, or perhaps nowhere at all, is permission for your scan to be used to train an artificial intelligence model.
              </p>
              <p className="body-lg" style={{ color: 'rgba(244,241,236,0.75)' }}>
                Across American hospitals and research institutions, this is happening right now. HIPAA — the law meant to protect your medical privacy — was written in 1996. It was never designed for the age of AI.
              </p>
            </div>

            <div className="fade-up fade-up-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={scrollToPreview}>
                See What's at Stake <span>↓</span>
              </button>
              <button className="btn-secondary" onClick={() => navigate('/evidence')}>
                Read the Policy Case <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          opacity: 0.4, animation: 'fadeUp 1s 1s both',
        }}>
          <div style={{ width: 1, height: 40, background: '#F4F1EC', animation: 'pulse-opacity 2s infinite' }} />
        </div>
      </section>

      {/* ARGUMENT PREVIEW */}
      <section id="preview-section" style={{ padding: '6rem 0', background: '#142233' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">The Core Argument</div>
              <h2 className="headline-lg" style={{ marginBottom: '1.5rem' }}>
                A 1996 law cannot protect patients in a 2024 world
              </h2>
              <div className="sep" />
              <p className="body-lg" style={{ color: 'rgba(244,241,236,0.7)', marginBottom: '1.25rem' }}>
                HIPAA's Privacy Rule established foundational protections for medical records. But its authors could not have anticipated that patient imaging data would one day be harvested, de-identified (imperfectly), and fed into commercial AI systems.
              </p>
              <p className="body-lg" style={{ color: 'rgba(244,241,236,0.7)', marginBottom: '2rem' }}>
                Congress must act — with a targeted amendment that closes three critical gaps: informed consent for AI use, stronger de-identification standards, and federal oversight of academic institutions.
              </p>
              <button className="btn-primary" onClick={() => navigate('/policy')}>
                Read Our Policy Proposal →
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { n: '01', title: 'AI Consent Gap', desc: 'Current HIPAA consent forms do not require disclosure when patient imaging data is used for AI training.', color: '#E8A838' },
                { n: '02', title: 'Broken De-identification', desc: 'Standard HIPAA Safe Harbor de-identification methods fail against modern re-identification attacks.', color: '#3AABAB' },
                { n: '03', title: 'Oversight Vacuum', desc: 'Academic medical centers face no dedicated federal oversight body for AI research uses of patient data.', color: '#E87070' },
              ].map(item => (
                <div key={item.n} className="card-dark" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '2rem', fontWeight: 700, color: item.color, opacity: 0.5, lineHeight: 1, flexShrink: 0 }}>{item.n}</div>
                  <div>
                    <h4 className="headline-sm" style={{ marginBottom: '0.5rem', color: item.color }}>{item.title}</h4>
                    <p className="body-md" style={{ color: 'rgba(244,241,236,0.65)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ padding: '4rem 0', background: '#0D1B2A', borderTop: '1px solid rgba(232,168,56,0.12)', borderBottom: '1px solid rgba(232,168,56,0.12)' }}>
        <div className="container">
          <div className="grid-4">
            {[
              { n: '1.3B+', label: 'Medical images in AI training datasets worldwide', color: '#E8A838' },
              { n: '96%', label: 'Of patients unaware their scans could train AI models', color: '#3AABAB' },
              { n: '1996', label: 'Year HIPAA was enacted — before the commercial internet', color: '#F4F1EC' },
              { n: '$45B', label: 'Projected AI medical imaging market by 2030', color: '#E87070' },
            ].map((s, i) => (
              <div key={i} className="stat-card" style={{ borderColor: s.color }}>
                <div className="stat-number" style={{ color: s.color, fontSize: '2.4rem' }}>{s.n}</div>
                <p className="body-md" style={{ color: 'rgba(244,241,236,0.6)', marginTop: '0.5rem', fontSize: '0.85rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAV PREVIEW CARDS */}
      <section style={{ padding: '5rem 0', background: '#142233' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Explore This Site</div>
            <h2 className="headline-md" style={{ marginTop: '0.5rem' }}>Where do you want to go?</h2>
          </div>
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              { path: '/problem', label: 'The Problem', icon: '⚠', desc: 'How patient imaging data flows from hospital to AI model — and what HIPAA misses.', color: '#E8A838' },
              { path: '/evidence', label: 'The Evidence', icon: '📊', desc: 'Research findings, consent audit data, and documented de-identification failures.', color: '#3AABAB' },
              { path: '/policy', label: 'Policy Proposal', icon: '⚖', desc: 'Our three-pillar legislative framework and draft amendment language.', color: '#F4F1EC' },
            ].map(card => (
              <div
                key={card.path}
                onClick={() => navigate(card.path)}
                style={{
                  background: '#1A2E45', border: '1px solid rgba(244,241,236,0.08)',
                  padding: '2rem', cursor: 'pointer',
                  transition: 'border-color 0.2s,transform 0.2s',
                  borderTop: `3px solid ${card.color}`,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = card.color; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(244,241,236,0.08)'; e.currentTarget.style.borderTopColor = card.color; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3 className="headline-sm" style={{ marginBottom: '0.75rem', color: card.color }}>{card.label}</h3>
                <p className="body-md" style={{ color: 'rgba(244,241,236,0.6)' }}>{card.desc}</p>
                <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: card.color, fontWeight: 600 }}>Read more →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ padding: '5rem 0', background: '#080F18', textAlign: 'center' }}>
        <div className="container-narrow">
          <div className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>Your Voice Matters</div>
          <h2 className="headline-lg" style={{ margin: '1rem 0 1.5rem' }}>
            Tell Congress to modernize HIPAA for the AI era
          </h2>
          <p className="body-lg" style={{ color: 'rgba(244,241,236,0.65)', marginBottom: '2.5rem' }}>
            Cancer patients, advocates, researchers, and citizens can all make their voices heard. It takes less than two minutes.
          </p>
          <button className="btn-primary" onClick={() => navigate('/action')} style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Take Action Now →
          </button>
        </div>
      </section>

      <style>{`
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100%)} }
        @keyframes pulse-opacity { 0%,100%{opacity:0.3} 50%{opacity:0.8} }
      `}</style>
    </div>
  );
}
