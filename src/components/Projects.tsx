import React from 'react';
import { Code2, Database, Calculator, Layout, Video } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Ludo Program',
    description: 'Interactive Ludo game implementation',
    icon: <Code2 className="w-6 h-6" aria-label="Ludo Icon" />,
  },
  {
    id: 2,
    title: 'ERP System',
    description: 'Enterprise Resource Planning solution',
    icon: <Database className="w-6 h-6" aria-label="ERP System Icon" />,
  },
  {
    id: 3,
    title: 'Quiz Program',
    description: 'Interactive quiz application',
    icon: <Code2 className="w-6 h-6" aria-label="Quiz Program Icon" />,
  },
  {
    id: 4,
    title: 'Calculator Program',
    description: 'Advanced calculator implementation',
    icon: <Calculator className="w-6 h-6" aria-label="Calculator Icon" />,
  },
  {
    id: 5,
    title: 'Templates',
    description: 'Various design templates',
    icon: <Layout className="w-6 h-6" aria-label="Templates Icon" />,
  },
  {
    id: 6,
    title: 'Dashboard',
    description: 'Interactive data dashboard',
    icon: <Video className="w-6 h-6" aria-label="Dashboard Icon" />,
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
