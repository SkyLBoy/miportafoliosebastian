import React from 'react';
import { experiences } from '../data/experience';
import { Calendar } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Profesional</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Línea de tiempo central */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 hidden lg:block"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                {experience.type === 'left' ? (
                  <>
                    {/* Contenido a la derecha (visualmente izquierda) */}
                    <div className="lg:text-right">
                      <div className={`bg-gradient-to-br ${experience.color.gradient} backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:scale-105 relative`}>
                        {/* Logo de la empresa - posición absoluta */}
                        {experience.type === 'left' && (
                          <img 
                            src={experience.logo} 
                            alt={`${experience.company} Logo`}
                            className="absolute top-1 left-5 h-20 w-auto"
                          />
                        )}
                        
                        <div className="flex flex-col lg:items-end mb-4">
                          {/* Logo de tecnología */}
                          {experience.techLogo && (
                            <img 
                              src={experience.techLogo} 
                              alt="Tech Logo"
                              className="h-10 mb-2 self-end"
                            />
                          )}
                          
                          <h3 className={`text-xl font-bold text-${experience.color.primary} group-hover:text-${experience.color.primary.replace('400', '300')} transition-colors`}>
                            {experience.position}
                          </h3>
                          <p className={`text-${experience.color.secondary} font-medium`}>
                            {experience.company}
                          </p>
                          
                          {/* Fecha */}
                          <div className="flex items-center text-gray-400 mt-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                        </div>
                        
                        <div className="text-gray-300 space-y-3">
                          <p className="group-hover:text-gray-200 transition-colors">
                            {experience.description.split(' ').map((word, i) => {
                              if (word.includes('inventario') || word.includes('completo') || word.includes('personalizado')) {
                                return <span key={i} className={`text-${experience.color.primary} font-medium`}>{word} </span>
                              }
                              return word + ' ';
                            })}
                          </p>
                          
                          <div className="grid grid-cols-1 gap-2 text-sm">
                            {experience.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                                <div className={`w-1.5 h-1.5 bg-${experience.color.primary} rounded-full mr-3 group-hover:bg-${experience.color.primary.replace('400', '300')}`}></div>
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Punto central en la línea de tiempo */}
                    <div className={` lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${experience.color.primary.replace('400', '500')} border-4 border-gray-900 rounded-full z-10`}></div>
                    
                    {/* Espacio vacío */}
                    <div className="hidden lg:block"></div>
                  </>
                ) : (
                  <>
                    {/* Espacio vacío */}
                    <div className="hidden lg:block"></div>
                    
                    {/* Punto central en la línea de tiempo */}
                    <div className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${experience.color.primary.replace('400', '500')} border-4 border-gray-900 rounded-full z-10`}></div>
                    
                    {/* Contenido a la izquierda (visualmente derecha) */}
                    <div className="lg:text-left">
                      <div className={`bg-gradient-to-br ${experience.color.gradient} backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:scale-105 relative`}>
                        {/* Logo de la empresa - posición absoluta */}
                        {experience.type === 'right' && (
                          <img 
                            src={experience.techLogo} 
                            alt="Tech Logo"
                            className="absolute top-2 right-5 h-20 w-auto"
                          />
                        )}
                        
                        <div className="flex flex-col lg:items-start mb-4">
                          {/* Logo de la empresa */}
                          <img 
                            src={experience.logo} 
                            alt={`${experience.company} Logo`}
                            className="h-10 mb-2"
                          />
                          
                          <h3 className={`text-xl font-bold text-${experience.color.primary} group-hover:text-${experience.color.primary.replace('400', '300')} transition-colors`}>
                            {experience.position}
                          </h3>
                          <p className={`text-${experience.color.secondary} font-medium`}>
                            {experience.company}
                          </p>
                          
                          {/* Fecha */}
                          <div className="flex items-center text-gray-400 mt-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                        </div>
                        
                        <div className="text-gray-300 space-y-3">
                          <p className="group-hover:text-gray-200 transition-colors">
                            {experience.description.split(' ').map((word, i) => {
                              if (word.includes('inventario') || word.includes('completo') || word.includes('personalizado')) {
                                return <span key={i} className={`text-${experience.color.primary} font-medium`}>{word} </span>
                              }
                              return word + ' ';
                            })}
                          </p>
                          
                          <div className="grid grid-cols-1 gap-2 text-sm">
                            {experience.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                                <div className={`w-1.5 h-1.5 bg-${experience.color.primary} rounded-full mr-3 group-hover:bg-${experience.color.primary.replace('400', '300')}`}></div>
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;