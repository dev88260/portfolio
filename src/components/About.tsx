import React from 'react';
import { GraduationCap, Award, Code, Palette } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <GraduationCap className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Education</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-800 font-medium">12th Grade (Present)</p>
                    <p className="text-gray-600">Arts Stream - CBSE</p>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">10th Grade</p>
                    <p className="text-gray-600">50% - CBSE</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Code className="text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Programming</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Python Development</li>
                  <li>• R Programming</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Palette className="text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Design & Tools</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Canva Design</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
              alt="Coding"
              className="rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}