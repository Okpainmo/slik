import React from 'react';

function PostText({ currentPost }) {
  const { postText } = currentPost[0];

  const articleParagraphs = postText.content[0].content.map(
    (each) => each.value
  );

  return (
    <section
      className='post-text w-full px-3 xsm:px-[20px] sm:p-0 m-serif mx-auto 
     mt-2 sm:mt-6 sm:text-[18px] text-[16px] leading-[32px]'
    >
      {articleParagraphs.map((paragraph) => {
        // console.log(articleParagraphs.indexOf(paragraph));

        return (
          <p
            className='text--colors_secondary pt-6'
            key={articleParagraphs.indexOf(paragraph)}
          >
            {paragraph}
          </p>
        );
      })}
    </section>
  );
}

export default PostText;
