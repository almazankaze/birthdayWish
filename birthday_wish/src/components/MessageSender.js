import { Avatar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useStateValue } from "../StateProvider";
import "../styles/MessageSender.css";
import db from "../firebase";
import firebase from "firebase";

function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      profilePicture: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`Say something nice!`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageSender;
