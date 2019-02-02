import React, { Component } from "react";
import { connect } from "react-redux";
import SingleSelect from "../utilities/SingleSelect";
import Checkbox from "../utilities/Checkbox";
import Modal from "react-responsive-modal";
import SearchGenomes from './SearchGenomes'
import PhyloTreeSelector from './PhyloTreeSelector'
import CollectionTable from './CollectionTable'
import { Link } from 'react-router-dom'

import { addToGenomeSample } from '../../reducers/mainReducer'

import "../../styles/customizercontainer.css";

import { superKingdomOptions } from "../data/data";

class CustomizeContainer extends Component {
  constructor() {
    super();
    this.state = {
      isSearchModalOpen: false,
      isTreeModalOpen: false
    };
  }

  openModal = (whichModal) => {
    this.setState({
      [`${whichModal}`]: true
    });
  };

  closeModal = whichModal => {
    this.setState({
      [`${whichModal}`]: false
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div>
          <h1>Select Genomes from NCBI's RefSeq</h1>
        </div>
        <div
          className="nested-search-parameters-container"
          // style={{ backgroundColor: "grey" }}
        >
          <div>
            <h4>Select Super Kingdom</h4>
            <div className="kingdom-pathogen-selection-container">
              <SingleSelect optionName={superKingdomOptions} />
              <label className="checkbox-label-style">
                <Checkbox />
                Exclude pathogens from this selection
              </label>
            </div>
          </div>
          <div>
            <h4>
              Provide TaxId and number of genomes for random selection from this
              TaxID
            </h4>
            {/* Consider doing a popup modal here for both 'smartsearch' and 'taxonomic tree' options */}
            <button type="button" className="btn btn-info" onClick={() => this.openModal('isSearchModalOpen')}>
              Search By Taxonomic Name
            </button>
                <Modal id='searchModal' open={this.state.isSearchModalOpen} onClose={() => this.closeModal('isSearchModalOpen')} >
                    <SearchGenomes closeModalFn ={this.closeModal}/>
                </Modal>

            <button type="button" className="btn btn-info" onClick={() => this.openModal('isTreeModalOpen')}>
              Select Node from Taxonomic Tree
            </button>
                <Modal open={this.state.isTreeModalOpen} onClose={() => this.closeModal('isTreeModalOpen')}>
                    <PhyloTreeSelector/>
                </Modal>
          </div>
          {/* This div will contain the returned values */}
        </div>
        <div style={{ maxHeight: "230", overflow:"scroll" }}>
          <CollectionTable/>
        </div>
        <div className= 'customize-button-container'>
          <button type="button" className="btn btn-success" onClick={()=>this.props.addToGenomeSample(this.props.collection)}>
            Add Selected Genome(s) to Sample
          </button>
          <Link to = '/generate/review'>
            <button type="button" className="btn btn-info">
              Review Sample
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {addToGenomeSample})(CustomizeContainer);
