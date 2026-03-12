import { useEffect, useCallback } from 'react';

/**
 * Custom hook for button mouse effects (ripple, glow, cursor tracking)
 * Adds premium interactive effects to all clickable buttons
 */
export const useButtonEffects = () => {
  useEffect(() => {
    // Add ripple effect to all buttons
    const addRippleEffect = (e) => {
      const button = e.currentTarget;
      
      // Skip if button is disabled or already has ripple
      if (button.disabled || button.classList.contains('btn-disabled')) return;
      
      // Get button position
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create ripple element - larger and more visible
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      ripple.style.cssText = `
        position: absolute;
        background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(52,211,153,0.3) 50%, transparent 70%);
        border-radius: 50%;
        width: 150px;
        height: 150px;
        left: ${x - 75}px;
        top: ${y - 75}px;
        transform: scale(0);
        animation: ripple-animation 0.5s ease-out;
        pointer-events: none;
        z-index: 10;
      `;
      
      // Remove existing ripples
      const existingRipple = button.querySelector('.ripple-effect');
      if (existingRipple) existingRipple.remove();
      
      // Add overflow hidden if not present
      if (getComputedStyle(button).overflow !== 'hidden') {
        button.style.overflow = 'hidden';
      }
      
      button.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => ripple.remove(), 500);
    };

    // Add mouse tracking glow to buttons - more responsive
    const addMouseGlow = (button) => {
      if (button.classList.contains('glow-tracked')) return;
      button.classList.add('glow-tracked');
      
      // Create larger, more visible glow
      const glow = document.createElement('div');
      glow.classList.add('mouse-glow');
      glow.style.cssText = `
        position: absolute;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(52, 211, 153, 0.5) 0%, rgba(167, 139, 250, 0.3) 40%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.15s ease, transform 0.1s ease-out;
        z-index: 0;
        filter: blur(5px);
      `;
      
      button.style.position = 'relative';
      button.insertBefore(glow, button.firstChild);
      
      // More responsive glow tracking
      const updateGlow = (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
        glow.style.transform = 'translate(-50%, -50%) scale(1.2)';
      };
      
      button.addEventListener('mousemove', updateGlow);
      button.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
        glow.style.transform = 'translate(-50%, -50%) scale(0.8)';
      });
      button.addEventListener('mouseenter', (e) => {
        glow.style.opacity = '1';
        updateGlow(e);
      });
    };

    // Select all clickable buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-outline, .navCta, a[href*="contact"], a[href*="services"]');
    
    buttons.forEach(button => {
      // Add ripple on click
      button.addEventListener('click', addRippleEffect);
      
      // Add mouse glow effect
      if (button.classList.contains('btn-primary') || button.classList.contains('navCta')) {
        addMouseGlow(button);
      }
    });

    // Cleanup
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', addRippleEffect);
      });
    };
  }, []);
};

/**
 * Adds floating particles to a container
 */
export const useFloatingParticles = (containerSelector) => {
  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // Create particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: ${['var(--green)', 'var(--purple)', 'var(--amber)', 'var(--cyan)'][Math.floor(Math.random() * 4)]};
        border-radius: 50%;
        opacity: ${Math.random() * 0.5 + 0.2};
        pointer-events: none;
        animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
        animation-delay: ${Math.random() * -20}s;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 10px currentColor;
      `;
      container.appendChild(particle);
    }

    return () => {
      const particles = container.querySelectorAll('.floating-particle');
      particles.forEach(p => p.remove());
    };
  }, [containerSelector]);
};

export default useButtonEffects;

