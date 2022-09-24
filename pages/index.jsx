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
  const url =
    'https://cdn.contentful.com/spaces/9ejtai3vyo33/environments/master/entries?access_token=x8tHSOxCVVi0YvomIMiiREiyptYCqCe43fneRzNE4lM&content_type=slikBlogTutorialProject';
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
