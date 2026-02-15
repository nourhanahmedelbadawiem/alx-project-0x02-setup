import React from 'react';
import Image from 'next/image';
import Pill from './Pill';

const Card: React.FC = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative w-full h-64">
        <Image
          src="/assets/images/house.png"
          alt="House"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-2 mb-3">
          <Pill title="Entire place" />
          <Pill title="2 bedrooms" />
          <Pill title="Pool" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/images/star.png"
              alt="Star"
              width={16}
              height={16}
            />
            <span className="text-sm font-semibold text-gray-800">4.8</span>
          </div>
          <div className="text-lg font-bold text-gray-900">$120/night</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
