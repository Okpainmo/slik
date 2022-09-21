import React from 'react';
import MainAppLayout from '../../../components/layout-components/MainAppLayout';
import PostIntro from '../../../components/post-page-components/PostIntro';
import PostNav from '../../../components/post-page-components/PostNav';
import PostText from '../../../components/post-page-components/PostText';

function ArticlePostPage({ data, params }) {
  // console.log(data);

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
    <>
      <PostNav />
      <MainAppLayout>
        <div className='w-full sm:w-4/5 lg:w-3/5 mx-auto sm:pt-12'>
          <PostIntro currentPost={currentPost} data={data} />
          <PostText currentPost={currentPost} />
        </div>
      </MainAppLayout>
    </>
  );
}

export default ArticlePostPage;

export async function getStaticPaths() {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/9ejtai3vyo33/environments/master/entries?access_token=x8tHSOxCVVi0YvomIMiiREiyptYCqCe43fneRzNE4lM`
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
  const { params } = context;
  const url = process.env.MY_CONTENTFUL_SPACE_API;
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
      params,
    },
  };
}
