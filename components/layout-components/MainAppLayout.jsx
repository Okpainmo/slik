import React from 'react';
import Footer from './Footer';

function MainAppLayout({ children }) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}

export default MainAppLayout;
