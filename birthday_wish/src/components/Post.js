import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Post.css";

function Post({ profilePic, image, username, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
        </div>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Post;
