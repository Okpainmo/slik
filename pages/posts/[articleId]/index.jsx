import React from 'react';
import PostIntro from '../../../components/post-page-components/PostIntro';
import PostText from '../../../components/post-page-components/PostText';
import NavPageLayout from '../../../components/layout-components/NavPageLayout';

function ArticlePostPage({ data, params }) {
  const slikBlogData = data.items.filter((each) => {
    return each.fields.projectId === 'slik';
  });

  const postCardsData = slikBlogData.map((each) => {
    return each.fields;
  });

  const currentPost = postCardsData.filter(
    (currentPost) => currentPost.slug === params.articleId
  );

  return (
    <NavPageLayout>
      <div className='w-full sm:w-4/5 lg:w-3/5 mx-auto sm:pt-12 mb-28'>
        <PostIntro currentPost={currentPost} data={data} />
        <PostText currentPost={currentPost} />
      </div>
    </NavPageLayout>
  );
}

export default ArticlePostPage;

export async function getStaticPaths() {
  const spaceId = process.env.MY_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.MY_CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.MY_CONTENTFUL_ENVIRONMENT;

  const response = await fetch(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}`
  );
  const data = await response.json();

  const slikBlogData = data.items.filter((each) => {
    return each.fields.projectId === 'slik';
  });

  const postCardsData = slikBlogData.map((each) => {
    return each.fields;
  });

  const paths = postCardsData.map((currentPost) => {
    return {
      params: { articleId: `${currentPost.slug}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const spaceId = process.env.MY_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.MY_CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.MY_CONTENTFUL_ENVIRONMENT;

  const { params } = context;
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
      params,
    },
  };
}
