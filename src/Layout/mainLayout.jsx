import React from "react";
import SideBar from "../Layout/sidebar";
import Navbar from "../Layout/navbar";
import { connect } from "react-redux";
import PostsElementsTable from "../components/postsElementsTable";
import EvsElementsTable from "../components/evsElementsTable";
import KmsElementsTable from "../components/kmsElementsTable";
import UsersElementsTable from "../components/usersElementsTable";
import UserDetails from "../components/userDetails";
import PostDetails from "../components/postDetails";

class AppLayout extends React.Component {
  render() {
    const contentSection = () => {
      const { selectedService, users, posts } = this.props;
      const userNames = users.map((item) => item.name);
      const postNames = posts.map((item) => item.name);

      if (selectedService.name === "posts") {
        return <PostsElementsTable />;
      } else if (selectedService.name === "evs") {
        return <EvsElementsTable />;
      } else if (selectedService.name === "kms") {
        return <KmsElementsTable />;
      } else if (selectedService.name === "users") {
        return <UsersElementsTable />;
      } else if (
        userNames.includes(selectedService.name) &&
        selectedService.type === "detailedView"
      ) {
        return <UserDetails />;
      } else if (
        postNames.includes(selectedService.name) &&
        selectedService.type === "detailedView"
      ) {
        return <PostDetails />;
      }
    };
    return (
      <div>
        <div>
          <Navbar />
        </div>

        <div class="row">
          <div class="col-lg-2" style={{ padding: "20px" }}>
            <SideBar />
          </div>
          <div class="col-lg-10">{contentSection()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    selectedService: state.global.subService,
    users: state.user.users,
    posts: state.post.posts,
  };
};

export default connect(mapStateToProps)(AppLayout);
