import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import AnimatedName from './AnimatedName';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/3 animate-slideRight">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white/20">
                <img 
                  alt="Profile"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
        <AnimatedName name="Dev" />
        <h1 className="text-6xl font-bold mb-4">Dev</h1>
        <p className="text-xl text-white mb-4 animate-slide-up delay-200">
          Arts Student • CBSE
        </p>
        <p className="text-lg text-white-500 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Passionate about Technology & Design
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
            <Github size={24} />
          </a>
          <a href="mailto:devyadav88260@gmail.com" className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
            <Mail size={24} />
          </a>
          <a href="#" className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}