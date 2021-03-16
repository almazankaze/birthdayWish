import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import Loading from "./Loader";

function NewBirthdayForm() {
  const addBirthday = async () => {
    try {
      dispatch({ type: "LOADING" });

      // add new birthday
      await db
        .collection("birthdays")
        .add({
          firstname: firstName,
          lastname: lastName,
        })
        .then((ref) => {
          setNewId(ref.id);
        });

      dispatch({ type: "ADD_BIRTHDAY" });
    } catch (error) {
      // dispatch({ type: "ERROR" });
    }
  };
  const createBirthday = (e) => {
    e.preventDefault();

    if (firstName && lastName) {
      addBirthday();
    } else {
      setError(true);
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newId, setNewId] = useState("");
  const [error, setError] = useState(false);

  const [{ loading }, dispatch] = useStateValue();

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="newBirthdayForm">
        {newId ? (
          <div className="successContainer">
            <h2>
              Birthday board created! Press button below to go to new Board!
            </h2>
            <Link to={`/birthdayboard/${newId}`}>Go to board</Link>
          </div>
        ) : (
          <form>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={`first name...`}
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={`last name...`}
            />
            <button type="submit" onClick={createBirthday}>
              press
            </button>

            {error ? <span>All fields should be filled</span> : " "}
          </form>
        )}
      </div>
    );
  }
}

export default NewBirthdayForm;
