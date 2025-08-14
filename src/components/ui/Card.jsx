import React from 'react';

const Card = ({ 
  variant = 'default', 
  children, 
  className = '',
  hover = true,
  ...props 
}) => {
  const baseStyles = 'backdrop-blur-sm border border-gray-600/30 rounded-lg transition-all duration-300';
  
  const variants = {
    default: 'bg-gray-700/30 hover:bg-gray-700/50 hover:border-gray-500/50',
    info: 'bg-gray-700/30 hover:bg-gray-700/50 hover:border-gray-500/50 p-4',
    experience: 'p-8 hover:border-gray-600/50 hover:scale-105',
    gradient: 'bg-gradient-to-br backdrop-blur-sm p-6 border border-gray-600/30 hover:border-gray-500/50',
    contact: 'p-6 rounded-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group'
  };

  const hoverClass = hover ? 'group cursor-pointer' : '';
  const cardClass = `${baseStyles} ${variants[variant]} ${hoverClass} ${className}`;

  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
};

export default Card;