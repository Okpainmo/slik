import React from 'react';
import Link from 'next/link';
import HeaderPageLayout from '../components/layout-components/HeaderPageLayout';

function Index() {
  const isHome = true;

  return (
    <HeaderPageLayout isHome={isHome}>
      <main className='flex flex-col px-3 sm:px-16 lg:px-20 mt-10 sm:mt-20 mb-40 gap-8 lg:grid grid-cols-2 lg:w-10/12 lg:mx-auto'>
        <Link href='/reactjs-tutorials'>
          <a>
            <div className='rounded-lg text-center background-with-overlay flex items-center justify-center w-full min-h-[200px] px-4 font-bold text--colors_white montserrat text-2xl'>
              Learn ReactJs
            </div>
          </a>
        </Link>
        <Link href='/nextjs-tutorials'>
          <a>
            <div className='rounded-lg text-center background-with-overlay flex items-center justify-center w-full min-h-[200px] px-4 font-bold text--colors_white montserrat text-2xl'>
              Learn NextJs
            </div>
          </a>
        </Link>
        <Link href='/opensource-hacktoberfest'>
          <a>
            <div className='rounded-lg text-center background-with-overlay flex items-center justify-center w-full min-h-[200px] px-4 font-bold text--colors_white montserrat text-2xl'>
              Discover Opensource
            </div>
          </a>
        </Link>
        <Link href='/contentful-tutorials'>
          <a>
            <div className='rounded-lg text-center background-with-overlay flex items-center justify-center w-full min-h-[200px] px-4 font-bold text--colors_white montserrat text-2xl'>
              Learn CMS with Contentful
            </div>
          </a>
        </Link>
      </main>
    </HeaderPageLayout>
  );
}

export default Index;
