import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { contactInfo, personalInfo } from '../data/personal';
import ContactCard from '../components/ui/ContactCard';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contacta <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Conmigo</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            {/* Puedes agregar un mensaje aquí si quieres */}
          </p>
        </div>
        
        {/* Cards de contacto */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => (
            <ContactCard key={contact.type} contact={contact} />
          ))}
        </div>

        {/* Redes sociales */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">También puedes encontrarme en:</p>
          <div className="flex justify-center space-x-6">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
            >
              <Github className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
            >
              <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;