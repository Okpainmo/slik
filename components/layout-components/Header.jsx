import React from 'react';
import Navbar from './Navbar';

function Header({ showMobileNav, category, isHome }) {
  return (
    <header className='h-[200px] md:h-[250px] bg--primary w-full flex flex-col justify-between pt-4 sm:pt-12 sm:px-16 lg:px-20'>
      <div className='flex px-3 py-3'>
        <Navbar showMobileNav={showMobileNav} />
      </div>

      <div className='text-[16px] sm:text-2xl md:text-3xl pb-6 sm:pb-12 font-bold montserrat px-3'>
        {isHome
          ? 'An opensource project for learning NextJs/ReactJs and Contentful CMS'
          : `Category: ${category}`}
        .
      </div>
    </header>
  );
}

export default Header;
