import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const pages = [
  { path: '/',        label: 'Home' },
  { path: '/problem', label: 'The Problem' },
  { path: '/evidence',label: 'Evidence' },
  { path: '/policy',  label: 'Policy Case' },
  { path: '/action',  label: 'Take Action' },
  { path: '/sources', label: 'Sources' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (path) => {
    navigate(path);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => go('/')}>
          Hippa for AI
        </div>
        <ul className="nav-links">
          {pages.slice(1).map(p => (
            <li key={p.path}>
              <NavLink
                to={p.path}
                className={({ isActive }) =>
                  isActive ? 'active' : p.path === '/action' ? 'nav-cta' : ''
                }
                onClick={() => window.scrollTo(0, 0)}
              >
                {p.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-hamburger" onClick={() => setMobileOpen(o => !o)}>
          <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </div>
      </nav>

      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: 'rgba(13,27,42,0.98)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(232,168,56,0.15)',
          padding: '1rem 2rem 1.5rem',
        }}>
          {pages.map(p => (
            <div key={p.path} onClick={() => go(p.path)} style={{
              padding: '0.75rem 0',
              borderBottom: '1px solid rgba(244,241,236,0.06)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem', fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: '#F4F1EC', cursor: 'pointer',
            }}>
              {p.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
