import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "../styles/Home.css";
import db from "../firebase";
import Loading from "../components/Loader";
import ErrorComponent from "../components/ErrorComponent";

function Home() {
  const fetchBirthdays = async () => {
    try {
      dispatch({ type: "LOADING" });

      // get all birthdays from database
      const snapShot = await db
        .collection("birthdays")
        .orderBy("created", "desc")
        .get();
      const array = snapShot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      dispatch({ type: "DISPLAY_BIRTHDAYS", payload: array });
      setError(false);
    } catch (error) {
      setError(true);
      dispatch({ type: "LOADING" });
    }
  };

  useEffect(() => {
    fetchBirthdays();
  }, []);

  const [{ birthdays, loading }, dispatch] = useStateValue();
  const [error, setError] = useState(false);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <ErrorComponent />;
  } else
    return (
      <div className="home">
        <div className="createContainer">
          <Link to="/createbirthday" className="btn primary-btn">
            Create Board
          </Link>
        </div>

        <div className="birthdaysContainer">
          <h2>Birthdays!</h2>
          <div className="birthdays">
            {birthdays.map((birthday) => (
              <Link
                key={birthday.id}
                to={`birthdayboard/${birthday.id}`}
                className="birthdayLink"
              >
                {`${birthday.data.firstname} ${birthday.data.lastname} `}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Home;
