import React from 'react';
import PostCard from './PostCard';

function PostWrapper({ data }) {
  // const slikBlogData = data.items.filter((each) => {
  //   return each.fields.projectId === 'slik';
  // });
  return (
    <section className='min-h-[200px] sm:w-10/12 sm:mx-auto md:w-full mt-4 sm:mt-12 lg:mt-20 lg:mb-14'>
      <div className='mx-3 md:mx-0 md:flex-row mt-6 mb-16 flex flex-col justify-center flex-wrap gap-x-[20px] xl:gap-x-[40px] gap-y-[40px]'>
        {data.items.map(function (each) {
          return (
            <PostCard key={each.sys.id} postCardsData={each} data={data} />
          );
        })}
      </div>
    </section>
  );
}

export default PostWrapper;
