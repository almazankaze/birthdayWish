import React from "react";
import MessageSender from "../components/MessageSender";
import Posts from "../components/Posts";

function BirthdayBoard() {
  return (
    <div className="birthdayBoard">
      <MessageSender />
      <Posts />
    </div>
  );
}

export default BirthdayBoard;
