import React from "react";
import { connect } from "react-redux";
import Dropzone from 'react-dropzone'

import { setExistingProjectFile } from "../reducers/mainReducer";
import "../styles/biomInput.css";

const ExistingProject = props => {
  let handleOnDrop = (files, rejectedFiles) => {
    console.log("These are the files uploading", files);
    
    if (rejectedFiles && rejectedFiles.length > 0) {
      const currentRejectFile = rejectedFiles[0];
      const currentRejectFileType = currentRejectFile.type;
      if (currentRejectFileType !== ".png") {
        alert("This file type is not accepted.");
      }
    } else {
        props.setExistingProjectFile(files)
    }
  };

  return (
    <div>
      <div className="file-uploader-container">
        <h2>Upload a Prior Project's BIOM File</h2>
        <Dropzone
          onDrop={handleOnDrop}
          className="dropzone-file-uploader"
          accept="image/png"
          multiple={false}
          acceptStyle={{ border: "2px solid green" }}
          rejectStyle={{ border: "2px solid red" }}
        >
        {
            props.existingProjectFile.length === 0
            ?
            <div className="biom-file-uploader">
                <i
                className="fas fa-cloud-upload-alt"
                style={{ fontSize: "48px" }}
                />
                <p>Drag & Drop a previous project file here</p>
                <button>Browse files</button>
                <br />
                <p>Only *.biom files will be accepted</p>
            </div>
            :
            <div className="biom-file-uploader">
                <i className="fas fa-check-circle"
                    style={{ fontSize: "48px" , color: "green"}}
                />
                <p>Files type accepted. You're Good to Go!</p>
            </div>


        }

        </Dropzone>
      </div>
    </div>
  );
};

let mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { setExistingProjectFile }
)(ExistingProject);
