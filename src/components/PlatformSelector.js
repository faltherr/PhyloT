import React, {Fragment} from "react";
import "../styles/platformselector.css";
import { connect } from 'react-redux'
import {setInputType} from '../reducers/mainReducer'

const PlatformSelector = props => {
    console.log('props', props)
  return (
    <Fragment>
    <div className="platform-container">
      <h2>Select a Sequencing Platform</h2>
      <div className="platform-selection-container">
        <div className="platform-selector">
          <div className="platform-name" id='illumina'>
            <h2>Illumnia</h2>
          </div>
          <div className="platform-name">
            <h2>Nanopore</h2>
          </div>
          <div className="platform-name">
            <h2>PacificBio</h2>
          </div>
        </div>

        <div className="platform-options">
          <div className="radio-button-text-container">
            <input type="radio" name="model" />
            <p>Default Metagenome Model</p>
          </div>
          <div className="radio-button-text-container">
            <input type="radio" name="model" />
            <p>Custom Trained Model</p>
          </div>
        </div>
      </div>
    </div>
    <div className="input-type-container">
    <h2>Select a Genome Input Type</h2>
    <div className="input-selection-container">
      <div className="input-selector">
        <div className="project-name">
          <h2 onClick={() => props.setInputType('biom')}>BIOM File</h2>
        </div>
        <div className="project-name">
          <h2 onClick={() => props.setInputType('newProject')}>New Metagenome Project</h2>
        </div>
        <div className="project-name">
          <h2 onClick={() => props.setInputType('existingProject')}>Existing Metagenome Project</h2>
        </div>
      </div>
    </div>
  </div>
  </Fragment>
  );
};

let mapStateToProps = state => {
    return (
        state
    )
}

export default connect(mapStateToProps, {setInputType}) (PlatformSelector);
