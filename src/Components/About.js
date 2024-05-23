import React, { useState } from 'react';

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
  };

  return (
    <div class="accordion" id="accordionExample">
       <h1  className="font-bold text-3xl" style={myStyle}>About Us</h1>
      <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header" id="headingOne" style={myStyle}>
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            Text Manipulation:
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
          <div class="accordion-body" style={myStyle}>
            <strong></strong> TextUtils might offer tools for basic text manipulation, such as converting text to lowercase or uppercase, removing whitespaces and Similar Operations.
          </div>
        </div>
      </div>
      <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header" id="headingTwo" style={myStyle}>
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            Free to Use:
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
          <div class="accordion-body" style={myStyle}>
            <strong></strong> The TextUtils website is completely free for users to access and utilize its suite of text-related tools and utilities.
          </div>
        </div>
      </div>
      <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header" id="headingThree" style={myStyle}>
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
            Browser Compatibility:
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
          <div class="accordion-body" style={myStyle}>
            <strong></strong> The TextUtils website is designed to be compatible with a wide range of web browsers, ensuring that users can access and use its features seamlessly regardless of the browser they prefer. 
          </div>
        </div>
      </div>
    </div>
  );
}
