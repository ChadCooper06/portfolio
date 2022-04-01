//template for each individual post
import React from 'react';
import post from './blog-posts'

const Posts = ({ props }) => {
    
    //this is the format of the posts themselves
  return(
    <div className='post-container'>
      <div className='post'>
        <h3 className='post-title'></h3>

        <p className='content'>
        {post.text}
        </p>
      </div>
    </div>
  )
}
export default Posts
