import React from 'react';
import LinkOut from './LinkOut';

function PostText({ currentPost }) {
  const { postText, postUrl } = currentPost[0];

  const articleParagraphs = postText.content.map((each) => each);

  // console.log(postText.content);

  return (
    <section
      className='post-text w-full px-3 xsm:px-[20px] sm:p-0 m-serif mx-auto 
     mt-2 sm:mt-6 text-[16px] leading-[32px]'
    >
      {articleParagraphs.map((paragraph) => {
        // console.log(articleParagraphs.indexOf(paragraph));

        return (
          <>
            <p
              className='text--colors_secondary pt-6'
              key={articleParagraphs.indexOf(paragraph)}
            >
              {paragraph.content[0].value}
            </p>
          </>
        );
      })}
      <LinkOut postUrl={postUrl} />
    </section>
  );
}

export default PostText;
