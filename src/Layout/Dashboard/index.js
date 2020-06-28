import React, { Component } from "react";
import Navbar from "../navbar";
import DashboardIndex from "./dashboard";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DashboardIndex />
      </div>
    );
  }
}
