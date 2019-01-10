import React, {Component} from 'react'
import Modal from 'react-responsive-modal'
import {Link} from 'react-router-dom'

import SearchGenomes from './SearchGenomes'
import phylo_tree from '../images/phylo_tree.png'
import stack_files from '../images/stack_files.png'
import '../styles/communityInput.css'

export default class CommunitySelector extends Component{
    constructor(){
        super()
            this.state = {
                openTreeModal: false,
                openSearchModal: false
            }
    }

    onOpenTreeModal =() => {
        this.setState({openTreeModal: true})
    }

    onCloseTreeModal =() => {
        this.setState({openTreeModal: false})
    }

    onOpenSearchModal =() => {
        this.setState({openSearchModal: true})
    }

    onCloseSearchModal =() => {
        this.setState({openSearchModal: false})
    }

    render(){
        const {openTreeModal, openSearchModal} = this.state;
        return(
            <div className='community-selector-main-container'>
                <h1>Build a Custom Genome</h1>
                <p>Select a serch method below and add genomes to your community profile. Then, review the sample and run the synthetic data processor. </p>
                <div className='community-selector-card-container' >
                    <div className='data-option-card' onClick={this.onOpenTreeModal}>
                        <img src={phylo_tree} alt='phylogenetic tree' className='card-icon' />
                            <div className='card-text-container'>
                                <h4><b>Select Genomes from Phylogenetic Tree</b></h4>
                                <p>Select this option if you want to use the graphical phylogenetic tree selector.</p>
                            </div>
                    </div>
                    <div className='data-option-card' onClick={this.onOpenSearchModal}>
                        <img src={stack_files} alt='phylogenetic tree' className='card-icon' />
                            <div className='card-text-container'>
                                <h4><b>Select Genomes by Taxonomy or Name</b></h4>
                                <p>Select this option to search through the genome database.</p>
                            </div>
                    </div>
                </div>
                <br/>
                <Link to='sample_review' >
                    <button className='btn btn-success'>Review Sample and Generate Synthetic Data</button>
                </Link>
                <Modal open={openTreeModal} onClose={this.onCloseTreeModal} >
                    <h2>Tree Modal</h2>
                </Modal>

                <Modal open={openSearchModal} onClose={this.onCloseSearchModal} >
                    <SearchGenomes onCloseSearchModal={this.onCloseSearchModal}/>
                </Modal>
            
            </div>
        )
    }
}