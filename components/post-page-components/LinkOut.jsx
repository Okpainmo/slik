import React from 'react';

function LinkOut({ postUrl }) {
  return (
    <p className='text--colors_secondary pt-6'>
      Please follow this link{' '}
      <a href={postUrl} target='_blank' className='underline'>
        to read the full article.
      </a>{' '}
      By doing so, we all get to promote the contents and blogs of all loyal
      contributors to the Reactify project.
    </p>
  );
}

export default LinkOut;
