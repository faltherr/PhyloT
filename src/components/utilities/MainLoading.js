import React, { Component } from "react";
import { RingLoader } from "react-spinners";
import TextLoop from "react-text-loop";

//This class displays a mock loading component. It will be further developed to display the ring loader and process while analysis is being performed.
export default class MainLoading extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="main-loading-container">
      <div className="loading-spinner-text-container">
      <div>
        <RingLoader
          loading={this.state.loading}
          sizeUnit={"px"}
          size={250}
          color={"#4A90E2"}
        />
      </div>
      <h4 style={{ color: "white" }}>
                <TextLoop speed={3500} adjustingSpeed={10} mask={false}>
                  <span>Looking for input in database...</span>
                  <span>Performing some mathematics...</span>
                  <span>Drawing pretty graphics...</span>
                  <span>Exploring the wonders of the bioinformatics universe...</span>
                  <span>Be patient...</span>
                </TextLoop>
              </h4>
            </div>
            {/* <button
              className="btn btn-danger"
              onClick={this.props.displayLoading}
            >
              Abort Analysis
            </button> */}
          </div>
    );
  }
}
