// src/components/ui/Timeline.jsx
// Componente Timeline para mostrar experiencias
// Se usa automáticamente en ExperienceSection

import React from 'react';
import { Calendar } from 'lucide-react';
import Card from './Card';

const Timeline = ({ experience, isLeft = true }) => {
  const {
    company,
    position,
    period,
    logo,
    techLogo,
    color,
    description,
    achievements
  } = experience;

  // Importar logos dinámicamente
  const getLogoSrc = (logoName) => {
    try {
      return require(`../../assets/${logoName}.png`);
    } catch {
      return null;
    }
  };

  const logoSrc = getLogoSrc(logo);
  const techLogoSrc = techLogo ? getLogoSrc(techLogo) : null;

  return (
    <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      {/* Contenido izquierdo */}
      {isLeft && (
        <div className="lg:text-right">
          <Card 
            variant="experience"
            className={`bg-gradient-to-br ${color.gradient} hover:border-gray-600/50`}
          >
            {/* Logos */}
            {logoSrc && (
              <img 
                src={logoSrc} 
                alt={`${company} Logo`} 
                className="absolute top-1 left-5 h-20 w-auto" 
              />
            )}
            {techLogoSrc && (
              <img 
                src={techLogoSrc} 
                alt="Tech Logo" 
                className="h-10 mb-2 self-end" 
              />
            )}

            {/* Información del trabajo */}
            <div className="flex flex-col lg:items-end mb-4">
              <h3 className={`text-xl font-bold text-${color.primary} group-hover:text-${color.primary.replace('400', '300')} transition-colors`}>
                {position}
              </h3>
              <p className={`text-${color.secondary} font-medium`}>{company}</p>
              <div className="flex items-center text-gray-400 mt-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{period}</span>
              </div>
            </div>

            {/* Descripción y logros */}
            <div className="text-gray-300 space-y-3">
              <p className="group-hover:text-gray-200 transition-colors">
                {description}
              </p>
              <div className="grid grid-cols-1 gap-2 text-sm">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    <div className={`w-1.5 h-1.5 bg-${color.primary} rounded-full mr-3 group-hover:bg-${color.primary.replace('400', '300')}`}></div>
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}
      
      {/* Indicador central - solo visible en desktop */}
      <div className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${color.primary} border-4 border-gray-900 rounded-full z-10`}></div>
      
      {/* Contenido derecho */}
      {!isLeft && (
        <div className="lg:text-left">
          <Card 
            variant="experience"
            className={`bg-gradient-to-br ${color.gradient} hover:border-gray-600/50`}
          >
            {/* Logos */}
            {techLogoSrc && (
              <img 
                src={techLogoSrc} 
                alt="Tech Logo" 
                className="absolute top-2 right-5 h-20 w-auto" 
              />
            )}
            {logoSrc && (
              <img 
                src={logoSrc} 
                alt={`${company} Logo`} 
                className="h-10 mb-2" 
              />
            )}

            {/* Información del trabajo */}
            <div className="flex flex-col lg:items-start mb-4">
              <h3 className={`text-xl font-bold text-${color.primary} group-hover:text-${color.primary.replace('400', '300')} transition-colors`}>
                {position}
              </h3>
              <p className={`text-${color.secondary} font-medium`}>{company}</p>
              <div className="flex items-center text-gray-400 mt-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{period}</span>
              </div>
            </div>

            {/* Descripción y logros */}
            <div className="text-gray-300 space-y-3">
              <p className="group-hover:text-gray-200 transition-colors">
                {description}
              </p>
              <div className="grid grid-cols-1 gap-2 text-sm">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    <div className={`w-1.5 h-1.5 bg-${color.primary} rounded-full mr-3 group-hover:bg-${color.primary.replace('400', '300')}`}></div>
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Espacio vacío para el otro lado */}
      {isLeft && <div className="hidden lg:block"></div>}
      {!isLeft && <div className="hidden lg:block"></div>}
    </div>
  );
};

export default Timeline;