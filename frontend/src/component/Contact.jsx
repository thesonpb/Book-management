import React from "react";
import NavBar from "./NavBar";

function Contact(props) {
  return (
    <div>
      <NavBar active={props.active} showSearchBar={false} />
      <div className="row">
        <div className="col-5">
          <form className="">
            <div className="form-group m-2">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group m-2">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group m-2">
              <label>Message</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group m-2">
              <label>Additional details</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group m-2">
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-7">
          <h1>How can we help?</h1>
          <h4>Contact us via:</h4>
          <ul className="d-flex flex-column">
            <li>
              <h3>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
