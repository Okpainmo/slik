import React from 'react';
import PostCard from './PostCard';

function PostWrapper({ postsData }) {
  console.log(postsData);

  return (
    <section className='min-h-[200px] mt-4 sm:mt-12 lg:mt-20 lg:mb-14'>
      <div className='mx-3 md:mx-0 md:flex-row md:w-full mt-6 mb-16 flex flex-col justify-center flex-wrap gap-x-[20px] xl:gap-x-[40px] gap-y-[40px]'>
        {postsData.map(function (each) {
          return <PostCard key={each.postIndex} dataItems={each} />;
        })}
      </div>
    </section>
  );
}

export default PostWrapper;
