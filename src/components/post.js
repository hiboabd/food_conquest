import React from 'react';
import '../App.css';
require('dotenv').config()

function Post({post, index}){
  return(
    <div className="post" data-testid="post2">
    <img src={post.media_url} alt="instagram post"></img>
    </div>
  )
}
export default Post;
