import React, {Fragment} from "react";
import "../styles/platformselector.css";
import { connect } from 'react-redux'
// import {OverlayTrigger} from 'react-bootstrap'
import {setInputType, setInputChecked, setReadModel} from '../reducers/mainReducer'
import BiomSelector from '../components/BIOMSelector'
import ExistingProject from '../components/ExistingProject'
import CustomModel from '../components/CustomModel'
// import TooltipBS from '../components/Tooltip'

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

    let handleClickModel = (model) => {
      props.setReadModel(model)
    }

    // let getToolTip = (text) => {
    //   return <TooltipBS text/>
    // }

    console.log('props', props)
    

  return (
    <Fragment>
    <div className="platform-container">
      <h2>Select a Sequencing Platform</h2>
      <div className="platform-selection-container">
        <div className="platform-selector">
          <div className="platform-name-clicked" id='illumina'>
            <h2>Illumnia</h2>
          </div>
          <div className="platform-name">
            {/* <OverlayTrigger placement='right' overlay={getToolTip('Nanopore')}/> */}
              <h2>Nanopore</h2>
            {/* <OverlayTrigger/> */}
          </div>
          <div className="platform-name">
            <h2>PacificBio</h2>
          </div>
        </div>

        <div className="model-selection-container">
          <div className={`model-name${props.readModel === 'default' ? '-clicked' : ''}`} onClick={() => handleClickModel('default')}>
            {/* <input type="radio" name="model" /> */}
            <h2>Default Model</h2>
          </div>
          <div className={`model-name${props.readModel === 'custom' ? '-clicked' : ''}`} onClick={() => handleClickModel('custom')}>
            {/* <input type="radio" name="model" /> */}
            <h2>Upload Custom Model</h2>
          </div>
          {
                props.readModel === 'custom'
                ?
                <CustomModel/>
                :
                null
              }
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

export default connect(mapStateToProps, {setInputType, setInputChecked, setReadModel}) (PlatformSelector);
