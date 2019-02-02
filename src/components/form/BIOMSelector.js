import React, { Component } from "react";
import FilteredMultiSelect from "react-filtered-multiselect";
import Dropzone from "react-dropzone";
import { connect } from 'react-redux'

//Local components
import {setBiomFile} from '../../reducers/mainReducer'

//Styles
import "../../styles/biomInput.css";


//This component allows the user to upload a BIOM file or select from several hosted options
class BiomSelector extends Component {
  constructor() {
    super();
    this.state = {
      selected_file: [],
      biom_files: [
        { value: 1, text: "Coastal" },
        { value: 2, text: "Oceanic" },
        { value: 3, text: "Fecal" },
        { value: 4, text: "Saliva" }
      ]
    };
  }

  handleChangeFile = selected_file => {
    this.setState({ selected_file });
  };

  handleDeselect(index) {
    var selected_file = this.state.selected_file.slice();
    selected_file.splice(index, 1);
    this.setState({ selected_file });
  }

  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      const currentRejectFile = rejectedFiles[0];
      const currentRejectFileType = currentRejectFile.type;
      if (currentRejectFileType !== ".png") {
        alert("This file type is not accepted.");
      }
    } else {
        this.props.setBiomFile(files)
    }
  };

  render() {
    const { selected_file } = this.state;
    return (
      <div id='biom-main-container' className={this.props.inputType==='biom'?'slideOut':'slideIn'}>

        <div className="selection-main-container">
          <div className="file-uploader-container">
            <h2>Upload a BIOM File</h2>
            <Dropzone
              onDrop={this.handleOnDrop}
              className="dropzone-file-uploader"
              accept="image/png"
              multiple={false}
              acceptStyle={{ border: "2px solid green" }}
              rejectStyle={{ border: "2px solid red" }}
            >
            {
                this.props.biomFile.length === 0
                ?
                <div className="file-uploader">
                    <i
                    className="fas fa-cloud-upload-alt"
                    style={{ fontSize: "48px" }}
                    />
                    <p>Drag and Drop a BIOM file here</p>
                    <button>Browse files</button>
                    <br />
                    <p>Only *.biom files will be accepted</p>
                </div>
                :
                <div className="file-uploader">
                    <i
                    className="fas fa-check-circle"
                    style={{ fontSize: "48px", color: "green" }}
                    />
                    <p>Files type accepted. You're Good to Go!</p>
                </div>
            }
            </Dropzone>
          </div>
          <h2>OR</h2>
          <div className="select-file-contianer">
            <h2>Select a BIOM File from the list below</h2>
            <FilteredMultiSelect
              onChange={this.handleChangeFile}
              options={this.state.biom_files}
              showFilter={false}
            />
            {selected_file.length === 0 && <p>(nothing selected yet)</p>}
            {selected_file.length > 0 && (
              <div>
                {selected_file.map((file, index) => {
                  return (
                    <p key={file.value}>Selected BIOM file: {file.text}</p>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
    return(
        state
    )
}

export default connect(mapStateToProps, {setBiomFile})(BiomSelector)