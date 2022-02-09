import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task";

//import Sdata from "./netFlixThapa/Sdata";

function App() {
  const [mode, setMode] = useState("white");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return <Task mode={mode} toggleMode={toggleMode} />;
}

export default App;
