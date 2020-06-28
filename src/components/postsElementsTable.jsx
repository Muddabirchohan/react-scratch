import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, userFetcPost } from "./../action/postsAction";
import { selectedSidebar } from "../action/globalactions";
import { selectedPost } from "../action/postsAction";

class postsElementsTable extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    await fetchPosts();
    dispatch(userFetcPost());
  }

  async fetchPostsList() {
    const { dispatch } = this.props;
    await fetchPosts();
    dispatch(userFetcPost());
  }

  async onSelectedRow(user) {
    const { dispatch, history } = this.props;
    // history.push("/user-details");

    await dispatch(selectedPost(user));

    await dispatch(
      selectedSidebar({
        name: user.name,
        type: "detailedView",
      })
    );
  }

  postsTableData = () => {
    const { posts } = this.props;
    console.log("posts", posts);
    return posts.map((item) => (
      <tr key={item.id} onClick={this.onSelectedRow.bind(this, item)}>
        <td>{item.userId}</td>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
      </tr>
    ));
  };
  render() {
    const { posts } = this.props;
    return (
      <div style={{ padding: "35px" }}>
        posts
        <table class="table table-hover" style={{ padding: "35px" }}>
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>username</th>
              <th>website</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> {this.userTableHeader()} </tr> */}

            {posts.length === 0 ? (
              <div class="d-flex justify-content-center text-primary">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              this.postsTableData()
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    posts: state.post.posts,
  };
};

export default connect(mapStateToProps)(postsElementsTable);
