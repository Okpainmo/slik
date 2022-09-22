import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import DemoPic from '../../assets/images/1.jpg';

function PostCard({ postCardsData, data }) {
  const { postTitle, authorName, slug, postIndex } = postCardsData.fields;

  // const slikMediaData = data.includes.Asset.filter((each) => {
  //   return each.fields.title === 'slik-blog-project-asset';
  // });

  const postImage = data.includes.Asset.filter((each) => {
    return each.fields.file.fileName.slice(0, 1) == postIndex;
  });

  // const link = () => {
  //   if (typeof window !== 'undefined') {
  //     return `/posts/${slug}`;
  //   }
  //   return `${process.env.BASE_URL}/posts/${slug}`;
  // };

  // console.log(link());

  return (
    <Link href={`/posts/${slug}`}>
      <a className='w-full md:w-3/12 md:mx-4'>
        <div className='w-full custom-background mx-auto'>
          <div className='post-image-wrapper w-full relative'>
            <Image
              src={`https:${postImage[0].fields.file.url}`}
              width={postImage[0].fields.file.details.image.width}
              height={1300}
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
  );
}

export default PostCard;
