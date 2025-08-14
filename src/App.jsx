import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

// Importar estilos
import './styles/animations.css';
import './index.css';

const App = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default App;