import "./App.css";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import Aboutus from "./component/Aboutus";
import Alert from "./component/Alert";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
      showAlert("Dark mode has been enabled", "light ");
      document.title = "Text Convetor -Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white ";
      document.body.style.color = "#000";
      showAlert("Light mode has been enabled", "dark");
      document.title = "Text Convetor -Light mode";
    }
  };

  return (
    <>
      <Navbar
        tittle="PARTH"
        AboutUS="About US"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Form
                showAlert={showAlert}
                heading="Enter The txt analyze below"
                mode={mode}
              />
            }
          />
          <Route path="/aboutus" element={<Aboutus />} />
          {/* <Route path="/Aboutus" element={<Aboutus />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
