import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, size, rounded }) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200 ${sizeClasses[size]} ${rounded}`}
    >
      {title}
    </button>
  );
};

export default Button;
