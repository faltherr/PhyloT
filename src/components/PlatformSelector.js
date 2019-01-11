import React, {Fragment} from "react";
import "../styles/platformselector.css";
import { connect } from 'react-redux'
import {setInputType, setInputChecked} from '../reducers/mainReducer'
import BiomSelector from '../components/BIOMSelector'

const PlatformSelector = props => {
    
  let displayContent = () => {
        if (props.inputType === 'biom'){
            return <BiomSelector/>
        } else if (props.inputType === 'existingProject') {
            return <p>Exisiting Project Selector</p>
        }
    }

    let handleClick = (name) => {
      props.setInputType(name)
      // props.setInputChecked()
    }

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

        <div className={`project-name${props.inputType === 'biom' ? '-clicked' : ''}`}>
          <h2 onClick={() => handleClick('biom')}>BIOM File</h2>
        </div>
        <div className={`project-name${props.inputType === 'newProject' ? '-clicked' : ''}`}>
          <h2 onClick={() => handleClick('newProject')}>New Metagenome Project</h2>
        </div>
        <div className={`project-name${props.inputType === 'existingProject' ? '-clicked' : ''}`}>

          <h2 onClick={() => handleClick('existingProject')}>Existing Metagenome Project</h2>
        </div>
      </div>
        {displayContent()}
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

export default connect(mapStateToProps, {setInputType, setInputChecked}) (PlatformSelector);
