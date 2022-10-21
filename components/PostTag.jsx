import React from 'react';

function PostTag({ tag }) {
  return (
    <div
      className='post-tag pt-[5px] text--colors_white text-[10px] absolute z-10 top-[0] right-[0] py-[3px] px-3 min-w-[60px] text-center'
      style={{ backgroundColor: 'rgba(10, 10, 10 , 0.5)' }}
    >
      <span>{tag}</span>
    </div>
  );
}

export default PostTag;
