import { useInView } from '../hooks/scrollUtils';

export default function Reveal({ children, delay = 0, distance = 40, intensity = 'moderate', style = {} }) {
  const [ref, inView] = useInView();
  const dist = intensity === 'subtle' ? 16 : intensity === 'cinematic' ? 60 : distance;
  const dur = intensity === 'subtle' ? 0.6 : intensity === 'cinematic' ? 1.0 : 0.8;
  return (
    <div ref={ref} style={{
      ...style,
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : `translateY(${dist}px)`,
      transition: `opacity ${dur}s cubic-bezier(0.2,0.6,0.2,1) ${delay}s, transform ${dur}s cubic-bezier(0.2,0.6,0.2,1) ${delay}s`,
      willChange: 'opacity, transform',
    }}>
      {children}
    </div>
  );
}
