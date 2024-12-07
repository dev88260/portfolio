import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="text-purple-600" />
              <span className="text-gray-600">devyadav88260@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-purple-600" />
              <span className="text-gray-600">+91 8826080297</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-purple-600" />
              <span className="text-gray-600">India</span>
            </div>
          </div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}