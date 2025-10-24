import { useEffect, useState, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop({ threshold = 300 }: { threshold?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const update = () => {
      rafId.current = null;
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setIsVisible(y > threshold);
    };

    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // set initial visibility on mount

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  const scrollToTop = () => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      'matchMedia' in window &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`
          group relative overflow-hidden border-none bg-none
          text-white
          pointer-events-auto select-none
          transition-all duration-200 ease-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-current/40 rounded
          md:h-14 md:w-36
          h-12 w-12 flex items-center justify-center md:block
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        `}
      >
        {/* Text for desktop, hidden on mobile */}
        <span className="hidden md:flex absolute inset-0 items-center justify-center text-lg">
          Back to top
        </span>
        {/* Icon for mobile, always visible as a fallback */}
        <ArrowUp className="h-6 w-6 md:hidden" />

        {/* Underline on hover */}
        <span className="absolute bottom-0 left-0 h-0.5 w-full origin-bottom-right scale-x-0 bg-current transition-transform duration-200 ease-out group-hover:origin-bottom-left group-hover:scale-x-100" />
      </button>
    </div>
  );
}