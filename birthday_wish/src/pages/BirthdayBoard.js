import React, { useState, useEffect } from "react";
import MessageSender from "../components/MessageSender";
import Posts from "../components/Posts";
import db from "../firebase";
import firebase from "firebase";
import { useParams } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import Loading from "../components/Loader";
import background from "../images/birthdayBG.jpg";
import ErrorComponent from "../components/ErrorComponent";

function BirthdayBoard() {
  const [birthday, setBirthday] = useState(null);
  const [posts, setPosts] = useState([]);
  const { birthdayId } = useParams();

  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });

      // get specific birthday
      const resp1 = await db
        .collection("birthdays")
        .where(firebase.firestore.FieldPath.documentId(), "==", birthdayId)
        .limit(1)
        .get();

      if (resp1) {
        const obj = { id: resp1.docs[0].id, data: resp1.docs[0].data() };
        setBirthday(obj);

        // get posts
        resp1.docs[0].ref
          .collection("posts")
          .orderBy("created", "desc")
          .onSnapshot((snapshot) => {
            setPosts(
              snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
            );
          });
      }

      dispatch({ type: "DISPLAY_POSTS" });
      setError(false);
    } catch (error) {
      setError(true);
      dispatch({ type: "LOADING" });
    }
  };

  // get all data from database
  useEffect(() => {
    fetchData();
  }, [birthdayId]);

  const [{ loading }, dispatch] = useStateValue();
  const [error, setError] = useState(false);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <ErrorComponent />;
  } else {
    return (
      <div
        className="birthdayBoard"
        style={{ backgroundImage: `url(${background})`, minHeight: "100vh" }}
      >
        <MessageSender birthday={birthday} />
        <Posts posts={posts} />
      </div>
    );
  }
}

export default BirthdayBoard;
