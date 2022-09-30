import React from 'react';
import AboutContent from '../../components/about-page-components/AboutContent';
import Footer from '../../components/layout-components/Footer';
import Navbar from '../../components/layout-components/Navbar';

function AboutPage() {
  return (
    <main className='w-full'>
      <Navbar />
      <div className='px-3 w-full sm:w-10/12 sm:mx-auto lg:w-3/5 md:mt-10'>
        <h1 className='text-center text-3xl md:text-4xl mb-4 font-bold'>
          About Slik
        </h1>
        <AboutContent />
          </div>
          <Footer/>
    </main>
  );
}

export default AboutPage;
