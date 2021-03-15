import React from "react";
import Post from "./Post";
import "../styles/Posts.css";

function Posts({ posts }) {
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
