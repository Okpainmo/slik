import React from 'react';
import Hero from '../components/Home-page-components/Hero';
import PostWrapper from '../components/Home-page-components/PostWrapper';
import MainAppLayout from '../components/layout-components/MainAppLayout';
import postsData from '../assets/data/post-data';

function Index() {
  return (
    <MainAppLayout>
      <Hero />
      <PostWrapper postsData={postsData} />
    </MainAppLayout>
  );
}

export default Index;
