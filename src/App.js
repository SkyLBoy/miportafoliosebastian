import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, User, GraduationCap, Code, Github, Linkedin, Menu, X, Award, Calendar } from 'lucide-react';
import './index.css';
import miFoto from './assets/miFoto.png';
import phpLogo from './assets/phpLogo.png';
import reactLogo from './assets/reactLogo.png';
import vinccoLogo from './assets/vinccoLogo.png';
import logoSEC from './assets/logoSEC.png';

// Componente principal del Portfolio
const Portafolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isLoaded, setIsLoaded] = useState(false);

  // Effect para animaciones de carga
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Effect para detectar sección activa en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'experiencia', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full overflow-hidden min-h-screen bg-gray-900 text-gray-100">
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 15s linear infinite;
        }
      `}</style>

      {/* Header/Navegación - Sticky con backdrop blur */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Nombre con animación */}
            <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              &lt;DevPortafolio/&gt;
            </div>
            
            {/* Navegación desktop con hover effects */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'sobre-mi', label: 'Sobre Mí' },
                { id: 'experiencia', label: 'Experiencia' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-all duration-300 hover:text-blue-400 group ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.id ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Botón menú móvil */}
            <button
              className="md:hidden text-gray-300 hover:text-blue-400 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Menú móvil con animación */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50 backdrop-blur rounded-lg mb-4">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'sobre-mi', label: 'Sobre Mí' },
                { id: 'experiencia', label: 'Experiencia' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 rounded transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Sección Hero/Inicio con parallax effect */}
      <section id="inicio" className="relative pt-20 pb-20 min-h-screen flex items-center overflow-hidden">
        {/* Background gradient animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        
        {/* Partículas/dots decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-purple-400/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna izquierda - Información */}
            <div className={`space-y-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="space-y-4">
                <p className="text-blue-400 font-medium tracking-wide uppercase text-sm">
                  Desarrollador & IT Specialist
                </p>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hola, soy
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-gradient">
                    Sebastian Calderón López
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                  Especialista en desarrollo de sistemas y gestión de infraestructura IT. 
                  Transformo ideas en soluciones tecnológicas eficientes.
                </p>
              </div>
              
              {/* Información de contacto con iconos animados */}
              <div className="flex flex-wrap gap-6 text-gray-400">
                <div className="flex items-center group cursor-pointer">
                  <Phone className="h-5 w-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-gray-300 transition-colors">+52 6624964675</span>
                </div>
                <div className="flex items-center group cursor-pointer">
                  <Mail className="h-5 w-5 mr-3 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-gray-300 transition-colors">sebastiancalderonlopez@gmail.com</span>
                </div>
                <div className="flex items-center group cursor-pointer">
                  <MapPin className="h-5 w-5 mr-3 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-gray-300 transition-colors">Hermosillo, Sonora</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('experiencia')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Ver Mi Trabajo
                </button>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 hover:border-gray-500 transform hover:scale-105 transition-all duration-200"
                >
                  Contactar
                </button>
              </div>
            </div>

            {/* Columna derecha - Foto con efectos */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative mx-auto w-80 h-80">
                {/* Anillos decorativos animados */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border border-purple-400/30 animate-spin-reverse-slow"></div>
                
                {/* Contenedor de foto con glassmorphism */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-gray-700/50 overflow-hidden group hover:scale-105 transition-transform duration-500">
                  {/* Placeholder para foto - reemplazar con tu imagen */}
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

      {/* Sección Sobre Mí con cards interactivas */}
      <section id="sobre-mi" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mí</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Información personal en cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <User className="h-6 w-6 mr-3 text-blue-400" />
                Información Personal
              </h3>
              <div className="grid gap-4">
                {[
                  { icon: User, label: 'Nombre', value: 'Sebastian Calderón Lopez', color: 'text-blue-400' },
                  { icon: Phone, label: 'Teléfono', value: '+52 6624964675', color: 'text-green-400' },
                  { icon: Mail, label: 'Email', value: 'sebastiancalderonlopez@gmail.com', color: 'text-purple-400' },
                  { icon: GraduationCap, label: 'Escuela', value: 'Universidad Estatal de Sonora', color: 'text-yellow-400' },
                  { icon: Code, label: 'Carrera', value: 'Ingeniería en Software', color: 'text-red-400' }
                ].map((item, index) => (
                  <div 
                    key={item.label}
                    className="bg-gray-700/30 backdrop-blur-sm p-4 rounded-lg border border-gray-600/30 hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center">
                      <item.icon className={`h-5 w-5 mr-4 ${item.color} group-hover:scale-110 transition-transform`} />
                      <div>
                        <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                        <p className="text-gray-200 group-hover:text-white transition-colors">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Descripción profesional */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="h-6 w-6 mr-3 text-purple-400" />
                Mi Trayectoria
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm p-6 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Mi experiencia profesional se ha centrado en el desarrollo de soluciones 
                    tecnológicas innovadoras y la gestión integral de infraestructura IT. He tenido 
                    la oportunidad de trabajar tanto en el <span className="text-blue-400 font-medium">sector público</span> como 
                    <span className="text-purple-400 font-medium"> privado</span>, desarrollando sistemas que optimizan procesos 
                    y mejoran significativamente la eficiencia operativa.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-blue-600/10 backdrop-blur-sm p-6 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
                  <p className="text-gray-300 leading-relaxed">
                    Mi enfoque está en crear <span className="text-blue-400 font-medium">soluciones tecnológicas</span> que 
                    realmente aporten valor a las organizaciones, combinando desarrollo de software 
                    con administración de sistemas y redes. Siempre busco implementar las mejores 
                    prácticas y tecnologías más actuales para garantizar resultados excepcionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Experiencia con timeline interactivo */}
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
              {/* Experiencia SEC */}
              <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:text-right">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:scale-105">
                    <img src={logoSEC} alt="SEC Logo" className="absolute top-1 left-5 h-20 w-auto" />
                    <div className="flex flex-col lg:items-end mb-4">
                      <img src={phpLogo} alt="PHP Logo" className="h-10 mb-2 self-end" />
                      <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                        Desarrollador de Sistemas
                      </h3>
                      <p className="text-purple-400 font-medium">Secretaría de Educación y Cultura (SEC)</p>
                      <div className="flex items-center text-gray-400 mt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">2023 - 2024</span>
                      </div>
                    </div>

                    <div className="text-gray-300 space-y-3">
                      <p className="group-hover:text-gray-200 transition-colors">
                        Desarrollé e implementé un <span className="text-blue-400 font-medium">sistema de inventario completo</span> para el 
                        Departamento de Informática de la Secretaría de Educación.
                      </p>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        {[
                          'Diseño y desarrollo de sistema de gestión de inventario',
                          'Optimización de procesos de control de activos tecnológicos',
                          'Implementación de interfaces intuitivas para usuarios',
                          'Mejora de la eficiencia en el seguimiento de equipos'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Indicador central */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 border-4 border-gray-900 rounded-full z-10"></div>
                
                <div className="hidden lg:block"></div>
              </div>

              {/* Sistema de Inventario Vincco */}
              <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="hidden lg:block"></div>
                <div className="lg:text-left">
                  <div className="bg-gradient-to-br from-green-500/10 to-teal-600/10 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:scale-105">
                  <img src={reactLogo} alt="React Logo" className="absolute top-2 right-5 h-20 w-auto" />
                    <div className="flex flex-col lg:items-start mb-4">
                      <img src={vinccoLogo} alt="Vincco Logo" className="h-10 mb-2"/>
                      <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                        Sistema de Inventario de Vincco
                      </h3>
                      <p className="text-teal-400 font-medium">Proyecto de Desarrollo Completo</p>
                      <div className="flex items-center text-gray-400 mt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">2025</span>
                      </div>
                    </div>
      
                      <div className="text-gray-300 space-y-3">
                      <p className="group-hover:text-gray-200 transition-colors">
                        Desarrollo integral de un <span className="text-green-400 font-medium">sistema de inventario personalizado</span> para 
                        optimizar la gestión de activos y recursos de la empresa Vincco.
                      </p>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        {[
                          'Análisis de requerimientos y diseño de arquitectura del sistema',
                          'Desarrollo de interfaz web responsiva',
                          'Implementación de base de datos relacional optimizada',
                          'Módulos de control de stock, movimientos y alertas',
                          'Sistema de roles y permisos de usuario'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 group-hover:bg-green-300"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experiencia Vincco */}
              <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:text-right">
                  <div className="bg-gradient-to-br from-purple-500/10 to-blue-600/10 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:scale-105">
                    <div className="flex flex-col lg:items-end mb-4">
                      <img src={vinccoLogo} alt="Vincco Logo" className="h-10 mb-2 self-end" />
                      <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                        Encargado del Área de IT
                      </h3>
                      <p className="text-blue-400 font-medium">Vincco</p>
                      <div className="flex items-center text-gray-400 mt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">2025 - Presente</span>
                      </div>
                    </div>
                    <div className="text-gray-300 space-y-3">
                      <p className="group-hover:text-gray-200 transition-colors">
                        Responsable de la gestión completa de la <span className="text-purple-400 font-medium"> infraestructura tecnológica </span> 
                        de la empresa, incluyendo redes y mantenimiento de equipos.
                      </p>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        {[
                          'Administración y mantenimiento de redes corporativas',
                          'Soporte técnico y mantenimiento preventivo de equipos',
                          'Gestión de infraestructura IT y servidores',
                          'Implementación de políticas de seguridad informática',
                          'Capacitación a usuarios finales'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-300"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Indicador central */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 border-4 border-gray-900 rounded-full z-10"></div>
                
                <div className="hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Sección Contacto minimalista */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conecta <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Conmigo</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Mail, 
                title: 'Email', 
                value: 'sebastiancalderonlopez@gmail.com', 
                color: 'from-blue-500 to-blue-600',
                hoverColor: 'hover:from-blue-600 hover:to-blue-700'
              },
              { 
                icon: Phone, 
                title: 'Teléfono', 
                value: '+52 6624964675', 
                color: 'from-green-500 to-green-600',
                hoverColor: 'hover:from-green-600 hover:to-green-700'
              },
              { 
                icon: MapPin, 
                title: 'Ubicación', 
                value: 'Hermosillo, Sonora, MX', 
                color: 'from-purple-500 to-purple-600',
                hoverColor: 'hover:from-purple-600 hover:to-purple-700'
              }
            ].map((contact, index) => (
              <div 
                key={contact.title}
                className={`bg-gradient-to-br ${contact.color} ${contact.hoverColor} p-6 rounded-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <div className="text-center">
                  <contact.icon className="h-8 w-8 mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                  <p className="text-white/90 group-hover:text-white transition-colors">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Redes sociales */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">También puedes encontrarme en:</p>
            <div className="flex justify-center space-x-6">
              <a
                href= "https://github.com/SkyLBoy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 group"
              >
                <Github className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/sebasti%C3%A1n-calder%C3%B3n-calderon-l%C3%B3pez-69699a2b9/"
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

      {/* Footer elegante */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              &copy; 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-medium">Sebastian</span>. 
              Hecho con ❤️ y React
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portafolio;