import React from 'react';
import * as Icons from 'lucide-react';

const ContactCard = ({ contact }) => {
  const IconComponent = Icons[contact.icon];

  return (
    <div 
      className={`bg-gradient-to-br ${contact.color} ${contact.hoverColor} p-6 rounded-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group`}
    >
      <div className="text-center">
        <IconComponent className="h-8 w-8 mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
        <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
        <p className="text-white/90 group-hover:text-white transition-colors">{contact.value}</p>
      </div>
    </div>
  );
};

export default ContactCard;