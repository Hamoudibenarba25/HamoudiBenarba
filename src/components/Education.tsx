import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaGlobe, FaBriefcase } from 'react-icons/fa';

const timeline = [
  {
    year: '2014-2019',
    title: 'Teacher Education',
    institution: 'École Normale Supérieure Assia Djebar, Constantine',
    description:
      'Five years of rigorous teacher education at this distinguished teacher training institution. Graduated as the valedictorian of the class of 2019. Training encompassed both theoretical and practical components, complemented by relevant research work in English literature and civilization.',
    icon: FaGraduationCap,
    color: '#3B82F6', // Blue
  },
  {
    year: '2019-2021',
    title: 'MA in Didactics of Foreign Languages (ELT)',
    institution: 'Oum El Bouaghi University',
    description:
      'Pursued advanced studies in English Language Teaching while working as a secondary school teacher. Focused on reflective teaching, textbook evaluation, and material adaptation initiatives to enhance student academic performance.',
    icon: FaGraduationCap,
    color: '#8B5CF6', // Purple
  },
  {
    year: '2021-Present',
    title: 'PhD Candidate & Adjunct Lecturer',
    institution: 'University of Béchar & Multiple Institutions',
    description:
      'Successfully qualified for the national PhD competition at the University of Béchar. Served as adjunct lecturer at OEB University, ENSC Teacher Training College, University of Constantine 3, and École Supérieure de Comptabilité et de Finances.',
    icon: FaBriefcase,
    color: '#10B981', // Green
  },
  {
    year: '2024',
    title: 'International Academic Internship',
    institution: 'Turkey',
    description:
      'One-year academic and professional internship where he taught English in an ESL context and conducted research on blended learning models in second language instruction. This expanded intercultural understanding and reinforced commitment to fostering globally competent English learners.',
    icon: FaGlobe,
    color: '#F59E0B', // Amber
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
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
            Education & Experience
          </h2>
          <p className="mt-6 text-lg leading-8 text-dark-300/90">
            A journey of continuous learning and professional growth in language education
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="flex gap-6">
                  {/* Timeline Line & Icon */}
                  <div className="relative flex flex-col items-center">
                    {/* Icon */}
                    <div 
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon 
                        className="h-6 w-6" 
                        style={{ color: item.color }}
                      />
                    </div>
                    
                    {/* Connecting Line */}
                    {index !== timeline.length - 1 && (
                      <div 
                        className="mt-4 w-0.5 flex-1 opacity-30"
                        style={{ backgroundColor: item.color }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    {/* Year Badge */}
                    <div className="mb-4 inline-flex">
                      <span 
                        className="rounded-full px-4 py-1.5 text-sm font-medium"
                        style={{ 
                          backgroundColor: `${item.color}15`,
                          color: item.color 
                        }}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Title & Institution */}
                    <h3 className="font-playfair text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base font-medium text-dark-400">
                      {item.institution}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-base leading-relaxed text-dark-300/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="rounded-2xl border border-dark-800/50 bg-dark-900/20 p-12 backdrop-blur-sm">
            <h3 className="font-playfair text-2xl font-semibold text-white">
              Areas of Expertise
            </h3>
            <p className="mt-4 text-base leading-relaxed text-dark-300/80">
              Hamoudi's academic and professional experience spans general English courses in
              elementary and secondary education, CEFR English Proficiency Courses, EAP and ESP
              University Programmes, Material Design and Development, Thesis Mentoring Frameworks
              and Research in Innovative Methodologies such as blended learning models,
              strategy-based instruction, and life competencies integration in EFL/ESL contexts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}