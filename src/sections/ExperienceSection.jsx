import React from 'react';
import { experiences } from '../data/experience';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-purple-900/10 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative">
              Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Profesional</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"></div>
            </h2>
          </div>
          <p className="text-gray-300 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
            Mi trayectoria profesional desarrollando soluciones innovadoras y creando experiencias digitales excepcionales.
          </p>
        </div>
        
        <div className="relative">
          {/* Línea de tiempo central mejorada */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 via-purple-500 to-cyan-400 hidden lg:block rounded-full shadow-lg shadow-blue-500/30">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/50 via-blue-500/50 via-purple-500/50 to-cyan-400/50 rounded-full blur-sm"></div>
          </div>
          
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center group">
                {experience.type === 'left' ? (
                  <>
                    {/* Contenido izquierda */}
                    <div className="lg:text-right lg:pr-8">
                      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 p-8">
                        {/* Efecto glassmorphism */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Logo de la empresa - esquina superior derecha */}
                        {experience.logo && (
                          <div className="absolute top-6 left-6">
                            <img 
                              src={experience.logo} 
                              alt={`${experience.company} Logo`}
                              className="h-16 w-auto"
                            />
                          </div>
                        )}
                        
                        <div className="relative z-10 lg:text-right">
                          {/* Logo de tecnología */}
                          {experience.techLogo && (
                            <div className="flex lg:justify-end mb-6">
                              <img 
                                src={experience.techLogo} 
                                alt="Tech Logo"
                                className="h-12 w-auto"
                              />
                            </div>
                          )}
                          
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {experience.position}
                          </h3>
                          <p className="text-cyan-400 font-semibold text-lg mb-4">
                            {experience.company}
                          </p>
                          
                          {/* Fecha y ubicación */}
                          <div className="flex flex-col lg:items-end gap-2 mb-6">
                            <div className="flex items-center text-gray-300 bg-white/5 px-3 py-1 rounded-full text-sm">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{experience.period}</span>
                            </div>
                            {experience.location && (
                              <div className="flex items-center text-gray-300 bg-white/5 px-3 py-1 rounded-full text-sm">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{experience.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-gray-300 space-y-4 lg:text-right relative z-10">
                          <p className="leading-relaxed group-hover:text-white transition-colors text-base">
                            {experience.description}
                          </p>
                          
                          <div className="space-y-3">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Logros principales:</h4>
                            <div className="space-y-2">
                              {experience.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start lg:flex-row-reverse text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
                                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full lg:ml-3 lg:mr-0 mr-3 mt-2 flex-shrink-0"></div>
                                  <span className="leading-relaxed">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Punto central mejorado */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-gray-900 rounded-full z-20 shadow-lg shadow-cyan-500/50">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-75"></div>
                    </div>
                    
                    {/* Espacio vacío */}
                    <div className="hidden lg:block"></div>
                  </>
                ) : (
                  <>
                    {/* Espacio vacío */}
                    <div className="hidden lg:block"></div>
                    
                    {/* Punto central mejorado */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 border-4 border-gray-900 rounded-full z-20 shadow-lg shadow-purple-500/50">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse opacity-75"></div>
                    </div>
                    
                    {/* Contenido derecha */}
                    <div className="lg:text-left lg:pl-8">
                      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 p-8">
                        {/* Efecto glassmorphism */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Logo de tecnología - esquina superior derecha */}
                        {experience.techLogo && (
                          <div className="absolute top-6 right-6 p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                            <img 
                              src={experience.techLogo} 
                              alt="Tech Logo"
                              className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                        )}
                        
                        <div className="relative z-10">
                          {/* Logo de la empresa */}
                          {experience.logo && (
                            <div className="flex mb-6">
                              <img 
                                src={experience.logo} 
                                alt={`${experience.company} Logo`}
                                className="h-12 w-auto"
                              />
                            </div>
                          )}
                          
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {experience.position}
                          </h3>
                          <p className="text-purple-400 font-semibold text-lg mb-4">
                            {experience.company}
                          </p>
                          
                          {/* Fecha y ubicación */}
                          <div className="flex flex-col items-start gap-2 mb-6">
                            <div className="flex items-center text-gray-300 bg-white/5 px-3 py-1 rounded-full text-sm">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{experience.period}</span>
                            </div>
                            {experience.location && (
                              <div className="flex items-center text-gray-300 bg-white/5 px-3 py-1 rounded-full text-sm">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{experience.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-gray-300 space-y-4 relative z-10">
                          <p className="leading-relaxed group-hover:text-white transition-colors text-base">
                            {experience.description}
                          </p>
                          
                          <div className="space-y-3">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Logros principales:</h4>
                            <div className="space-y-2">
                              {experience.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
                                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                  <span className="leading-relaxed">{achievement}</span>
                                </div>
                              ))}
                            </div>
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