import React from 'react';

const TrainerCard = ({ image, name, role, rating }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full  object-contain"
      />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <div className="flex items-center mt-2 justify-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                index < rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.6 4.9h5.052c.957 0 1.357 1.23.588 1.81l-4.08 3.032 1.54 4.814c.298.932-.755 1.688-1.54 1.116L10 13.77l-4.11 3.03c-.784.573-1.838-.184-1.54-1.116l1.54-4.814L1.812 9.637c-.77-.58-.37-1.81.588-1.81h5.051l1.6-4.9z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
