import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "../styles/Home.css";
import db from "../firebase";
import Loading from "../components/Loader";

function Home() {
  const fetchBirthdays = async () => {
    try {
      dispatch({ type: "LOADING" });

      // get all birthdays from database
      const snapShot = await db.collection("birthdays").get();
      const array = snapShot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      dispatch({ type: "DISPLAY_BIRTHDAYS", payload: array });
    } catch (error) {
      // dispatch({ type: "ERROR" });
    }
  };

  useEffect(() => {
    fetchBirthdays();
  }, []);

  const [{ birthdays, loading }, dispatch] = useStateValue();

  if (loading) {
    return <Loading />;
  } else
    return (
      <div className="home">
        {birthdays.map((birthday) => (
          <Link key={birthday.id} to={`birthdayboard/${birthday.id}`}>
            {`${birthday.data.firstname} ${birthday.data.lastname} `}
          </Link>
        ))}
      </div>
    );
}

export default Home;
