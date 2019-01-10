import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../styles/searchGenomes.css'

export default class SearchGenomes extends Component{
    render(){
        return(
            <div>
                <h2> Search For Genomes </h2>
                <div className='genome-selection-ui-container'>
                    <div className='taxonomic-grouping-container'>
                        <h3>Filter By:</h3>
                        <h4>Kingdom</h4>
                        <h4>Phylum</h4>
                        <h4>Class</h4>
                        <h4>Order</h4>
                        <h4>Family</h4>
                        <h4>Genus</h4>
                        <h4>Species</h4>
                    </div>
                    <div className='search-box-container'>
                        <input placeholder='Enter a taxonomic name or ID'></input>
                        <div className='genome-selector-box'></div>
                    </div>
                    <div className='user-input-review-container'>
                        <h4>You selected: (Insert genome here) </h4>
                        <h4>This contains: (Insert number here) genomes</h4>
                        <button className='btn btn-info'>Add to Collection</button>
                        {/* conditionally render a box that will display if the user has selected one genome that allows them to adjust the number of genomes in sample */}
                    </div>
                </div>
                    <div className='genome-selection-button-container'>
                        <Link to='sample_review' >
                            <button className='btn btn-success'>Review Sample and Generate Synthetic Data</button>
                        </Link>
                        <button className='btn btn-danger' onClick={this.props.onCloseSearchModal}>Close</button>
                    </div>
            </div>
        )
    }
}