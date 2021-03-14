import React, { useState, useEffect } from "react";
import Post from "./Post";
import "../styles/Posts.css";
import db from "../firebase";

function Posts() {
  const [posts, setPosts] = useState([]);

  // get all data from database
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePicture}
          image={post.data.image}
          username={post.data.username}
          message={post.data.message}
        />
      ))}
    </div>
  );
}

export default Posts;
