import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { contactInfo, personalInfo } from '../data/personal';
import ContactCard from '../components/ui/ContactCard';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contacta <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Conmigo</span>
          </h2>
          <div className="w-25 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>
        
        {/* Cards de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <ContactCard key={contact.type} contact={contact} />
          ))}
        </div>

        {/* Redes sociales */}
        <div className="text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>
          <p className="text-gray-400 mb-8 text-lg">También puedes encontrarme en:</p>
          <div className="flex justify-center space-x-8">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl">
                <Github className="h-7 w-7 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full blur opacity-0 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl">
                <Linkedin className="h-7 w-7 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;