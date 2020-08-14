import React from 'react';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

const MyPostList = ({posts , author}) => {

  
    return (
        <div className="post-list section">
           {posts && posts.filter(post => {
               return post.authorId === author
           }).map(post => {
                // if(post.authorId === author)
                // {
                    return (
                   <Link to={'/post/' + post.id} key={post.id} >
                        <PostSummary post={post}/>
                   </Link>
               )
             //}
           })}
        </div>
    )
}

export default MyPostList;