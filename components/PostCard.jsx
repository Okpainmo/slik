import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PostTag from './PostTag';

function PostCard({ postCardsData, data }) {
  const { postTitle, authorName, slug, postIndex, postId, postTag } =
    postCardsData.fields;

  // console.log(slikOpensourceMediaData);

  const postImage = data.includes.Asset.filter((each) => {
    const postBannerName = each.fields.file.fileName;
    const sliceEnd = postBannerName.length - 4;
    const reqName = postBannerName.slice(0, sliceEnd);

    return reqName == postId;
  });

  return (
    <Link href={`../posts/${slug}`}>
      <a className='w-full md:w-3/12 md:mx-4'>
        <div className='w-full custom-background mx-auto relative'>
          <PostTag tag={postTag} />
          <div className='post-image-wrapper w-full relative'>
            <Image
              src={`https:${postImage[0].fields.file.url}`}
              width={postImage[0].fields.file.details.image.width}
              height={postImage[0].fields.file.details.image.height}
            />
          </div>
          <div className='post-title mt-3 montserrat font-bold text-lg leading-[22px]'>
            {postTitle}
          </div>
          <div className='extra-details mt-2'>
            <div className='author-section flex items-center uppercase text-[10px]'>
              {authorName}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default PostCard;
