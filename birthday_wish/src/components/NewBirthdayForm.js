import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import Loading from "./Loader";
import "../styles/NewBirthdayForm.css";
import firebase from "firebase";
import ErrorComponent from "./ErrorComponent";

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
          created: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((ref) => {
          setNewId(ref.id);
        });

      dispatch({ type: "ADD_BIRTHDAY" });
      setError(false);
    } catch (error) {
      setError(true);
      dispatch({ type: "LOADING" });
    }
  };
  const createBirthday = (e) => {
    e.preventDefault();

    if (firstName && lastName) {
      addBirthday();
    } else {
      setFieldError(true);
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newId, setNewId] = useState("");
  const [fieldError, setFieldError] = useState(false);
  const [error, setError] = useState(false);

  const [{ loading }, dispatch] = useStateValue();

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <ErrorComponent />;
  } else {
    return (
      <div className="newBirthdayForm">
        {newId ? (
          <div className="successContainer">
            <h2>
              Birthday board created! Press link below to go to new Board!
            </h2>
            <Link to={`/birthdayboard/${newId}`}>Go to board</Link>
          </div>
        ) : (
          <div className="birthdayForm">
            <h2>Fill in information to create a board</h2>
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
              <button
                type="submit"
                onClick={createBirthday}
                className="btn primary-btn"
              >
                Create
              </button>

              {fieldError ? (
                <span className="danger-span">All fields should be filled</span>
              ) : (
                " "
              )}
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default NewBirthdayForm;
