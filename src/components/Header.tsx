import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' }, 
  { name: 'Education & Experience', href: '#education' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Intersection Observer for active section highlighting
    observer.current = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        if (intersectingEntry) {
          setActiveSection(`#${intersectingEntry.target.id}`);
        }
      },
      { rootMargin: '-50% 0px -50% 0px' } // Trigger when section is in the middle of the viewport
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      if (observer.current) {
        observer.current.observe(section);
      }
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between py-6">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="font-playfair text-2xl font-semibold text-white">
                  Dr. Hamoudi
                </span>
              </a>
            </div>

            {/* Right side of header: Dark mode toggle, desktop nav, mobile menu button */}
            <div className="flex items-center gap-x-4 lg:gap-x-8"> {/* Increased gap for desktop */}
              {/* Desktop navigation */}
              <div className="hidden lg:flex lg:gap-x-10"> {/* Existing gap-x-10 for nav items */}
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'text-sm font-medium transition-colors relative group',
                    activeSection === item.href ? 'text-white' : 'text-dark-300 hover:text-white'
                  )}
                >
                  {item.name}
                  <span className={cn("absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full", activeSection === item.href && "w-full")} />
                </a>
              ))}
            </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
              className="fixed inset-0 bg-dark-900/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }} 
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-dark-900 px-6 py-6 sm:max-w-sm"
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="font-playfair text-2xl font-semibold text-white">
                    HB
                  </span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-dark-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-16 flow-root">
                <div className="space-y-2">
                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        '-mx-3 block rounded-lg px-3 py-4 text-2xl font-medium transition-colors',
                        activeSection === item.href ? 'text-white bg-dark-800' : 'text-dark-300 hover:bg-dark-800 hover:text-white'
                      )}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto pt-16"
              >
                <p className="text-sm text-dark-400">
                  Hamoudi Benarba
                  <br />
                  EFL/ESL Educator, Trainer & Researcher
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
