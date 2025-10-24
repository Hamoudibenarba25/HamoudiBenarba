import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { CiLocationArrow1 } from 'react-icons/ci';

const contactMethods = [
  {
    name: 'Email',
    value: 'hamoudibenarba@gmail.com',
    href: 'mailto:hamoudibenarba@gmail.com',
    icon: FiMail,
    color: '#FF9500', // iOS orange
  },
  {
    name: 'Call Me',
    value: '+90 535 816 3762',
    href: 'https://wa.me/905358163762',
    icon: IoLogoWhatsapp,
    color: '#25D366', // WhatsApp green
  },
  {
    name: 'LinkedIn',
    value: 'Hamoudi Benarba',
    href: 'https://www.linkedin.com/in/hamoudi-benarba-08b46b161/',
    icon: FiLinkedin,
    color: '#0077B5', // LinkedIn blue
  },
  {
    name: 'Location',
    value: 'Algeria / Turkey',
    href: null,
    icon: CiLocationArrow1,
    color: '#8B8BFF', // Soft purple
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
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
            Contact me
          </h2>
          <p className="mt-6 text-lg leading-8 text-dark-300/90">
            Let's discuss how we can work together on a collaboration research or if you're interested in one of my services
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') || method.href.startsWith('https') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-5 rounded-xl bg-dark-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-dark-900/50"
                  >
                    {/* Accent line */}
                    <div 
                      className="absolute left-0 top-1/2 h-0 w-1 -translate-y-1/2 rounded-r-full transition-all duration-300 group-hover:h-3/4"
                      style={{ backgroundColor: method.color }}
                    />
                    
                    {/* Icon */}
                    <div 
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${method.color}15` }}
                    >
                      <method.icon 
                        className="h-5 w-5 transition-colors" 
                        style={{ color: method.color }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium text-dark-400 transition-colors group-hover:text-dark-300">
                        {method.name}
                      </h3>
                      <p className="mt-1 truncate text-base font-medium text-white">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="group relative flex items-center gap-5 rounded-xl bg-dark-900/30 p-6 backdrop-blur-sm">
                    {/* Accent line */}
                    <div 
                      className="absolute left-0 top-1/2 h-3/4 w-1 -translate-y-1/2 rounded-r-full opacity-40"
                      style={{ backgroundColor: method.color }}
                    />
                    
                    {/* Icon */}
                    <div 
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${method.color}15` }}
                    >
                      <method.icon 
                        className="h-5 w-5" 
                        style={{ color: method.color }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium text-dark-400">
                        {method.name}
                      </h3>
                      <p className="mt-1 truncate text-base font-medium text-white">
                        {method.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Inquiries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <div className="rounded-2xl border border-dark-800/50 bg-dark-900/20 p-12 backdrop-blur-sm">
            <h3 className="font-playfair text-2xl font-semibold text-white">
              Professional Inquiries
            </h3>
            <p className="mt-4 text-base leading-relaxed text-dark-300/80">
              Whether you're looking for language instruction, teacher training, academic
              consultation, or translation services, I'm here to help. Feel free to reach out
              through any of the contact methods above, and I'll respond as soon as possible.
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-32 max-w-7xl"
        >
          <div className="border-t border-dark-800/30 pt-8 text-center">
            <p className="text-sm text-dark-400">
              {new Date().getFullYear()} - Dr. Hamoudi Benarba
            </p>
            <div className="group relative mt-4 inline-block">
              <a 
                href="https://salahmed-ctrlz.github.io/salaheddine-medkour-portfolio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-dark-400 underline decoration-dark-600 underline-offset-4 transition-all duration-300 hover:text-white hover:decoration-white"
              >
                Dev.
              </a>
              {/* Enhanced Tooltip */}
              <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="relative rounded-lg bg-dark-700 px-4 py-2 shadow-xl ring-1 ring-white/10">
                  <p className="whitespace-nowrap text-sm font-medium text-white">
                    Visit Developer
                  </p>
                  {/* Tooltip arrow */}
                  <div className="absolute left-1/2 top-full -translate-x-1/2">
                    <div className="border-4 border-transparent border-t-dark-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}