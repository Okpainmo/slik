import React from 'react';
import MainAppLayout from '../../../components/layout-components/MainAppLayout';
import PostIntro from '../../../components/post-page-components/PostIntro';
import PostNav from '../../../components/post-page-components/PostNav';
import PostText from '../../../components/post-page-components/PostText';

function ArticlePostPage() {
  return (
    <>
      <PostNav />
      <MainAppLayout>
        <div className='w-full sm:w-4/5 lg:w-3/5 mx-auto sm:pt-12'>
          <PostIntro />
          <PostText />
        </div>
      </MainAppLayout>
    </>
  );
}

export default ArticlePostPage;
