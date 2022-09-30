import React from 'react';
import Link from 'next/link';

function Navlinks() {
  return (
    <ul className='hidden md:flex gap-12 text-[16px] ml-16 items-center font-bold'>
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
        <Link href='/opensource-hacktoberfest'>
          <a>Hactoberfest</a>
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
        <Link href='/nextjs-tutorials'>
          <a>NextJs</a>
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
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
    </ul>
  );
}

export default Navlinks;
