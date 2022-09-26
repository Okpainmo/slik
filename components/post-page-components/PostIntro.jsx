import React from 'react';
import Image from 'next/image';

function PostIntro({ currentPost, data }) {
  const { postTitle, postSubtitle, authorName, postIndex } = currentPost[0];

  const slikMediaData = data.includes.Asset.filter((each) => {
    return each.fields.title === 'slik-blog-project-asset';
  });

  const postImage = slikMediaData.filter((each) => {
    return each.fields.file.fileName.slice(0, 1) == postIndex;
  });

  // const postImage = data.includes.Asset.filter((each) => {
  //   return each.fields.file.fileName.slice(0, 1) == postIndex;
  // });

  return (
    <section className='intro-post-details'>
      <div className='flex flex-col p-[12px] xsm:px-[20px] sm:text-center'>
        <div className='title font-bold text-2xl sm:text-4xl lg:text-5xl montserrat lg:leading-[50px]'>
          {postTitle}
        </div>
        <span className='text--colors_secondary title-follow-up pt-2 sm:pt-4 text-lg xsm:text-xl lg:text-2xl block capitalize'>
          {postSubtitle}
        </span>
      </div>
      <div>
        <div className='lead-post-banner mt-2 sm:mt-4'>
          <Image
            src={`https:${postImage[0].fields.file.url}`}
            width={postImage[0].fields.file.details.image.width}
            height={1200}
            priority
          />
        </div>
        <div className='author-section mt-4 sm:mt-6 w-full px-[12px] sm:p-0 mx-auto'>
          <div className='font-bold montserrat mb-1 text-[14px]'>
            <span>Article by </span>
            <span className='text--colors_secondary'>{authorName}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostIntro;
