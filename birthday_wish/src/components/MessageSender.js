import { Avatar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useStateValue } from "../StateProvider";
import "../styles/MessageSender.css";
import db from "../firebase";
import firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";

function MessageSender({ birthday }) {
  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      // get reference to posts in birthday
      const ref = db
        .collection("birthdays")
        .doc(birthday.id)
        .collection("posts");

      // add to posts
      ref.add({
        message: input,
        profilePicture: user.photoURL,
        username: user.displayName,
        image: imageUrl,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setInput("");
      setImageUrl("");
    }
  };

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [{ user }] = useStateValue();

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} className={classes.large} />
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
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn primary-btn post-btn"
          >
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
