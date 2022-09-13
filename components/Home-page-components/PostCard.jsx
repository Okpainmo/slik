import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DemoPic from '../../assets/images/1.jpg';

function PostCard({ dataItems }) {
  const { postTitle, authorName } = dataItems;

  return (
    <>
      <Link href='/posts/articleId'>
        <a className='w-full md:w-3/12 md:mx-4'>
          <div className='w-full custom-background mx-auto'>
            <div className='post-image-wrapper w-full relative'>
              <Image
                alt='post-image'
                src={DemoPic}
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className='post-title mt-3 montserrat font-bold text-lg leading-[22px]'>
              {postTitle}
            </div>
            <div className='extra-details mt-2'>
              <div className='author-section flex items-center uppercase'>
                {authorName}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default PostCard;
