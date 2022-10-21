import React from 'react';
import NavPageLayout from '../../components/layout-components/NavPageLayout';
import AboutContent from '../../components/about-page-components/AboutContent';

function index() {
  return (
    <NavPageLayout>
      <AboutContent />
    </NavPageLayout>
  );
}

export default index;
