import React, { Component } from "react";
import { connect } from "react-redux";
import SingleSelect from "../utilities/SingleSelect";
import Checkbox from "../utilities/Checkbox";
import Modal from "react-responsive-modal";
import SearchGenomes from './SearchGenomes'
import PhyloTreeSelector from './PhyloTreeSelector'
import CollectionTable from './CollectionTable'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { addToGenomeSample, resetCollection, getGenomes } from '../../reducers/mainReducer'

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

  componentDidMount(){
    this.props.getGenomes()
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

  handleAddGenomesToSample = (genomes) => {
    this.props.addToGenomeSample(genomes)
    let count = this.props.collection.length
    toast.success(`Added ${count} genomes to collection. Add more genomes or continue to review.`)
    this.props.resetCollection()
  }

  render() {
    return (
      <div className="wrapper">

        <div id='customize-page-header'>
          <h1>Select Genomes from NCBI's RefSeq</h1>
        </div>

        <div className="nested-search-parameters-container">
            <div className='form-header-container'>
              <h3>Search all available genomes by taxonomy or select from a phylogenetic tree</h3>
            </div>
            <div id="search-parameters-container">
              
              <div id="search-parameters-filters">
                  <h4>Select a Super Kingdom</h4>
                  <div id='search-filter-options-container'>
                    <SingleSelect optionName={superKingdomOptions} />
                    <label className="checkbox-label-style">
                      <Checkbox />
                      &nbsp; Exclude pathogens from this selection
                    </label>
                  </div>
              </div>

              <div id='search-parameters-methods'>
                <h4 style={{alignSelf:'center'}}> Choose a selection method </h4>
                <div className='genome-search-modal-button-container'>
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
              </div>
            </div>
          </div>
        
        <div id='sample-review-table'>
        <div className='form-header-container'>
          <h3>Selected genomes staged to review</h3>
        </div>
        <div style={{ maxHeight: "230", overflow:"scroll" }} id='table-container'>
          <CollectionTable/>
        </div>
        </div>

        <div className= 'customize-button-container'>
          <button id='add-genomes-to-sample-button' type="button" className="btn btn-success" onClick={()=>this.handleAddGenomesToSample(this.props.collection)}>
            Add Selected Genome(s) to Sample
          </button>
          <Link to ='/generate/review'>
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

export default connect(mapStateToProps, {addToGenomeSample, resetCollection, getGenomes})(CustomizeContainer);
