import React from 'react';
import Link from 'next/link';

function Navlinks() {
  return (
    <ul className='hidden lg:flex gap-12 text-[12px] ml-16 items-center font-bold'>
      <li
        className='hover:underline'
        style={{ transition: 'letter-spacing ease .5s' }}
      >
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li
        className='hover:underline'
        style={{ transition: 'letter-spacing ease .5s' }}
      >
        <Link href='/reactjs-tutorials'>
          <a>ReactJs</a>
        </Link>
      </li>
      <li
        className='hover:underline'
        style={{ transition: 'letter-spacing ease .5s' }}
      >
        <Link href='/nextjs-tutorials'>
          <a>NextJs</a>
        </Link>
      </li>
      <li
        className='hover:underline'
        style={{ transition: 'letter-spacing ease .5s' }}
      >
        <Link href='/opensource-hacktoberfest'>
          <a>Opensource</a>
        </Link>
      </li>
      <li
        className='hover:underline'
        style={{ transition: 'letter-spacing ease .5s' }}
      >
        <Link href='/contentful-tutorials'>
          <a>Contentful</a>
        </Link>
      </li>
      <li
        className='hover:underline'
        style={{ transition: 'letter-spacing ease .5s' }}
      >
        <Link href='/about-reactify'>
          <a>About</a>
        </Link>
      </li>
    </ul>
  );
}

export default Navlinks;
