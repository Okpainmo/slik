import React from 'react';
import Link from 'next/link';

function PostNav() {
  return (
    <nav className='py-3 px-3 font-bold sm:px-16 lg:px-28 bg--primary montserrat italic text-3xl'>
      <Link href='/'>
        <a>Slik</a>
      </Link>
    </nav>
  );
}

export default PostNav;
