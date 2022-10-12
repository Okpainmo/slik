import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import MobileSideBar from './MobileSideBar';

function HeaderPageLayout({ children, category, isHome }) {
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
      <Header
        showMobileNav={showMobileNav}
        category={category}
        isHome={isHome}
      />
      {children}
      <Footer />
    </main>
  );
}

export default HeaderPageLayout;
