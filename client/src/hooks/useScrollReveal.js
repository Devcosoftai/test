import { useEffect, useRef } from 'react';

/**
 * Custom hook to animate elements into view on scroll
 * @param {object} options - IntersectionObserver options
 * @returns {React.RefObject} - ref to attach to the element
 */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.12, ...options }
    );

    el.classList.add('reveal');
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useScrollReveal;
