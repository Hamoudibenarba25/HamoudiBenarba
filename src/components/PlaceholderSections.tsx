import { BookOpen, Briefcase, Award, Mail } from 'lucide-react';

const sections = [
  {
    id: 'research',
    title: 'Research & Publications',
    icon: BookOpen,
    description: 'Coming soon: Research papers, publications, and academic contributions.',
  },
  {
    id: 'experience',
    title: 'Teaching & Experience',
    icon: Briefcase,
    description: 'Coming soon: Professional experience and academic positions.',
  },
  {
    id: 'skills',
    title: 'Skills & Expertise',
    icon: Award,
    description: 'Coming soon: Teaching methodologies, research areas, and competencies.',
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: Mail,
    description: 'Coming soon: Get in touch for collaboration and inquiries.',
  },
];

export function PlaceholderSections() {
  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`min-h-screen flex items-center justify-center px-6 py-24 ${
            index % 2 === 0 ? 'bg-beige-50' : 'bg-white'
          }`}
        >
          <div className="max-w-2xl text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-academic-100">
              <section.icon className="h-10 w-10 text-academic-600" />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-academic-900 sm:text-5xl">
              {section.title}
            </h2>
            <p className="mt-6 text-lg text-academic-600">{section.description}</p>
          </div>
        </section>
      ))}
    </>
  );
}
