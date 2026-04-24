import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ProblemPage from './pages/ProblemPage';
import EvidencePage from './pages/EvidencePage';
import PolicyPage from './pages/PolicyPage';
import TakeActionPage from './pages/TakeActionPage';
import SourcesPage from './pages/SourcesPage';

function AppInner() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  return (
    <>
      <div className="reading-progress" style={{ width: `${progress}%` }} />
      <Nav />
      <main>
        <Routes>
          <Route path="/"         element={<LandingPage />} />
          <Route path="/problem"  element={<ProblemPage />} />
          <Route path="/evidence" element={<EvidencePage />} />
          <Route path="/policy"   element={<PolicyPage />} />
          <Route path="/action"   element={<TakeActionPage />} />
          <Route path="/sources"  element={<SourcesPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
