import React, { useState } from "react";

export default function Form(props) {
  const convertup = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Uppercase!", "success");
  };
  const convertlo = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercas!", "warning ");
  };

  const cleartxt = () => {
    let newText = "";
    setText(newText);
    props.showAlert("All Clear!", "danger");
  };
    const handleOnChange = (event) => {
      console.log("on chage");
      setText(event.target.value);
    };

  const copytxt = () => {
    console.log("I am copy");
    let textElement = document.getElementById("mybox");
    textElement.select();
    textElement.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(textElement.value);
    props.showAlert("Copy All Text","info");
  };

  const [Text, setText] = useState("");
  return (
    <>
      <div className="mb-3 mt-5">
        <h1>Enter The Text To Analyze Below</h1>
        <textarea
          className="form-control"
          value={Text}
          id="mybox"
          onChange={handleOnChange}
          rows={8}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary mx-2 my-2"
        onClick={convertup}
      >
        Convert To UpperCase
      </button>
      <button
        type="submit"
        className="btn btn-primary mx-2 my-2"
        onClick={cleartxt}
      >
        Clear Text
      </button>
      <button
        type="submit"
        className="btn btn-primary mx-2 my-2"
        onClick={convertlo}
      >
        Convert To LowerCase
      </button>
      <button
        type="submit"
        className="btn btn-primary mx-2 my-2"
        onClick={copytxt}
      >
        Copy Text
      </button>
      <div className="container my-3">
        <h1>Text Summary</h1>
        <h5>
          <p>
            {Text.split(" ").length} Nember of space {Text.length} Nember Of
            Characters
          </p>
        </h5>

        <p>{0.008 * Text.split(" ").length} Number Of Seconds </p>

        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
