import { useEffect, useCallback, useRef } from 'react';

const TRAIL_LENGTH = 10;
const CURSOR_SIZE = 24;
const CURSOR_HOVER_SIZE = 44;
const TRAIL_SIZE = 12;

export const usePointerAnimation = () => {
  const mousePos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef([]);
  const cursorRef = useRef(null);
  const isHovering = useRef(false);
  const rafRef = useRef(null);

  // Update mouse position with RAF for smooth animation
  const updateMousePosition = useCallback((e) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  // Detect hover on interactive elements
  const handleMouseEnter = useCallback(() => {
    isHovering.current = true;
    if (cursorRef.current) {
      cursorRef.current.classList.add('cursor-follower--hover');
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    if (cursorRef.current) {
      cursorRef.current.classList.remove('cursor-follower--hover');
    }
  }, []);

  useEffect(() => {
    // Create cursor element if not exists
    let cursor = cursorRef.current;
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.className = 'cursor-follower';
      cursor.style.cssText = `
        position: fixed;
        width: ${CURSOR_SIZE}px;
        height: ${CURSOR_SIZE}px;
        pointer-events: none;
        z-index: 9999;
        transition: none;
        will-change: transform;
      `;
      document.body.appendChild(cursor);
      cursorRef.current = cursor;
    }

    // Mouse events
    document.addEventListener('mousemove', updateMousePosition);
    
    // Hover detection on interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"], .btn-primary, .navCta, .navLinks a');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Animation loop
    const animate = () => {
      // Update trail positions (oldest first)
      trailPositions.current.unshift({ ...mousePos.current });
      if (trailPositions.current.length > TRAIL_LENGTH) {
        trailPositions.current.pop();
      }

      // Main cursor follows mouse smoothly
      if (cursorRef.current) {
        cursorRef.current.style.transform = 
          `translate(${mousePos.current.x - CURSOR_SIZE/2}px, ${mousePos.current.y - CURSOR_SIZE/2}px)`;
        
        // Update trail particles
        const trails = cursorRef.current.children;
        trailPositions.current.forEach((pos, index) => {
          if (trails[index]) {
            const scale = 1 - (index / TRAIL_LENGTH) * 0.7;
            const opacity = 1 - (index / TRAIL_LENGTH) * 0.8;
            trails[index].style.transform = 
              `translate(${pos.x - TRAIL_SIZE/2}px, ${pos.y - TRAIL_SIZE/2}px) scale(${scale})`;
            trails[index].style.opacity = opacity;
          }
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Hide default cursor
    document.body.classList.add('cursor-none');

    return () => {
      // Cleanup
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', updateMousePosition);
      
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      if (cursorRef.current) {
        if (cursorRef.current.parentNode) {
          cursorRef.current.parentNode.removeChild(cursorRef.current);
        }
      }
      
      document.body.classList.remove('cursor-none');
    };
  }, [updateMousePosition, handleMouseEnter, handleMouseLeave]);
};

