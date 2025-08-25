import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactCard = ({ contact, index }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'email':
        return <Mail className="h-7 w-7" />;
      case 'phone':
        return <Phone className="h-7 w-7" />;
      case 'location':
        return <MapPin className="h-7 w-7" />;
      default:
        return null;
    }
  };

  const getColors = (type) => {
    switch (type) {
      case 'email':
        return {
          bg: 'from-blue-500/20 to-cyan-500/20',
          border: 'border-blue-500/30',
          icon: 'text-blue-400',
          hover: 'hover:border-blue-400/60 hover:shadow-blue-500/25'
        };
      case 'phone':
        return {
          bg: 'from-emerald-500/20 to-green-500/20',
          border: 'border-emerald-500/30',
          icon: 'text-emerald-400',
          hover: 'hover:border-emerald-400/60 hover:shadow-emerald-500/25'
        };
      case 'location':
        return {
          bg: 'from-purple-500/20 to-pink-500/20',
          border: 'border-purple-500/30',
          icon: 'text-purple-400',
          hover: 'hover:border-purple-400/60 hover:shadow-purple-500/25'
        };
      default:
        return {
          bg: 'from-gray-500/20 to-gray-400/20',
          border: 'border-gray-500/30',
          icon: 'text-gray-400',
          hover: 'hover:border-gray-400/60 hover:shadow-gray-500/25'
        };
    }
  };

  const getTitle = (type) => {
    switch (type) {
      case 'email':
        return 'Email';
      case 'phone':
        return 'Teléfono';
      case 'location':
        return 'Ubicación';
      default:
        return '';
    }
  };

  const colors = getColors(contact.type);
  
  // Animación de entrada escalonada
  const animationDelay = `${index * 200}ms`;

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} ${colors.hover} p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp`}
      style={{ animationDelay }}
    >
      {/* Efecto glassmorphism */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      {/* Contenido */}
      <div className="relative z-10 text-center">
        {/* Icono con fondo circular */}
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 ${colors.icon} mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {getIcon(contact.type)}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors">
          {getTitle(contact.type)}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed break-words group-hover:text-white transition-colors">
          {contact.value}
        </p>
      </div>

      {/* Efectos decorativos */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all duration-500"></div>
      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 rounded-full blur-lg group-hover:bg-white/10 transition-all duration-500"></div>
      
      {/* Borde brillante en hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
    </div>
  );
};

export default ContactCard;