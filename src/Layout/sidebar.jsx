import React, { Component } from "react";
import "./../App.css";
import server from "../assets/server.png";
import storage from "../assets/database.png";
import user from "../assets/user.png";
import security from "../assets/key.png";
import { connect } from "react-redux";
import { selectedSidebar } from "../action/globalactions";

class SideBar extends Component {
  getSidebar(e) {
    const { dispatch } = this.props;
    dispatch(
      selectedSidebar({
        name: e.target.id,
        type: "listView",
      })
    );
  }

  render() {
    return (
      <div
        style={{
          borderRight: "1px solid silver",
          height: `${window.innerHeight}px`,
        }}
      >
        <ul
          class="list-group list-group-flush"
          onClick={this.getSidebar.bind(this)}
        >
          <li class="list-group-item" id="users">
            <span id="users">
              {" "}
              <img src={user} width="20px" />{" "}
            </span>
            Users
          </li>{" "}
          <li class="list-group-item" id="posts">
            <span id="posts">
              {" "}
              <img src={server} width="20px" />{" "}
            </span>
            Posts
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    selectedService: state.selectedService,
  };
};

export default connect(mapStateToProps)(SideBar);
