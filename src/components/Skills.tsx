import React from 'react';
import { Code, Palette, LineChart } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    title: 'Programming',
    icon: <Code className="w-6 h-6 text-blue-600" aria-label="Programming Icon" />,
    skills: [{ id: 1, name: 'Python' }, { id: 2, name: 'R' }],
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'Design',
    icon: <Palette className="w-6 h-6 text-pink-600" aria-label="Design Icon" />,
    skills: [{ id: 1, name: 'Canva' }],
    bgColor: 'bg-pink-50',
  },
  {
    id: 3,
    title: 'Data Analysis',
    icon: <LineChart className="w-6 h-6 text-green-600" aria-label="Data Analysis Icon" />,
    skills: [{ id: 1, name: 'Excel' }],
    bgColor: 'bg-green-50',
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgColor} p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-white mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="flex items-center text-gray-700 animate-fadeIn"
                    style={{ animationDelay: `${skill.id * 0.1}s` }}
                  >
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
