import { motion, Variants } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FiLinkedin } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useState } from 'react';

import HeroImageWebp from '/images/HeroImage.webp';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const handleScroll = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden lg:min-h-0 lg:items-start lg:pt-24 xl:min-h-screen xl:items-center xl:pt-0">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0"
        >
          <motion.div variants={itemVariants} className="lg:order-2">
            <div className="relative mx-auto aspect-square max-w-md lg:max-w-none">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-dark-700/20 to-dark-800/20 opacity-50 blur-3xl" />

              <div className="group relative overflow-hidden rounded-full border-4 border-dark-700 bg-dark-800 shadow-2xl">
                {!imgError ? (
                  <>
                    <img
                      src={HeroImageWebp}
                      className="aspect-square w-full object-cover"
                      onError={() => setImgError(true)}
                      alt="Hamoudi Benarba"
                    />
                    {/* Shine Effect */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="shine-effect absolute inset-0" />
                    </div>
                  </>
                ) : (
                  <div className="aspect-square w-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-dark-700 text-6xl font-playfair font-semibold text-white shadow-lg">
                        HB
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 rounded-2xl bg-dark-800 p-6 shadow-xl border border-dark-700"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-700">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">PhD Candidate</p>
                    <p className="text-xs text-dark-400">TEFL/TESOL</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="lg:order-1 lg:pr-8">
            <motion.p
              variants={itemVariants}
              className="text-base font-semibold leading-7 text-dark-400 tracking-wide uppercase"
            >
              Professional Educator
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mt-4 font-playfair text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl text-balance"
            >
              Dr. Hamoudi Benarba
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-2xl font-medium text-dark-300 sm:text-3xl"
            >
              EFL/ESL Educator, Trainer & Researcher
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center gap-2 text-lg text-dark-400"
            >
              <div className="h-1 w-12 bg-dark-600 rounded-full" />
              <span className="font-medium">PhD Candidate in TEFL/TESOL</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-lg leading-8 text-dark-300/90 max-w-xl"
            >
              Algerian EFL/ESL Educator and Trainer specializing in language pedagogy and teacher development. Expert in innovative methods that inspire lifelong learning.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center sm:flex-row gap-4">
              <button
                onClick={() => handleScroll('#education')}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-dark-900/50 px-8 py-4 text-base font-medium text-white ring-1 ring-dark-700 backdrop-blur-sm transition-all duration-300 hover:bg-dark-800/50 hover:ring-dark-600"
              >
                View Profile
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Animated Contact Button */}
              <div className="contact-btn-wrapper">
                <button className="contact-btn group" onClick={() => handleScroll('#contact')}>
                  
                  <span className="contact-btn-text">Contact</span>
                  <div className="contact-btn-icons">
                    <a
                      href="mailto:hamoudibenarba@gmail.com"
                      className="contact-icon"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hamoudi-benarba-08b46b161/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-icon"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiLinkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://wa.me/905358163762"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-icon"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <IoLogoWhatsapp className="h-5 w-5" />
                    </a>
                  </div>
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-6 text-sm text-dark-400"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available for consultation</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden xl:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-dark-500"
        >
          <span className="text-xs font-medium tracking-wide uppercase">Scroll to explore</span>
          <div className="h-8 w-0.5 bg-dark-600 rounded-full" />
        </motion.div>
      </motion.div>

      <style>{`
        /* Shine Effect */
        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .shine-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 45%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0.1) 55%,
            transparent 100%
          );
          animation: shine 0.8s ease-in-out;
          width: 200%;
          height: 200%;
        }

        /* Contact Button */
        .contact-btn-wrapper {
          position: relative;
        }

        .contact-btn {
          position: relative;
          display: flex;
          overflow: hidden;
          cursor: pointer;
          width: 170px;
          height: 56px;
          background-color: transparent;
          border-radius: 80px;
          border: none;
          padding: 0;
          transition: all 0.3s ease;
          justify-content: center;
          align-items: center;
        }

        .contact-btn:hover {
          transform: scale(1.1);
        }

        .contact-btn-text {
          position: absolute;
          z-index: 99;
          width: 170px;
          height: 56px;
          border-radius: 80px;
          font-weight: 500;
          font-size: 16px;
          text-align: center;
          line-height: 56px;
          letter-spacing: 0.5px;
          color: #ffffff;
          background-color: rgb(31 31 31 / 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid rgb(55 55 55);
          padding: 0 10px;
          transition: all 0.8s ease;
        }

        .contact-btn-icons {
          display: flex;
          gap: 8px;
          width: 170px;
          border-radius: 80px;
          line-height: 56px;
          justify-content: center;
          align-items: center;
        }

        .contact-icon {
          padding: 0 8px;
          opacity: 0;
          color: #ffffff;
          transition: opacity 0.6s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-icon:hover {
          color: #a0a0a0;
        }

        .contact-btn-icons .contact-icon:nth-of-type(1) {
          transition-delay: 0.5s;
        }

        .contact-btn-icons .contact-icon:nth-of-type(2) {
          transition-delay: 0.65s;
        }

        .contact-btn-icons .contact-icon:nth-of-type(3) {
          transition-delay: 0.8s;
        }

        .contact-btn:hover .contact-btn-text {
          opacity: 0;
        }

        .contact-btn:hover .contact-icon {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}