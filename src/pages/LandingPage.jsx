import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import { useScrollY, useScrollProgress } from '../hooks/scrollUtils';

function ScaleCard({ card, navigate }) {
  const [ref, p] = useScrollProgress();
  const scale = 1 + Math.sin(p * Math.PI) * 0.04;
  return (
    <div
      ref={ref}
      onClick={() => navigate(card.path)}
      style={{
        background: 'var(--navy-light)',
        border: '1px solid rgba(244,241,236,0.08)',
        borderTop: `3px solid ${card.color}`,
        padding: '2rem',
        cursor: 'pointer',
        transition: 'border-color 0.2s, transform 0.3s ease-out',
        transform: `scale(${scale})`,
        willChange: 'transform',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = card.color; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(244,241,236,0.08)'; e.currentTarget.style.borderTopColor = card.color; }}
    >
      <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{card.icon}</div>
      <h3 className="headline-sm" style={{ marginBottom: '0.75rem', color: card.color }}>{card.label}</h3>
      <p className="body-md" style={{ color: 'rgba(244,241,236,0.6)' }}>{card.desc}</p>
      <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: card.color, fontWeight: 600 }}>Read more →</div>
    </div>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();
  const scrollY = useScrollY();
  const [statsRef, statsP] = useScrollProgress();
  const [previewRef, previewP] = useScrollProgress();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToPreview = () => {
    document.getElementById('preview-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const heroScroll = Math.min(1, scrollY / (window.innerHeight || 800));
  const parallaxMul = 0.35;
  const fade = Math.max(0, 1 - heroScroll * 1.4);
  const scale = 1 - heroScroll * 0.08;
  const heroContentStyle = { opacity: fade, transform: `scale(${scale}) translateY(${heroScroll * -40}px)` };
  const heroBgStyle = { transform: `translateY(${scrollY * parallaxMul}px)` };

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', background: 'var(--navy)', position: 'relative',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', paddingTop: '80px',
      }}>
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '55%', height: '120%',
          display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(10, 1fr)',
          gap: 4, padding: '4rem', opacity: 0.07, pointerEvents: 'none',
          ...heroBgStyle, willChange: 'transform',
        }}>
          {Array.from({ length: 120 }, (_, i) => (
            <div key={i} style={{
              background: i % 13 === 0 ? 'var(--amber)' : i % 7 === 0 ? 'var(--teal)' : 'var(--offwhite)',
              opacity: ((i * 37) % 100) / 100 * 0.8 + 0.1,
              borderRadius: 1,
            }} />
          ))}
        </div>

        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 70% 40%, rgba(232,168,56,0.10), transparent 60%)',
          transform: `translateY(${scrollY * parallaxMul * 0.5}px)`,
          pointerEvents: 'none', willChange: 'transform',
        }} />

        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(180deg, transparent 0%, rgba(46,139,139,0.03) 50%, transparent 100%)',
          animation: 'scanline 4s ease-in-out infinite', pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, ...heroContentStyle, transition: 'opacity 0.1s linear, transform 0.1s linear' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '4rem', alignItems: 'center' }}>
            <div>
              <Reveal>
                <div className="pill" style={{ marginBottom: '1.5rem' }}>Policy Advocacy</div>
              </Reveal>
              <Reveal delay={0.15}>
                <h1 className="headline-xl" style={{ marginBottom: '1.75rem', color: 'var(--offwhite)' }}>
                  Your MRI didn't{' '}
                  <span style={{ fontStyle: 'italic', color: 'var(--amber)' }}>stay in the room.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.3}>
                <div style={{ maxWidth: 560, marginBottom: '2rem' }}>
                  <p className="body-lg" style={{ color: 'rgba(244,241,236,0.78)', marginBottom: '1rem' }}>
                    Maria is 54 years old when her oncologist orders a CT scan. The tumor is caught early. She goes through treatment, recovers, and moves on.
                  </p>
                  <p className="body-lg" style={{ color: 'rgba(244,241,236,0.78)', marginBottom: '1rem' }}>
                    What she never knows is that her scan — stripped of her name and birthdate — was deposited into a public database, accessed by three research institutions she has never heard of, and used to train a commercial algorithm she will never see.
                  </p>
                  <p className="body-lg" style={{ color: 'rgba(244,241,236,0.85)', fontWeight: 500 }}>
                    Nobody asked her. Nobody was required to.
                  </p>
                </div>
                <div style={{ borderLeft: '3px solid var(--amber)', paddingLeft: '1.25rem', marginBottom: '2.5rem', maxWidth: 520 }}>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.2rem', lineHeight: 1.5, color: 'var(--offwhite)' }}>
                    U.S. law has not caught up to what AI does with cancer patients' data. It needs to.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.45}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button className="btn-primary" onClick={scrollToPreview}>See What's at Stake <span>↓</span></button>
                  <button className="btn-secondary" onClick={() => navigate('/evidence')}>Read the Policy Case <span>→</span></button>
                </div>
              </Reveal>
            </div>

            {/* Hero image */}
            <Reveal delay={0.2}>
              <div style={{ position: 'relative', height: 520 }}>
                <img
                  src="/MRIScans.jpg"
                  alt="Doctor reviewing MRI brain scans"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center top',
                    display: 'block',
                  }}
                />
                {/* Dark overlay to blend with navy bg */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to right, var(--navy) 0%, transparent 25%, transparent 75%, var(--navy) 100%), linear-gradient(to bottom, transparent 60%, var(--navy) 100%)',
                }} />
                {/* Amber accent line */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'var(--amber)' }} />
                {/* Caption */}
                <div style={{
                  position: 'absolute', bottom: '1rem', left: '1.25rem',
                  fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(244,241,236,0.45)', fontFamily: 'DM Sans, sans-serif',
                }}>
                  MRI brain scan review
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          opacity: 0.4 * (1 - heroScroll * 2),
        }}>
          <div style={{ width: 1, height: 40, background: 'var(--offwhite)', animation: 'pulse 2s infinite' }} />
        </div>
      </section>

      {/* ARGUMENT PREVIEW */}
      <section ref={previewRef} id="preview-section" style={{ padding: '6rem 0', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -100, left: '-10%', width: '40%', height: 400,
          background: 'radial-gradient(circle, rgba(46,139,139,0.08), transparent 70%)',
          transform: `translateY(${(previewP - 0.5) * 200}px)`,
          pointerEvents: 'none', willChange: 'transform',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <Reveal>
              <div>
                <div className="section-label">The Core Argument</div>
                <h2 className="headline-lg" style={{ marginBottom: '1.5rem' }}>A 1996 law cannot protect patients in a 2026 world</h2>
                <div className="sep" />
                <p className="body-lg" style={{ color: 'rgba(244,241,236,0.7)', marginBottom: '1.25rem' }}>
                  HIPAA's Privacy Rule established foundational protections for medical records. But its authors could not have anticipated that patient imaging data would one day be harvested, de-identified (imperfectly), and fed into commercial AI systems.
                </p>
                <p className="body-lg" style={{ color: 'rgba(244,241,236,0.7)', marginBottom: '2rem' }}>
                  Congress must act — with a targeted amendment that closes three critical gaps: informed consent for AI use, stronger de-identification standards, and federal oversight of academic institutions.
                </p>
                <button className="btn-primary" onClick={() => navigate('/policy')}>Read Our Policy Proposal →</button>
              </div>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Neural network image */}
              <Reveal delay={0.05}>
                <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '0.5rem' }}>
                  <img
                    src="/neuralNetwork.jpg"
                    alt="AI neural network layers visualization"
                    style={{ width: '100%', height: 180, objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to right, transparent 40%, var(--navy-mid) 100%), linear-gradient(to bottom, var(--navy-mid) 0%, transparent 30%, transparent 70%, var(--navy-mid) 100%)',
                  }} />
                  <div style={{
                    position: 'absolute', top: '50%', left: '1.25rem', transform: 'translateY(-50%)',
                    fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--teal-light)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
                  }}>AI model training →</div>
                </div>
              </Reveal>

              {[
                { n: '01', title: 'AI Consent Gap', desc: 'Current HIPAA consent forms do not require disclosure when patient imaging data is used for AI training.', color: 'var(--amber)' },
                { n: '02', title: 'Broken De-identification', desc: 'Standard HIPAA Safe Harbor de-identification methods fail against modern re-identification attacks.', color: 'var(--teal-light)' },
                { n: '03', title: 'Oversight Vacuum', desc: 'Academic medical centers face no dedicated federal oversight body for AI research uses of patient data.', color: '#E87070' },
              ].map((item, i) => (
                <Reveal key={item.n} delay={0.1 + i * 0.12}>
                  <div className="card-dark" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: item.color, opacity: 0.5, lineHeight: 1, flexShrink: 0 }}>{item.n}</div>
                    <div>
                      <h4 className="headline-sm" style={{ marginBottom: '0.5rem', color: item.color }}>{item.title}</h4>
                      <p className="body-md" style={{ color: 'rgba(244,241,236,0.65)' }}>{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR with Counters */}
      <section ref={statsRef} style={{ padding: '4rem 0', background: 'var(--navy)', borderTop: '1px solid rgba(232,168,56,0.12)', borderBottom: '1px solid rgba(232,168,56,0.12)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(90deg, transparent ${(1 - statsP) * 100}%, rgba(232,168,56,0.04) 100%)`,
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="grid-4">
            {[
              { val: 1.3, prefix: '', suffix: 'B+', label: 'Medical images in AI training datasets worldwide', color: 'var(--amber)', decimals: 1 },
              { val: 96, prefix: '', suffix: '%', label: 'Of patients unaware their scans could train AI models', color: 'var(--teal-light)' },
              { val: 1996, prefix: '', suffix: '', label: 'Year HIPAA was enacted — before the commercial internet', color: 'var(--offwhite)', noFormat: true },
              { val: 45, prefix: '$', suffix: 'B', label: 'Projected AI medical imaging market by 2030', color: '#E87070' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="stat-card" style={{ borderColor: s.color }}>
                  <div className="stat-number" style={{ color: s.color, fontSize: '2.4rem' }}>
                    <Counter value={s.val} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals || 0} formatThousands={!s.noFormat} duration={1800} />
                  </div>
                  <p className="body-md" style={{ color: 'rgba(244,241,236,0.6)', marginTop: '0.5rem', fontSize: '0.85rem' }}>{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NAV PREVIEW — ScaleCard */}
      <section style={{ padding: '5rem 0', background: 'var(--navy-mid)' }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Explore This Site</div>
              <h2 className="headline-md" style={{ marginTop: '0.5rem' }}>Where do you want to go?</h2>
            </div>
          </Reveal>
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              { path: '/problem', label: 'The Problem', icon: '⚠', desc: 'How patient imaging data flows from hospital to AI model — and what HIPAA misses.', color: 'var(--amber)' },
              { path: '/evidence', label: 'The Evidence', icon: '📊', desc: 'Research findings, consent audit data, and documented de-identification failures.', color: 'var(--teal-light)' },
              { path: '/policy', label: 'Policy Proposal', icon: '⚖', desc: 'Our three-pillar legislative framework and draft amendment language.', color: 'var(--offwhite)' },
            ].map((card, i) => (
              <Reveal key={card.path} delay={i * 0.12}>
                <ScaleCard card={card} navigate={navigate} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ padding: '5rem 0', background: '#080F18', textAlign: 'center' }}>
        <Reveal>
          <div className="container-narrow">
            <div className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>Your Voice Matters</div>
            <h2 className="headline-lg" style={{ margin: '1rem 0 1.5rem' }}>Tell Congress to modernize HIPAA for the AI era</h2>
            <p className="body-lg" style={{ color: 'rgba(244,241,236,0.65)', marginBottom: '2.5rem' }}>
              Cancer patients, advocates, researchers, and citizens can all make their voices heard. It takes less than two minutes.
            </p>
            <button className="btn-primary" onClick={() => navigate('/action')} style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>Take Action Now →</button>
          </div>
        </Reveal>
      </section>

      <style>{`
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; transform: scaleY(1); } 50% { opacity: 0.8; transform: scaleY(1.2); } }
      `}</style>
    </div>
  );
}
