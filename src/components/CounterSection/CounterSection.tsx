import { useState, useEffect, useRef } from 'react';
import Counter from '../Counter/Counter';

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} className="relative py-16 bg-[#002e45]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <Counter end={500} duration={2000} suffix="+" className="text-white" startAnimation={isVisible} />
            <p className="mt-2 text-gray-300">Company meeting per year</p>
          </div>
          <div className="p-6">
            <Counter end={50} duration={2000} className="text-white" startAnimation={isVisible} />
            <p className="mt-2 text-gray-300">Years of experience</p>
          </div>
          <div className="p-6">
            <Counter end={5000} duration={2000} suffix="+" className="text-white" startAnimation={isVisible} />
            <p className="mt-2 text-gray-300">Cumulative Research Hours</p>
          </div>
          <div className="p-6">
            <Counter end={10} duration={2000} className="text-white" startAnimation={isVisible} />
            <p className="mt-2 text-gray-300">Client coverage countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
