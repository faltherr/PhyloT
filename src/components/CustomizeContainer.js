import React, {Component} from 'react'
import { connect } from 'react-redux'
import SingleSelect from './SingleSelect'
import Checkbox from './Checkbox'

import '../styles/customizercontainer.css'

import { superKingdomOptions } from './data/data'

class CustomizeContainer extends Component{
    render(){
        return(
            <div className='wrapper'>
                <div style={{backgroundColor:'green'}}>
                    <h1>Select a genome from NCBI's RefSeq</h1>
                </div>
                <div className='nested-search-parameters-container' style={{ backgroundColor:'grey'}}>
                    <div>
                        <h4>Select Super Kingdom</h4>
                        <div className='kingdom-pathogen-selection-container'>
                            <SingleSelect optionName={superKingdomOptions}/>
                            <label className = 'checkbox-label-style'>
                                <Checkbox/>
                                   Exclude pathogens from this selection
                            </label> 
                        </div> 
                    </div>
                    <div>
                        <h4>Provide TaxId and number of genomes for random selection from this TaxID</h4>
                        {/* Consider doing a popup modal here for both 'smartsearch' and 'taxonomic tree' options */}
                        <label> Enter a Taxonomic Name<input/> </label>
                        <button type='button' className='btn btn-info'>Select Node from Taxonomic Tree</button>
                    </div>
                    {/* This div will contain the returned values */}
                    <div>
                        <h4>Taxonomic ID</h4>
                        <h4>Number of Genomes</h4>
                        <button type='button' className='btn btn-success'>Add Genomes to Cart</button>
                    </div>
                </div> 
                <div style={{ backgroundColor:'yellow'}}>Table (cart) Placeholder</div>
                <div style={{ backgroundColor:'pink'}}>
                    <button type='button' className='btn btn-success'>Add Selected Genomes to Sample</button>
                    <button type='button' className='btn btn-info'>Review Sample</button>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state =>{
    return(
        state
    )
}

export default connect(mapStateToProps)(CustomizeContainer)