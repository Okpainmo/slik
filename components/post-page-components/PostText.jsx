import React from 'react';

function PostText({ currentPost }) {
  const { postText } = currentPost[0];

  const articleParagraphs = postText.content.map((each) => each);

  console.log(articleParagraphs);

  return (
    <section
      className='post-text w-full px-3 xsm:px-[20px] sm:p-0 m-serif mx-auto 
     mt-2 sm:mt-6 sm:text-[18px] text-[16px] leading-[32px]'
    >
      {articleParagraphs.map((each) => {
        // console.log(articleParagraphs.indexOf(paragraph));

        const paragraph = each.content[0].value;

        return (
          <p
            className='text--colors_secondary pt-6'
            key={articleParagraphs.indexOf(each)}
          >
            {paragraph}
          </p>
        );
      })}
    </section>
  );
}

export default PostText;
