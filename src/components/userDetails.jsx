import React, { Component } from "react";
import { connect } from "react-redux";
import { userFetcAction, fetchUsers } from "./../action/userAction";
import { withRouter } from "react-router-dom";
import { selectedSidebar } from "../action/globalactions";

class UserDetails extends Component {
  render() {
    const { users, selectedUser } = this.props;
    return (
      <div style={{ padding: "35px" }}>
        ID# {selectedUser?.id}
        <div class="card text-center">
          <div class="card-header"> {selectedUser?.name} </div>
          <div class="card-body">
            <h5 class="card-title"> {selectedUser?.website} </h5>
            <p class="card-text">{selectedUser?.username}</p>
            <a href="#" class="btn btn-primary">
              user action
            </a>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.user.users,
    selectedUser: state.user.selectedUser,
  };
};

export default connect(mapStateToProps)(UserDetails);
