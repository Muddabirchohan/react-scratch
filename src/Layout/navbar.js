import React, { Component } from "react";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgb(55, 142, 255)",
          color: "white",
          // position: "fixed",
          // right: 0,
          // left: 0,
          // zIindex: 0,
          // top: "0",
          // position: "fixed",
          // top: "10px",
        }}
      >
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/services" style={{ color: "white" }}>
              Services
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
