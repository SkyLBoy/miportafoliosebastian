// src/hooks/useScrollSpy.jsx
import { useState, useEffect, useCallback } from 'react';

/**
 * Hook para desplazamiento suave a un id de sección
 */
export const useScrollTo = () => {
  return useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
};

/**
 * Hook para resaltar la sección activa al hacer scroll
 * @param {string[]} sectionIds - Lista de ids de las secciones a observar
 * @param {number} offset - Desplazamiento para ajustar el punto de activación
 */
export const useScrollSpy = (sectionIds = [], offset = 0) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentId = '';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
            currentId = id;
            break;
          }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Ejecutar al inicio

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
};
