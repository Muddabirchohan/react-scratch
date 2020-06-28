import React from "react";
import SideBar from "../Layout/sidebar";
import Navbar from "../Layout/navbar";
import { connect } from "react-redux";
import PostsElementsTable from "../components/postsElementsTable";
import EvsElementsTable from "../components/evsElementsTable";
import KmsElementsTable from "../components/kmsElementsTable";
import UsersElementsTable from "../components/usersElementsTable";

class AppLayout extends React.Component {
  render() {
    const contentSection = () => {
      const { selectedService } = this.props;
      if (selectedService.name === "posts") {
        return <PostsElementsTable />;
      } else if (selectedService.name === "evs") {
        return <EvsElementsTable />;
      } else if (selectedService.name === "kms") {
        return <KmsElementsTable />;
      } else if (selectedService.name === "users") {
        return <UsersElementsTable />;
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
  console.log("selec", state.global.subService);
  return {
    selectedService: state.global.subService,
  };
};

export default connect(mapStateToProps)(AppLayout);
