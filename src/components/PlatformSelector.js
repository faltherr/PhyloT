import React from "react";
import "../styles/platformselector.css";

const PlatformSelector = props => {
  return (
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
  );
};

export default PlatformSelector;
