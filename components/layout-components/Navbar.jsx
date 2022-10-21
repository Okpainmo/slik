import React from 'react';
import Link from 'next/link';
import Navlinks from './Navlinks';

function Navbar({ showMobileNav }) {
  return (
    <nav className='font-bold montserrat text-2xl lg:text-3xl md:text-3xl flex justify-between w-full'>
      <Link href='/'>
        <a className='italic'>Reactify</a>
      </Link>
      <Navlinks />
      <button
        onClick={showMobileNav}
        type='button'
        className='menu-button rounded-full w-[35px] 
          h-[35px] p-[7px] lg:w-[40px] lg:h-[40px] border border--primary lg:hidden ml-auto'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          className='bi bi-three-dots-vertical w-[20px] h-[20px] 
            lg:h-[25px] lg:w-[25px]'
          viewBox='0 0 16 16'
        >
          <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
