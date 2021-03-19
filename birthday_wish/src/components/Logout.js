import React from "react";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "../styles/Logout.css";

function Logout() {
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      })
      .catch((error) => {});
  };

  const [state, dispatch] = useStateValue();

  return (
    <div>
      <button className="logout" onClick={logout}>
        logout
      </button>
    </div>
  );
}

export default Logout;
