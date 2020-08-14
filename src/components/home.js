import React, { useState, useEffect } from 'react';
import Post from './post'
import '../App.css';
const axios = require('axios');
require('dotenv').config()


function Home() {

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData(){

      const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=${process.env.REACT_APP_IG_ACCESS_TOKEN}`)
      setPosts(response.data.data)
    }
    fetchData();
  }, [])

  return (
    <div className="Home">
      <a href="https://www.instagram.com/foodconquest_/"> <h3> Check out my instagram for more</h3> </a> 
      <div className="insta-feed" data-testid="post">
      {posts.map((post, index) => (
        <Post
          key={index}
          index={index}
          post={post}
          />
      ))}
      </div>
    </div>
  );
}

export default Home;
