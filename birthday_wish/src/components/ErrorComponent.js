import React from "react";
import "../styles/Error.css";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";

function ErrorComponent() {
  return (
    <div className="error">
      <div className="errorMessage">
        <ErrorOutlineOutlinedIcon className="errorIcon" />
        <div className="message">
          <h2>
            Sorry, but the page that you requested could not be displayed.
          </h2>
          <h2>
            Please refresh page, try again later, or contact admin for
            assistance.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ErrorComponent;
