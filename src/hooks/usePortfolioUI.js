import { useEffect, useState } from 'react';
import { navigation } from '../data/portfolio.js';

export function usePortfolioScroll() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const root = document.documentElement;
    const sections = navigation.map(({ id }) => document.getElementById(id));
    const revealNodes = document.querySelectorAll('[data-reveal]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;

    if (!reducedMotion.matches && 'IntersectionObserver' in window) {
      root.classList.add('js-reveal-enabled');
      observer = new IntersectionObserver((entries) => {
        for (const { target, isIntersecting } of entries) {
          if (isIntersecting) {
            target.classList.add('is-visible');
            observer.unobserve(target);
          }
        }
      }, { threshold: 0.05 });
      revealNodes.forEach((node) => observer.observe(node));
    }

    function updateScroll() {
      const scrollable = root.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
      root.style.setProperty('--scroll-progress', progress);
      const marker = window.innerHeight * 0.34;
      const current = progress >= 0.995
        ? sections.at(-1)
        : sections.findLast((section) => section.getBoundingClientRect().top <= marker);
      setActiveSection(current?.id ?? 'home');
    }

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => {
      root.classList.remove('js-reveal-enabled');
      observer?.disconnect();
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  return activeSection;
}
