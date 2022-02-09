import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "./Data";
import "./Task.css";
import image from "./images/as.png";

function Task(props) {
  const [text, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={props.mode === "light" ? "main-dark" : "main"}>
      <div className="con">
        <div className="container">
          <h1 className="h1">Overreacted</h1>
          <div className="form-check form-switch text-light">
            <input
              className="form-check-input"
              onChange={() => props.toggleMode()}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>

        <div className="profile">
          <img src={image} alt="azhar"></img>
          <h4
            className={`profile-des ${
              props.mode === "white" ? "white-text" : "black-text"
            }`}
          >
            Personal blog by <u style={{ color: "red" }}>Azhar Naseem</u>
            <br />I explain with words and code.
          </h4>

          <h3> </h3>
        </div>
        <div className="containerr">
          {text.map((val) => (
            <Data key={val.id} title={val.title} body={val.body} />
          ))}
        </div>
        <div className="footer">
          <h4>twitter </h4>
          <h4>. github</h4>
          <h4>stack overflow</h4>
          <h4>rss</h4>
        </div>
      </div>
    </div>
  );
}

export default Task;
