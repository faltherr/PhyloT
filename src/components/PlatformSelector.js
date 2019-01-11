import React from "react";
import "../styles/platformselector.css";

const PlatformSelector = props => {
  return (
    <fragment>
    <div className="platform-container">
      <h2>Select a Sequencing Platform</h2>
      <div className="platform-selection-container">
        <div className="platform-selector">
          <div className="platform-name">
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
  </fragment>
  );
};

export default PlatformSelector;
