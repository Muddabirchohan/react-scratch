import React, { Component } from "react";
import { Pie, Doughnut, Line, Bar } from "react-chartjs-2";
import user from "../../assets/user.png";
import post from "../../assets/posts.png";
import comment from "../../assets/comment.png";
import album from "../../assets/album.png";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Monthly Rate",
      backgroundColor: "#b2bece",
      borderColor: "#b2bece",
      borderWidth: 1,
      hoverBackgroundColor: "#0d6efd",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export default class Dashboard extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f6f6f6" }}>
        <div class="container">
          <div class="row ">
            <div class="col-sm p-3">
              <div
                class="card"
                style={{ width: "14rem", borderLeft: "4px solid green" }}
              >
                <div class="card-body">
                  <span style={{ paddingLeft: "15px" }}>Users: #12 </span>
                  <span style={{ paddingLeft: "12px" }}>
                    {" "}
                    <img src={user} width="18px" />{" "}
                  </span>
                  <p class="card-text"> </p>
                </div>
              </div>
            </div>
            <div class="col-sm p-3">
              <div
                class="card"
                style={{ width: "14rem", borderLeft: "4px solid blue" }}
              >
                <div class="card-body">
                  <span style={{ paddingLeft: "15px" }}>Posts: #34 </span>
                  <span style={{ paddingLeft: "12px" }}>
                    {" "}
                    <img src={post} width="18px" />{" "}
                  </span>
                  <p class="card-text"> </p>
                </div>
              </div>
            </div>
            <div class="col-sm p-3">
              <div
                class="card"
                style={{ width: "14rem", borderLeft: "4px solid yellow" }}
              >
                <div class="card-body">
                  <span style={{ paddingLeft: "15px" }}>Comments: #122 </span>
                  <span style={{ paddingLeft: "12px" }}>
                    {" "}
                    <img src={comment} width="18px" />{" "}
                  </span>
                  <p class="card-text"> </p>
                </div>
              </div>
            </div>

            <div class="col-sm p-3">
              <div
                class="card"
                style={{ width: "14rem", borderLeft: "4px solid red" }}
              >
                <div class="card-body">
                  <span style={{ paddingLeft: "15px" }}>Albums: #22 </span>
                  <span style={{ paddingLeft: "12px" }}>
                    {" "}
                    <img src={album} width="18px" />{" "}
                  </span>
                  <p class="card-text"> </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row ">
            <div class="col-sm p-3">
              <div class="card" style={{ width: "30rem" }}>
                <div class="card-body">
                  <h5 class="card-title"> Users</h5>
                  <p class="card-text">
                    <Doughnut
                      data={state}
                      options={{
                        title: {
                          display: true,
                          text: "Users activity & sessions",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                          position: "right",
                        },
                      }}
                    />
                  </p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
            <div class="col-sm p-3">
              <div class="card" style={{ width: "30rem" }}>
                <div class="card-body">
                  <h5 class="card-title"> Posts</h5>
                  <p class="card-text">
                    <Pie
                      data={state}
                      options={{
                        title: {
                          display: true,
                          text: "Recent posts summary",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                          position: "right",
                        },
                      }}
                    />
                  </p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm p-3">
              <div class="card" style={{ width: "65rem" }}>
                <div class="card-body">
                  <h5 class="card-title">User's Posting Rate (Monthly)</h5>
                  <p class="card-text">
                    <Bar
                      data={data}
                      width={100}
                      height={250}
                      options={{
                        maintainAspectRatio: false,
                      }}
                    />
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
