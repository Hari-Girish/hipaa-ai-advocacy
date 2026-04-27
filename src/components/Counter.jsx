import { useState, useEffect } from 'react';
import { useInView } from '../hooks/scrollUtils';

export default function Counter({ value, prefix = '', suffix = '', duration = 2000, decimals = 0, formatThousands = true }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted = decimals > 0
    ? display.toFixed(decimals)
    : (formatThousands ? Math.round(display).toLocaleString() : String(Math.round(display)));

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}
