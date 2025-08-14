// src/data/experience.js
// Importar todos los logos
import logoSEC from '../assets/logos/logoSEC.png';
import phpLogo from '../assets/logos/phpLogo.png';
import reactLogo from '../assets/logos/reactLogo.png';
import vinccoLogo from '../assets/logos/vinccoLogo.png';

export const experiences = [
    {
      id: 'sec',
      company: 'Secretaría de Educación y Cultura (SEC)',
      position: 'Desarrollador de Sistemas',
      period: '2023 - 2024',
      type: 'left', // Para el timeline (left/right)
      logo: logoSEC, // Ahora es la imagen importada
      techLogo: phpLogo, // Ahora es la imagen importada
      color: {
        primary: 'blue-400',
        secondary: 'purple-400',
        gradient: 'from-blue-500/10 to-purple-600/10'
      },
      description: 'Desarrollé e implementé un sistema de inventario completo para el Departamento de Informática de la Secretaría de Educación.',
      achievements: [
        'Diseño y desarrollo de sistema de gestión de inventario',
        'Optimización de procesos de control de activos tecnológicos',
        'Implementación de interfaces intuitivas para usuarios',
        'Mejora de la eficiencia en el seguimiento de equipos'
      ]
    },
    {
      id: 'vincco-project',
      company: 'Sistema de Inventario de Vincco',
      position: 'Proyecto de Desarrollo Completo',
      period: '2025',
      type: 'right',
      logo: vinccoLogo, // Ahora es la imagen importada
      techLogo: reactLogo, // Ahora es la imagen importada
      color: {
        primary: 'blue-400',
        secondary: 'teal-400',
        gradient: 'from-gray-500/10 to-teal-600/10'
      },
      description: 'Desarrollo integral de un sistema de inventario personalizado para optimizar la gestión de activos y recursos de la empresa Vincco.',
      achievements: [
        'Análisis de requerimientos y diseño de arquitectura del sistema',
        'Desarrollo de interfaz web responsiva',
        'Implementación de base de datos relacional optimizada',
        'Módulos de control de stock, movimientos y alertas',
        'Sistema de roles y permisos de usuario'
      ]
    },
    {
      id: 'vincco-it',
      company: 'Vincco',
      position: 'Encargado del Área de IT',
      period: '2025 - Presente',
      type: 'left',
      logo: vinccoLogo, // Ahora es la imagen importada
      techLogo: null, // No tech logo for this one
      color: {
        primary: 'blue-400',
        secondary: 'blue-400',
        gradient: 'from-red-500/10 to-blue-600/10'
      },
      description: 'Responsable de la gestión completa de la infraestructura tecnológica de la empresa, incluyendo redes y mantenimiento de equipos.',
      achievements: [
        'Administración y mantenimiento de redes corporativas',
        'Soporte técnico y mantenimiento preventivo de equipos',
        'Gestión de infraestructura IT y servidores',
        'Implementación de políticas de seguridad informática'
      ]
    }
  ];
  
  // Información personal adicional para la sección "Sobre Mí"
  export const personalDetails = [
    {
      icon: 'User',
      label: 'Nombre',
      value: 'Sebastian Calderón Lopez',
      color: 'text-blue-400'
    },
    {
      icon: 'Phone',
      label: 'Teléfono',
      value: '+52 6624964675',
      color: 'text-green-400'
    },
    {
      icon: 'Mail',
      label: 'Email',
      value: 'sebastiancalderonlopez@gmail.com',
      color: 'text-purple-400'
    },
    {
      icon: 'GraduationCap',
      label: 'Escuela',
      value: 'Universidad Estatal de Sonora',
      color: 'text-yellow-400'
    },
    {
      icon: 'Code',
      label: 'Carrera',
      value: 'Ingeniería en Software',
      color: 'text-red-400'
    }
  ];