import React, { Fragment } from "react";
import { connect } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import {OverlayTrigger} from 'react-bootstrap'
import {
  setInputType,
  setInputChecked,
  setReadModel
} from "../../reducers/mainReducer";
import BiomSelector from "./BIOMSelector";
import ExistingProject from "./ExistingProject";
import { CSSTransitionGroup } from "react-transition-group";
import CustomModel from "./CustomModel";
import "../../styles/platformselector.css";

// This function is the container component for the platform selector part of the form

const PlatformSelector = props => {
  // This block of code sets up the rendering show/hide animations for form
  //This is the conditional logic for custom models
  let customModelChild = undefined;
  if (props.readModel === "custom") {
    customModelChild = <CustomModel key="cutom-model" />;
  } else {
    customModelChild = null;
  }

  // This is the conditional logic for the type of genomes that will be input
  let inputTypeChild = undefined;
  if (props.inputType === "biom") {
    inputTypeChild = <BiomSelector key="biom" />;
  } else if (props.inputType === "existingProject") {
    inputTypeChild = <ExistingProject key="existing" />;
  } else {
    inputTypeChild = null;
  }

  // This is a click handler for the input type. Use it to hold the value and for adjusting styles for clicked selections.
  let handleClickInput = name => {
    props.setInputType(name);
  };

  let handleClickModel = model => {
    props.setReadModel(model);
  };

  console.log("props", props);

  return (
    <Fragment>
      <div className="platform-container">
        <h2>Select a Sequencing Platform</h2>
        <div className="platform-selection-container">
          <div className="platform-selector">
            <div className="platform-name-clicked" id="illumina">
              <h2>Illumnia</h2>
            </div>
            <div className="platform-name">
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    id={"nanopore-inactive-description"}
                    className="platform-tooltip"
                  >
                    This sequencing platform is under development but currently
                    unavailable.
                  </Tooltip>
                }
              >
                <h2>Nanopore</h2>
              </OverlayTrigger>
            </div>
            <div className="platform-name">
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    id={"nanopore-inactive-description"}
                    className="platform-tooltip"
                  >
                    This sequencing platform is under development but currently
                    unavailable.
                  </Tooltip>
                }
              >
                <h2>PacificBio</h2>
              </OverlayTrigger>
            </div>
          </div>
        </div>

        <div className="model-selection-container">
        <h2>Upload a Model or Use SeqSim's Default </h2>
        {/*  */}
          <div className='model-option-container'>
          <div
            className={`model-name${
              props.readModel === "default" ? "-clicked" : ""
            }`}
            onClick={() => handleClickModel("default")}
          >
            <h2>Default Model</h2>
          </div>
          <div
            className={`model-name${
              props.readModel === "custom" ? "-clicked" : ""
            }`}
            onClick={() => handleClickModel("custom")}
          >
            <h2>Upload Custom Model</h2>
          </div>
          </div>
          <CSSTransitionGroup
            transitionName="type-fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {customModelChild}
          </CSSTransitionGroup>
        </div>
      </div>

      <div className="input-type-container">
        <h2>Select a Genome Input Type</h2>
        <div className="input-selection-container">
          <div className="input-selector">
            <div
              id="biom-selector"
              className={`project-name${
                props.inputType === "biom" ? "-clicked" : ""
              }`}
              onClick={() => handleClickInput("biom")}
            >
              <h2>BIOM File</h2>
            </div>
            <div
              className={`project-name${
                props.inputType === "newProject" ? "-clicked" : ""
              }`}
              onClick={() => handleClickInput("newProject")}
            >
              <h2>New Metagenome Project</h2>
            </div>
            <div
              id="prev-proj-selector"
              className={`project-name${
                props.inputType === "existingProject" ? "-clicked" : ""
              }`}
              onClick={() => handleClickInput("existingProject")}
            >
              <h2>Existing Metagenome Project</h2>
            </div>
          </div>
          {/* Render the genome input type selection with this block*/}
          <CSSTransitionGroup
            transitionName="type-fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {inputTypeChild}
          </CSSTransitionGroup>
        </div>
      </div>
    </Fragment>
  );
};

let mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { setInputType, setInputChecked, setReadModel }
)(PlatformSelector);
