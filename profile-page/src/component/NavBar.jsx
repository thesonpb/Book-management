import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import authService from "../services/auth-service";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const [active, setActive] = useState({
    home: "",
    add: "",
  });

  const navigate = useNavigate();
  const handleLogout = () => {
    authService.logout();
    navigate("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.keyword.value !== "")
      props.changeKeyword(e.target.keyword.value);
  };

  useEffect(() => {
    if (props.active === "home")
      setActive((previousState) => {
        return { ...previousState, home: "active" };
      });
    if (props.active === "add")
      setActive((previousState) => {
        return { ...previousState, add: "active" };
      });
  }, [props.active]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 ">
      <div className="container-fluid">
        <ul className="navbar-nav mr-auto navbar-left">
          <li className="nav-item active">
            <h5>
              <a className={"nav-link " + active.home} href="/home">
                Home
              </a>
            </h5>
          </li>
          {localStorage.getItem("user") !== null ? (
            JSON.parse(localStorage.getItem("user")).roles.includes(
              "ROLE_ADMIN"
            ) ? (
              <li className="nav-item">
                <h5>
                  <a className={"nav-link " + active.add} href="/add">
                    Add
                  </a>
                </h5>
              </li>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}

          {localStorage.getItem("user") !== null ? (
            <li className="nav-item">
              <h5>
                <a
                  className="nav-link "
                  href={"/users/" + JSON.parse(localStorage.getItem("user")).id}
                >
                  {JSON.parse(localStorage.getItem("user")).username}
                </a>
              </h5>
            </li>
          ) : (
            <></>
          )}
          {localStorage.getItem("user") !== null ? (
            <li className="nav-item">
              <h5>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </h5>
            </li>
          ) : (
            <></>
          )}
          {localStorage.getItem("user") === null ? (
            <li className="nav-item">
              <h5>
                <a className="btn btn-primary" href="/login">
                  Login
                </a>
              </h5>
            </li>
          ) : (
            <></>
          )}
        </ul>
        {props.showSearchBar ? (
          <form className="navbar-nav navbar-right" onSubmit={handleSubmit}>
            <div className="form-outline m-1">
              <input
                type="search"
                name="keyword"
                className="form-control"
                placeholder="Search for books"
              />
            </div>
            <button type="submit" className="btn btn-primary m-1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
