import React, { Component } from "react";
import { connect } from "react-redux";
import { userFetcAction, fetchUsers } from "./../action/userAction";
import { withRouter } from "react-router-dom";
import { selectedSidebar } from "../action/globalactions";

class PostDetails extends Component {
  render() {
    const { posts, selectedPost } = this.props;
    return (
      <div style={{ padding: "35px" }}>
        ID# {selectedPost?.id}
        <div class="card text-center">
          <div class="card-header"> {selectedPost?.title} </div>
          <div class="card-body">
            <h5 class="card-title"> {selectedPost?.id} </h5>
            <p class="card-text">{selectedPost?.body}</p>
            <a href="#" class="btn btn-primary">
              post action
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
    posts: state.post.posts,
    selectedPost: state.post.selectedPost,
  };
};

export default connect(mapStateToProps)(PostDetails);
