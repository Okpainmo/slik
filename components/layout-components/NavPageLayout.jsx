import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import MobileSideBar from './MobileSideBar';

function NavPageLayout({ children }) {
  const [closeMobileNav, setCloseMobileNav] = useState(true);

  function hideMobileNav() {
    setCloseMobileNav(true);
  }

  function showMobileNav() {
    setCloseMobileNav(false);
  }

  return (
    <main>
      <MobileSideBar
        hideMobileNav={hideMobileNav}
        closeMobileNav={closeMobileNav}
      />
      <div className='py-3 px-3 sm:px-16 lg:px-20 bg--primary mb-2'>
        <Navbar showMobileNav={showMobileNav} />
      </div>
      {children}
      <Footer />
    </main>
  );
}

export default NavPageLayout;
