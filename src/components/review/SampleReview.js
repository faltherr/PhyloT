import React, { Component } from "react";
import "react-table/react-table.css";
import { connect } from "react-redux";

import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";

import SampleReviewTable from "./SampleReviewTable";

import krona_mock from "../../images/krona_mock.png";
import "../../styles/sampleReview.css";

// React component for table results

class SampleReview extends Component {
  constructor() {
    super();
    this.state = {
      openReviewModal: false,
      openKronaPlotModal: false,
      totalReads: "N/A",
      totalGenomes: "N/A"
    };
  }

  // The following code block is disabled until we have the data necessary to perform the summary calculations

  // componentDidMount = () => {
  //     this.totals(this.state.genomes)
  // }

  // componentDidUpdate = (prevProps, prevState) => {
  //     if ( this.state.genomes !== prevState.genomes){
  //         this.totals(this.state.genomes)
  //     }
  // }

  // totals = (data) => {
  //     // let readSum = genomes.reduce((a,b) => ({reads: a.reads + b.reads}))
  //     let readSum = 0
  //     let genomeSum = 0
  //     this.state.genomes.forEach(element=>{
  //         readSum += +element.reads
  //         genomeSum += +element.numberGenome
  //     })

  //     this.setState({
  //         totalReads: readSum,
  //         totalGenomes: genomeSum
  //     })
  // }

  openReviewModal = () => {
    this.setState({
      openReviewModal: true
    });
  };

  closeReviewModal = () => {
    this.setState({
      openReviewModal: false
    });
  };

  openKronaPlotModal = () => {
    this.setState({
      openKronaPlotModal: true
    });
  };

  closeKronaPlotModal = () => {
    this.setState({
      openKronaPlotModal: false
    });
  };

  render() {
    return (
      <div className="sample-review-page-container">
        <h1>Review Your Sample</h1>
        <div
          className="review-sample-button-container"
          style={{ display: "flex" }}
        >
          <Link to="/generate/customize">
            <button className="btn btn-success">Add More Genomes</button>
          </Link>
          <Link to="/generate">
            <button className="btn btn-danger">Reset Sample</button>
          </Link>
        </div>
        <SampleReviewTable />

        <p>Total Reads: {this.state.totalReads} </p>
        <p>Total Genomes: {this.state.totalGenomes}</p>

        <p>Choose a Statistical Distribution:</p>
        <select>
          <option value="0">Equal Distribution</option>
          <option value="1">Uniform Distribution</option>
          <option value="2">Normal Distribution</option>
          <option value="3">Log Normal Distribution</option>
        </select>
        <div>
          <button className="btn btn-info" onClick={this.openKronaPlotModal}>
            Explore Sample Distribution
          </button>
          <Modal
            open={this.state.openKronaPlotModal}
            onClose={this.closeKronaPlotModal}
          >
            <h2>Krona Plot Placeholder</h2>
            <img
              src={krona_mock}
              alt="krona_plot"
              style={{ height: "700px", width: "auto" }}
            />
          </Modal>
          <button className="btn btn-success" onClick={this.openReviewModal}>
            Run Simulation (Execute Py Script)
          </button>
          <Modal
            open={this.state.openReviewModal}
            onClose={this.closeReviewModal}
          >
            <h2>Other Inputs Prior to Analysis??</h2>
            <p>Close this window and setup another analysis</p>
            <br />
            <p>OR</p>
            <br />
            <p>Wait for analysis to complete</p>
            <div>
              <Link to="/results">
                <button className="btn btn-success">Go to OutputPage</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={this.closeReviewModal}
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {}
)(SampleReview);
