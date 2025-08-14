import React from 'react';

const Button = ({ 
  variant = 'primary', 
  children, 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 font-medium rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700',
    secondary: 'border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500',
    contact: 'bg-gradient-to-br text-white p-6 rounded-lg cursor-pointer group'
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;