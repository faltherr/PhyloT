import React, {Fragment} from "react";
import "../styles/platformselector.css";
import { connect } from 'react-redux'
import {setInputType, setInputChecked} from '../reducers/mainReducer'
import BiomSelector from '../components/BIOMSelector'
import ExistingProject from '../components/ExistingProject'

const PlatformSelector = props => {
  
  // This function shows and hides components based on user selection for input type.
  let displayContent = () => {
        if (props.inputType === 'biom'){
            return <BiomSelector/>
        } else if (props.inputType === 'existingProject') {
            return <ExistingProject/>
        }
    }

    // This is a click handler for the input type. Use it to hold the value and for adjusting styles for clicked selections.
    let handleClickInput = (name) => {
      props.setInputType(name)
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

        <div className={`project-name${props.inputType === 'biom' ? '-clicked' : ''}`} onClick={() => handleClickInput('biom')}>
          <h2 >BIOM File</h2>
        </div>
        <div className={`project-name${props.inputType === 'newProject' ? '-clicked' : ''}`} onClick={() => handleClickInput('newProject')}>
          <h2 >New Metagenome Project</h2>
        </div>
        <div className={`project-name${props.inputType === 'existingProject' ? '-clicked' : ''}`} onClick={() => handleClickInput('existingProject')}>
          <h2 >Existing Metagenome Project</h2>
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
