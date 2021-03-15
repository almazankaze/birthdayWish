import { Avatar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useStateValue } from "../StateProvider";
import "../styles/MessageSender.css";
import db from "../firebase";

function MessageSender({ birthday }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    // get reference to posts in birthday
    const ref = db.collection("birthdays").doc(birthday.id).collection("posts");

    // add to posts
    ref.add({
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

  const [{ user }] = useStateValue();

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
      <h1>
        {birthday ? `Happy Birthday ${birthday.data.firstname}!` : `loading...`}
      </h1>
    </div>
  );
}

export default MessageSender;
