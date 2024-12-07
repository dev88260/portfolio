import React from 'react';
import { Code, Palette, Database, LineChart } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code className="w-6 h-6 text-blue-600" />,
    skills: ['Python', 'R'],
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Design',
    icon: <Palette className="w-6 h-6 text-pink-600" />,
    skills: ['Canva'],
    bgColor: 'bg-pink-50',
  },
  {
    title: 'Data Analysis',
    icon: <LineChart className="w-6 h-6 text-green-600" />,
    skills: ['Excel'],
    bgColor: 'bg-green-50',
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-white mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-700"
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                    {skill}
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