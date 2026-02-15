import React from 'react';
import { PillProps } from '@/interfaces';

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
      {title}
    </span>
  );
};

export default Pill;
