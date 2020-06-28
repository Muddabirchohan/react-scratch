import React, { Component } from "react";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">
            Services
          </a>

          {/* <div class="dropdown show">
            <a
              class="btn dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">
                Users
              </a>
              <a class="dropdown-item" href="#">
                Posts
              </a>
            </div>
    </div>*/}
        </li>
      </ul>
    );
  }
}
