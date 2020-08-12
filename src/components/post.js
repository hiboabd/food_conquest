import React from 'react';
import '../App.css';
require('dotenv').config()

function Post({post, index}){
  return(
    <div className="post">
      <div className="gallery-item">
        <div className="image">
          <img src={post.media_url} alt="instagram post"></img>
        </div>
      </div>
    </div>
  )
}
export default Post;
