import React from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy, useScrollTo } from '../../hooks/useScrollSpy';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { useAnimations } from '../../hooks/useAnimations';

const Header = () => {
  const sections = ['inicio', 'sobre-mi', 'experiencia', 'contacto'];
  const activeSection = useScrollSpy(sections);
  const scrollToSection = useScrollTo();
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();
  const isLoaded = useAnimations();

  // Si quieres cambiar las secciones del menú, edita esto:
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    closeMenu();
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            &lt;DevPortafolio/&gt;
          </div>
          
          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
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

          {/* Botón Menú Móvil */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors p-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menú Móvil */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50 backdrop-blur rounded-lg mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 rounded transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;