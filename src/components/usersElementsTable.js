import React, { Component } from "react";
import { connect } from "react-redux";
import { userFetcAction, fetchUsers } from "./../action/userAction";

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

  userTableData = () => {
    const { users } = this.props;
    return users.map((item) => (
      <tr key={item.id}>
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
        <div className="text-right">
          {/* <button
            class="btn btn-primary"
            type="button"
            onClick={this.fetchUsersList()}
          > */}
          {/* {users.length === 0 && (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Refresh
          </button> */}
        </div>
        <table className="table">
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
  return {
    users: state.user.users,
  };
};

export default connect(mapStateToProps)(usersElementsTable);
