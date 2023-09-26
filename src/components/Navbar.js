import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  let [category, setCategory] = useState([]);
  let Url = "https://fakestoreapi.com/products/categories";

  async function GetCategory() {
    let resp = await fetch(Url);
    let data = await resp.json();
    setCategory(data);
  }

  useEffect(function () {
    GetCategory();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className="container-fluid parent-container">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item my-items">
                <a
                  className="nav-link navigation-links"
                  aria-current="page"
                  href="#"
                >
                  {props.items[0].name}
                </a>
              </li>
              <li className="nav-item my-items">
                <a className="nav-link navigation-links" href="#">
                  {props.items[1].name}
                </a>
              </li>
              <li className="nav-item my-items dropdown">
                <a
                  className="nav-link dropdown-toggle navigation-links"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.items[2].name}
                </a>
                <ul className="dropdown-menu">
                  {category.map(function (category) {
                    return (
                      <li>
                        <a className="dropdown-item" href="#">
                          {category}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item my-items">
                <a className="nav-link navigation-links" href="#">
                  {props.items[3].name}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
