import React from 'react';

function LinkOut({ postUrl }) {
  return (
    <p className='text--colors_secondary pt-6'>
      In line with slik's policy,{' '}
      <a href={postUrl} className='underline'>
        please follow this link
      </a>{' '}
      to read the full article. By doing so, we all get to promote the contents
      of all loyal contributors to the slik project.
    </p>
  );
}

export default LinkOut;
