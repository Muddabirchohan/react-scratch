import React, { Component } from "react";
import { connect } from "react-redux";
import { userFetcAction, fetchUsers } from "./../action/userAction";
import { withRouter } from "react-router-dom";
import { selectedSidebar } from "../action/globalactions";
import { selectedUser } from "../action/userAction";

class usersElementsTable extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    await fetchUsers();
    dispatch(userFetcAction());
  }

  async fetchUsersList() {
    const { dispatch } = this.props;
    await fetchUsers();
    dispatch(userFetcAction());
  }

  async onSelectedRow(user) {
    const { dispatch, history } = this.props;
    // history.push("/user-details");

    await dispatch(selectedUser(user));

    await dispatch(
      selectedSidebar({
        name: user.name,
        type: "detailedView",
      })
    );
  }

  userTableData = () => {
    const { users } = this.props;
    return users.map((item) => (
      <tr key={item.id} onClick={this.onSelectedRow.bind(this, item)}>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.username}</td>
        <td>{item.website}</td>
      </tr>
    ));
  };

  //   userTableHeader = () => {
  //     const { users } = this.props;
  //     let header = Object.keys(users[0]);
  //     return header.map((key, index) => {
  //       return <th key={index}>{key.toUpperCase()}</th>;
  //     });
  //   };

  render() {
    const { users } = this.props;
    return (
      <div style={{ padding: "35px" }}>
        users
        <div className="text-right"></div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nmae</th>
              <th>Phone</th>
              <th>username</th>
              <th>website</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> {this.userTableHeader()} </tr> */}

            {users.length === 0 ? (
              <div class="d-flex justify-content-center text-primary">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              this.userTableData()
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  console.log("userselected", state);
  return {
    users: state.user.users,
  };
};

export default withRouter(connect(mapStateToProps)(usersElementsTable));
