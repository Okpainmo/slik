import React from 'react';
import PostWrapper from '../../components/PostWrapper';
import HeaderPageLayout from '../../components/layout-components/HeaderPageLayout';

function Index({ data }) {
  return (
    <HeaderPageLayout category='Opensource/Hacktoberfest'>
      <PostWrapper data={data} />
    </HeaderPageLayout>
  );
}

export default Index;

export async function getStaticProps() {
  const spaceId = process.env.MY_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.MY_CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.MY_CONTENTFUL_ENVIRONMENT;

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}&content_type=slikOpensourcePostsOpensourceData`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
