import React, { useState } from "react";
import "../css/image.css";

function Image() {
  const [image, setImage] = useState("https://picsum.photos/300");

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>Resume</h1>
        <button className="btn btn-primary">Edit</button>
      </div>
      <div>
        <h1>Professional Details</h1>
        <img className="w-100" src={image} alt="" />
        <p>
          <strong>Name:</strong> The Son
        </p>
        <p>
          <strong>Age:</strong> 21
        </p>
        <p>
          <strong>Phone number:</strong> 0949553672
        </p>
      </div>
    </>
  );
}

export default Image;
