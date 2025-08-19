import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useScrollTo } from '../hooks/useScrollSpy';
import { useAnimations } from '../hooks/useAnimations';
import Button from '../components/ui/Button';
import DownloadCV from '../components/ui/DownloadCV';
import miFoto from '../assets/images/miFoto.png';

const HeroSection = () => {
  const scrollToSection = useScrollTo();
  const isLoaded = useAnimations();
  
  console.log("personalInfo", personalInfo);

  return (
    <section id="inicio" className="relative pt-20 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Background gradient animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      
      {/* Partículas decorativas */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-purple-400/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Información principal */}
          <div className={`space-y-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-4">
              <p className="text-blue-400 font-medium tracking-wide uppercase text-sm">
                {personalInfo.title}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold">
                Hola, soy
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-gradient">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                {personalInfo.subtitle}
              </p>
            </div>
            
            {/* Información de contacto */}
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center group cursor-pointer">
                <Phone className="h-5 w-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-gray-300 transition-colors">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center group cursor-pointer">
                <Mail className="h-5 w-5 mr-3 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-gray-300 transition-colors">{personalInfo.email}</span>
              </div>
              <div className="flex items-center group cursor-pointer">
                <MapPin className="h-5 w-5 mr-3 text-green-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-gray-300 transition-colors">{personalInfo.location}</span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="primary"
                onClick={() => scrollToSection('experiencia')}
              >
                Ver Mi Trabajo
              </Button>
              <Button 
                variant="secondary"
                onClick={() => scrollToSection('contacto')}
              >
                Contactar
              </Button>
              
              {/* Botón de descarga de CV */}
              <DownloadCV variant="outline" />
            </div>
          </div>

          {/* Foto con efectos */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative mx-auto w-80 h-80">
              {/* Anillos decorativos animados */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-purple-400/30 animate-spin-reverse-slow"></div>
              
              {/* Contenedor de foto */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-gray-700/50 overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg border-4 border-blue-500/30">
                  <img 
                    src={miFoto} 
                    alt="Foto de perfil" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay con efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Elementos flotantes decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;