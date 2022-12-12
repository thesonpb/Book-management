import React from "react";
import NavBar from "./NavBar";

function About(props) {
  return (
    <div>
      <NavBar active={props.active} showSearchBar={false} /> <div>About</div>
    </div>
  );
}

export default About;
