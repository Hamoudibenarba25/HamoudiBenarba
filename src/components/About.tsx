import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { FiLinkedin } from 'react-icons/fi';

import PortraitImg from '/images/Portrait.png';
import ResumePdf from '/HamoudiBenarbaResume.pdf';
import { SiResearchgate, SiAcademia } from 'react-icons/si';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/hamoudi-benarba-08b46b161/',
  },
  {
    name: 'ResearchGate',
    icon: SiResearchgate,
    href: 'https://www.researchgate.net/profile/Hamoudi-Benarba',
  },
  {
    name: 'Academia',
    icon: SiAcademia,
    href: 'https://independent.academia.edu/benarbahamoudi',
  },
];

const stats = [
  { value: 8, label: 'Years of Experience', suffix: '+' },
  { value: 5, label: 'Institutions Served', suffix: '+' },
  { value: 1, label: 'PhD Candidate', suffix: '', special: 'PhD' },
];

// Improved custom hook for smooth counting animation
function useCountUp(end: number, duration: number = 1500, isInView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Smoother easing function
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.round(easeOutExpo * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Ensure we end exactly at the target
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return count;
}

export function About() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 sm:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-playfair text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About Me
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image with Loading Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Loading Skeleton */}
                {!imageLoaded && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl bg-dark-800/50">
                    <div className="h-full w-full animate-pulse bg-gradient-to-r from-dark-800/50 via-dark-700/50 to-dark-800/50" />
                  </div>
                )}
                
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={PortraitImg}
                    alt="Hamoudi Benarba"
                    className={`w-full max-w-md object-cover shadow-2xl transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                {/* Subtle accent border */}
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/50" />
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6 text-lg leading-relaxed text-dark-300/90">
                <p>
                  Hamoudi Benarba is an Algerian qualified{' '}
                  <span className="font-semibold text-white">
                    EFL/ESL Educator, Trainer and Researcher
                  </span>{' '}
                  with a strong background in language pedagogy, educational innovation, and teacher
                  training.
                </p>
                <p>
                  He possesses excellent communication and presentation skills endorsed by solid
                  knowledge and awareness of teaching methods to ensure lifelong learning and optimal
                  learning outcomes. He is an energetic, perseverant and approachable person with a
                  positive attitude.
                </p>
                <p>
                  With interests in{' '}
                  <span className="font-semibold text-white">
                    English Language Teaching (ELT), Applied Linguistics, Educational
                    Psychology and English Literature
                  </span>
                  , Hamoudi is determined to uncover the power of
                  language and language learning in such a highly globalised world.
                </p>
              </div>

              {/* Social Links & Resume */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                {/* Social Icons - No boxes */}
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-400 transition-all duration-300 hover:scale-110 hover:text-white"
                    aria-label={social.name}
                  >
                    <social.icon className="h-8 w-8" />
                  </motion.a>
                ))}

                {/* Divider */}
                <div className="h-8 w-px bg-dark-700" />

                {/* Resume Button */}
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  href={ResumePdf}
                  download
                  className="group inline-flex items-center gap-2 rounded-lg bg-dark-900/50 px-6 py-3 text-sm font-medium text-white ring-1 ring-dark-700 backdrop-blur-sm transition-all duration-300 hover:bg-dark-800/50 hover:ring-dark-600"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats with Count Up Animation */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                stat={stat}
                isInView={statsInView}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Separate component for stat cards
function StatCard({ 
  stat, 
  isInView, 
  delay 
}: { 
  stat: typeof stats[0]; 
  isInView: boolean; 
  delay: number;
}) {
  const count = useCountUp(stat.value, 1500, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-xl border border-dark-800/50 bg-dark-900/20 p-6 text-center backdrop-blur-sm"
    >
      <p className="text-5xl font-light tabular-nums tracking-tight text-white">
        {stat.special ? stat.special : `${count}${stat.suffix}`}
      </p>
      <p className="mt-3 text-sm text-dark-400">{stat.label}</p>
    </motion.div>
  );
}