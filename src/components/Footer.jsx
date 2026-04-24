import { useNavigate } from 'react-router-dom';

const links = [
  { path: '/',        label: 'Home' },
  { path: '/problem', label: 'Problem' },
  { path: '/evidence',label: 'Evidence' },
  { path: '/policy',  label: 'Policy Case' },
  { path: '/action',  label: 'Take Action' },
  { path: '/sources', label: 'Sources' },
];

export default function Footer() {
  const navigate = useNavigate();
  const go = (path) => { navigate(path); window.scrollTo(0, 0); };

  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div className="nav-logo" style={{ marginBottom: '0.5rem' }}>HIPAA &amp; AI Cancer Imaging</div>
          <p style={{ fontSize: '0.78rem', color: 'rgba(244,241,236,0.35)', maxWidth: 420, lineHeight: 1.6 }}>
            A public policy advocacy resource. All information is for educational and advocacy purposes. Not legal advice.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {links.map(l => (
            <span
              key={l.path}
              onClick={() => go(l.path)}
              style={{ fontSize: '0.78rem', color: 'rgba(244,241,236,0.4)', cursor: 'pointer', textTransform: 'capitalize', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#E8A838'}
              onMouseLeave={e => e.target.style.color = 'rgba(244,241,236,0.4)'}
            >
              {l.label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
