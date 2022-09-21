import React from 'react';
import Hero from '../components/Home-page-components/Hero';
import PostWrapper from '../components/Home-page-components/PostWrapper';
import MainAppLayout from '../components/layout-components/MainAppLayout';
// import postCardsData from '../assets/data/post-data';

function Index({ data }) {
  return (
    <MainAppLayout>
      <Hero />
      <PostWrapper data={data} />
    </MainAppLayout>
  );
}

export default Index;

export async function getStaticProps() {
  const url = process.env.SLIK_BLOG_PROJECT_API;
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
