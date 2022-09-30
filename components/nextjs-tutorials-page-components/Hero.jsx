import React from 'react';
import Navlinks from '../../components/layout-components/Navlinks';
import Link from 'next/link';

function Hero() {
  return (
    <section className='h-[250px] bg--primary w-full flex flex-col justify-between pt-6 sm:pt-12 px-4 sm:px-16 lg:px-28'>
      <nav className='flex'>
        <Link href='/'>
          <a className='montserrat italic text-4xl font-bold'>Slik</a>
        </Link>
        <Navlinks />
      </nav>

      <div className='text-3xl md:text-4xl pb-6 sm:pb-12 font-bold montserrat'>
        Category: NextJs tutorials.
      </div>
    </section>
  );
}

export default Hero;
