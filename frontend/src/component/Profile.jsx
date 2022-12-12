import React from "react";
import Resume from "./Resume";
import NavBar from "./NavBar";
import Image from "./Image";
import AboutMe from "./AboutMe";
import Text from "./Text";

function Profile(props) {
  return (
    <div>
      <NavBar active={props.active} showSearchBar={false} />
      <div className="container m-0">
        <div className="row">
          <div className="block col-5">
            <Resume />
            <Image />
          </div>
          <div className="block col-7">
            <AboutMe />
            <Text />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
