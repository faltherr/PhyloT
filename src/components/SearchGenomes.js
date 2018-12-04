import React, {Component} from 'react'
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
                        {/* conditionally render a box that will display if the user has selected one genome that allows them to adjust the number of genomes in sample */}
                    </div>
                </div>
                    <div className='genome-selection-button-container'>
                        <button>Add to Collection</button>
                        <button>Review or Edit Sample</button>
                    </div>
            </div>
        )
    }
}