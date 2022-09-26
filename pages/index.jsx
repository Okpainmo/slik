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
  const spaceId = process.env.MY_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.MY_CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.MY_CONTENTFUL_ENVIRONMENT;

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}&content_type=slikBlogTutorialProject`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
