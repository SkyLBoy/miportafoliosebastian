export const personalInfo = {
  // Información básica
  name: "Sebastian Calderón López",
  title: "Desarrollador & IT Specialist",
  subtitle: "Especialista en desarrollo de sistemas y gestión de infraestructura IT. Transformo ideas en soluciones tecnológicas eficientes.",
  
  // Contacto
  phone: "+52 6624964675",
  email: "sebastiancalderonlopez@gmail.com",
  location: "Hermosillo, Sonora",
  
  // Educación
  school: "Universidad Estatal de Sonora",
  career: "Ingeniería en Software",
  
  // Información del CV
  cv: {
    fileName: "CV_Sebastian_Calderon_Desarrollador.pdf",
    lastUpdated: "2025", // Puedes actualizar esta fecha cuando actualices tu CV
  },
  
  // Redes sociales
  social: {
    github: "https://github.com/SkyLBoy",
    linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-calder%C3%B3n-calderon-l%C3%B3pez-69699a2b9/"
  },
  
  // Descripción profesional (puedes editarla fácilmente)
  about: {
    intro: "Mi experiencia profesional se ha centrado en el desarrollo de soluciones tecnológicas innovadoras y la gestión integral de infraestructura IT. He tenido la oportunidad de trabajar tanto en el sector público como privado, desarrollando sistemas que optimizan procesos y mejoran significativamente la eficiencia operativa.",
    
    focus: "Mi enfoque está en crear soluciones tecnológicas que realmente aporten valor a las organizaciones, combinando desarrollo de software con administración de sistemas y redes. Siempre busco implementar las mejores prácticas y tecnologías más actuales para garantizar resultados excepcionales."
  }
};

// Información de contacto para las tarjetas
export const contactInfo = [
  {
    type: 'email',
    title: 'Email',
    value: personalInfo.email,
    icon: 'Mail',
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'hover:from-blue-600 hover:to-blue-700'
  },
  {
    type: 'phone',
    title: 'Teléfono',
    value: personalInfo.phone,
    icon: 'Phone',
    color: 'from-green-500 to-green-600',
    hoverColor: 'hover:from-green-600 hover:to-green-700'
  },
  {
    type: 'location',
    title: 'Ubicación',
    value: personalInfo.location + ', MX',
    icon: 'MapPin',
    color: 'from-purple-500 to-purple-600',
    hoverColor: 'hover:from-purple-600 hover:to-purple-700'
  }
];