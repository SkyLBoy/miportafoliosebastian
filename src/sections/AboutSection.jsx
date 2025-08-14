// src/sections/AboutSection.jsx
// Sección "Sobre Mí"
// Para cambiar tu información, edita src/data/personal.js y src/data/experience.js

import React from 'react';
import { User, Award } from 'lucide-react';
import * as Icons from 'lucide-react';
import { personalInfo } from '../data/personal';
import { personalDetails } from '../data/experience';
import Card from '../components/ui/Card';

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Información personal */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <User className="h-6 w-6 mr-3 text-blue-400" />
              Información Personal
            </h3>
            <div className="grid gap-4">
              {personalDetails.map((item, index) => {
                const IconComponent = Icons[item.icon];
                return (
                  <Card key={item.label} variant="info">
                    <div className="flex items-center">
                      <IconComponent className={`h-5 w-5 mr-4 ${item.color} group-hover:scale-110 transition-transform`} />
                      <div>
                        <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                        <p className="text-gray-200 group-hover:text-white transition-colors">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* Descripción profesional */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3 text-purple-400" />
              Mi Trayectoria
            </h3>
            <div className="space-y-4">
              <Card 
                variant="gradient"
                className="from-blue-500/10 to-purple-600/10"
              >
                <p className="text-gray-300 leading-relaxed mb-4">
                  {personalInfo.about.intro.split('sector público').map((part, index) => {
                    if (index === 0) return part;
                    return (
                      <React.Fragment key={index}>
                        <span className="text-blue-400 font-medium">sector público</span>
                        {part.split(' privado').map((subpart, subindex) => {
                          if (subindex === 0) return subpart;
                          return (
                            <React.Fragment key={subindex}>
                              <span className="text-purple-400 font-medium"> privado</span>
                              {subpart}
                            </React.Fragment>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </p>
              </Card>
              
              <Card 
                variant="gradient"
                className="from-purple-500/10 to-blue-600/10"
              >
                <p className="text-gray-300 leading-relaxed">
                  {personalInfo.about.focus.split('soluciones tecnológicas').map((part, index) => {
                    if (index === 0) return part;
                    return (
                      <React.Fragment key={index}>
                        <span className="text-blue-400 font-medium">soluciones tecnológicas</span>
                        {part}
                      </React.Fragment>
                    );
                  })}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;