import React from 'react';
import Image from 'next/image';
import postBanner from '../../assets/images/1.jpg';

function PostIntro() {
  return (
    <section className='intro-post-details'>
      <div className='flex flex-col p-[12px] xsm:px-[20px] sm:text-center'>
        <div className='title font-bold text-2xl sm:text-4xl lg:text-5xl montserrat'>
          Article title
        </div>
        <span className='text--colors_secondary title-follow-up sm:pt-4 text-lg xsm:text-xl lg:text-2xl block capitalize'>
          just a little sub title
        </span>
      </div>
      <div>
        <div className='lead-post-banner mt-2 sm:mt-4'>
          <Image
            src={postBanner}
            alt='post-banner'
            layout='responsive'
            objectFit='cover'
            quality={100}
            placeholder='blur'
          />
        </div>
        <div className='author-section mt-4 sm:mt-6 w-full px-[12px] sm:p-0 mx-auto'>
          <div className='font-bold montserrat mb-1 text-[14px]'>
            <span>Article by </span>
            <span className='text--colors_secondary'>Author name</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostIntro;
