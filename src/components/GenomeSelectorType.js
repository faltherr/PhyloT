import React from "react";
import "../styles/genomeselectortype.css";

const GenomeSelectorType = props => {
  return (
    <div className="input-type-container">
      <h2>Select a Genome Selection Type</h2>
      <div className="input-selection-container">
        <div className="input-selector">
          <div className="input-name">
            <h2>BIOM File</h2>
          </div>
          <div className="input-name">
            <h2>New Metagenome Project</h2>
          </div>
          <div className="input-name">
            <h2>Existing Metagenome Project</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenomeSelectorType
