import React from 'react';

const MobileNav = () => {
  return (
    <div className='fixed bottom-0 z-50 w-full px-1 mb-2'>
      <div className='bg-gray-100 shadow-lg py-5 rounded border-gray-300 border'>
        <ul className='flex justify-between align-center w-full px-4'>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Email</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
