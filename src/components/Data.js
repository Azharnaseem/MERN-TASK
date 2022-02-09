import React from "react";
import "./Data.css";

function Data(props) {
  return (
    <>
      <div className="Data">
        <h3 className="title">
          {props.title} <br />
        </h3>
        <p
          className={`paragraph ${
            props.mode === "white" ? "white-text" : "black-text"
          }`}
        >
          <br />
          {props.body}
        </p>
        <h5 className={props.mode === "white" ? "white-text" : "black-text"}>
          January 09, 2022 . ☕️☕️☕️ {1 * props.title.split("").length} min
          read
        </h5>
      </div>
    </>
  );
}

export default Data;
