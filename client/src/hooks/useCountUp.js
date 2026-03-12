import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to target when element enters viewport
 * @param {number} target - The number to count up to
 * @param {number} duration - Duration in ms
 */
const useCountUp = (target, duration = 1200) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const steps = 60;
          const step = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(interval);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

export default useCountUp;
