import React, { useState } from "react";

const Aboutus = () => {
  const [] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [] = useState("Enable light Mode");

  return (
    <div class="accordion" id="accordionExample">
      <h1>About Us</h1>
      <div class="accordion-item mt-4">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Welcome to our Text Converter React app – a versatile tool designed
            to make text transformations easy and convenient. Whether you need
            to change the case of your text, convert it to uppercase, lowercase,
            or perform other transformations, our app has you covered.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            We are a team passionate about creating simple yet powerful tools to
            enhance your productivity. Our Text Converter React app is just one
            example of our commitment to providing practical solutions for
            everyday tasks.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Feedback and Support:.</strong> We value your feedback! If
            you have suggestions, encounter issues, or want to share your
            thoughts, please reach out to us. Your input helps us improve and
            tailor our app to meet your needs.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
