// this is the layout for each post

import React from 'react';
import './App.css';
import Posts from './posts';

//create the posts layout for the blog
const BlogPosts = ({ posts, setPosts }) => {
    return (
        <div className="posts-container">
            <div className="posts">
               {posts.map((post) => (
                   <Posts key={post.id} 
                   post={post} 
                   posts={posts} 
                   setPosts={setPosts} />
               ))}
            </div>
        </div>
    ) 
}
export default BlogPosts
