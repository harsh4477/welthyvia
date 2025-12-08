import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  startAnimation?: boolean;
}

const easeOutQuad = (t: number) => t * (2 - t);

const Counter = ({ end, duration, prefix = '', suffix = '', className = '', startAnimation = true }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;
    
    let animationFrame: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      
      if (progress < 1) {
        const currentCount = Math.min(Math.floor(easeOutQuad(progress) * end), end);
        setCount(currentCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, startAnimation]);

  return (
    <div className={`text-4xl md:text-5xl font-bold ${className}`}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

export default Counter;
