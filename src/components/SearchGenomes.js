import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/searchGenomes.css'
import { searchTableData } from './data/data'
import { setSearchValues, setSelectedGenome } from '../reducers/mainReducer'


let SearchGenomes = props => {

    let handleChange = (event) => {
        let searchValue = event.target.value.toLowerCase()
        let options = searchTableData
        options = options.filter(item => {
            return(
                item.GenomeName.toLowerCase().search(searchValue) !== -1
                ||
                item.TaxID.toString().search(searchValue) !== -1
            )
        })
        props.setSearchValues(options)
    }



    console.log('search option array', props.taxIdSearch)
    return(
        <div>
            <h2> Search For Genomes </h2>
            <div className='genome-selection-ui-container'>
                {/* <div className='taxonomic-grouping-container'>
                    <h3>Filter By:</h3>
                    <h4>Kingdom</h4>
                    <h4>Phylum</h4>
                    <h4>Class</h4>
                    <h4>Order</h4>
                    <h4>Family</h4>
                    <h4>Genus</h4>
                    <h4>Species</h4>
                </div> */}
                <div className='search-box-container'>
                    <input placeholder='Enter a taxonomic name or ID' onChange = {(e) => handleChange(e)}></input>
                    <div className='genome-selector-box'>
                        {props.taxIdSearch.map(element =>{
                            return <div key ={element.TaxID} onClick={()=>props.setSelectedGenome(element)}>{element.GenomeName}</div>
                        })}
                    </div>
                </div>
                    <div className='user-input-review-container'>
                    {
                        props.selectedGenome.GenomeName
                        ?
                        <div>
                            <h4>You selected: {props.selectedGenome.GenomeName} </h4>
                            <h4>This contains: {props.selectedGenome.numberOfGenomes} genomes</h4>
                            <button className='btn btn-info'>Add to Collection</button>
                            {/* /* conditionally render a box that will display if the user has selected one genome that allows them to adjust the number of genomes in sample */}
                        </div>
                        :
                        null
                }
                    </div>
            </div>
                <div className='genome-selection-button-container'>
                    <Link to='sample_review' >
                        <button className='btn btn-success'>Review Sample and Generate Synthetic Data</button>
                    </Link>
                    <button className='btn btn-danger' onClick={props.onCloseSearchModal}>Close</button>
                </div>
        </div>
    )
}

let mapStateToProps = state => {
    return(
        state
    )
}

export default connect(
    mapStateToProps, 
        {setSearchValues, 
        setSelectedGenome})
    (SearchGenomes)