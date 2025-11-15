import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBookOpen, FiMessageCircle } from 'react-icons/fi';
import { RiTranslate } from 'react-icons/ri';
import { PiCertificate, PiStudent } from 'react-icons/pi';
import { VscBeaker } from 'react-icons/vsc';
import { GiTeacher } from 'react-icons/gi';

const services = [
  {
    name: 'CEFR English Courses',
    description: 'Comprehensive courses for all levels (A1-C2) focusing on practical language skills.',
    icon: PiStudent,
    color: '#3B82F6', // Blue
  },
  {
    name: 'Teacher Training',
    description: 'Workshops and programs on modern teaching methodologies and classroom management.',
    icon: GiTeacher,
    color: '#8B5CF6', // Purple
  },
  {
    name: 'Academic Consultation',
    description: 'Expert guidance on curriculum design, assessment strategies, and educational research.',
    icon: VscBeaker,
    color: '#06B6D4', // Cyan
  },
  {
    name: 'Translation Services',
    description: 'Professional translation between English and Arabic for various documents.',
    icon: RiTranslate,
    color: '#10B981', // Green
  },
  {
    name: 'Academic Writing',
    description: 'Assistance and workshops on research papers, theses, and academic publications.',
    icon: FiBookOpen,
    color: '#F59E0B', // Amber
  },
  {
    name: 'Certification Prep',
    description: 'Preparation courses for international English proficiency tests like IELTS and TOEFL.',
    icon: PiCertificate,
    color: '#EC4899', // Pink
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
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
            Professional Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-dark-300/90">
            Offering a range of expert services in education, language, and research.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="group relative overflow-hidden rounded-xl bg-dark-900/30 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-dark-900/50"
              >
                {/* Top accent line */}
                <div 
                  className="absolute left-0 top-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: service.color }}
                />
                
                {/* Icon */}
                <div className="mb-6 inline-flex">
                  <div 
                    className="flex h-14 w-14 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon 
                      className="h-7 w-7" 
                      style={{ color: service.color }}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white">
                  {service.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-dark-300/80">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <div className="rounded-2xl border border-dark-800/50 bg-dark-900/20 p-12 backdrop-blur-sm">
            <h3 className="font-playfair text-2xl font-semibold text-white">
              Ready to Collaborate?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-dark-300/80">
              If you are interested in any of these services or have a specific inquiry, please don't hesitate to get in touch.
            </p>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-dark-900/50 px-8 py-3.5 text-base font-medium text-white ring-1 ring-dark-700 backdrop-blur-sm transition-all duration-300 hover:bg-dark-800/50 hover:ring-dark-600"
            >
              <FiMessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}