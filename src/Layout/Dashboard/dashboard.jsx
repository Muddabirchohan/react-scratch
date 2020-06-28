import React, { Component } from "react";
import { Pie, Doughnut, Line, Bar } from "react-chartjs-2";

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
      label: "My First dataset",
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
                  <h5 class="display-7">Users: #3</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-sm p-3">
              <div
                class="card"
                style={{ width: "14rem", borderLeft: "4px solid blue" }}
              >
                <div class="card-body">
                  <h5 class="display-7"> Posts: #22</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-sm p-3">
              <div
                class="card"
                style={{ width: "14rem", borderLeft: "4px solid yellow" }}
              >
                <div class="card-body">
                  <h5 class="display-7"> Comments: #43</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>

            <div class="col-sm p-3">
              <div
                class="card"
                style={{ width: "14rem", borderLeft: "4px solid red" }}
              >
                <div class="card-body">
                  <h5 class="display-7"> Albums: #13</h5>
                  <p class="card-text"></p>
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
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    <Doughnut
                      data={state}
                      options={{
                        title: {
                          display: true,
                          text: "Average Rainfall per month",
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
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    <Pie
                      data={state}
                      options={{
                        title: {
                          display: true,
                          text: "Average Rainfall per month",
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
                  <h5 class="card-title">Card title</h5>
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
