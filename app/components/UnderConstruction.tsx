import React from 'react';

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
      <svg 
        className="w-16 h-16 mb-4 text-[#FF375C]" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1.5} 
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
        />
      </svg>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Sorry, I am still working on it
      </h2>
      <p className="text-gray-600 text-center max-w-md">
        Give me some time, I will solve it jsjsjs.
        Please check back soon for updates.
      </p>
    </div>
  );
} 