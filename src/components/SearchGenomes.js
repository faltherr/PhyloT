import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/searchGenomes.css'
import { searchTableData } from './data/data'
import { setSearchValues, setSelectedGenome, addToCollection } from '../reducers/mainReducer'


let SearchGenomes = props => {

    // Here we dynamically filter the returned values from the search bar
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

    //This will check the sample array and the collection array for the same value and only add the value if it is not present
    let handleAddToCollection = (genome, arr) => {
        let found = false;
        for(let i = 0; i < arr.length; i++){
            console.log(22222,arr)
            if(arr[i].TaxID === genome.TaxID )
            found = true
            break
        }
        if(!found){
            props.addToCollection(genome)
            toast.success(`Added ${genome.GenomeName} to collection. Close the window to review.`)
        } else {
            // maybe use toast here to alert user that genome is in collection
            toast.error(`${genome.GenomeName} already in collection!`)
        }
    }


    // console.log('search option array', props.taxIdSearch)
    // console.log('Collection', props.collection)
    return(
        <div className='taxonomy-search-modal'>
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
                    <input id='genome-searchbar' placeholder='Enter a taxonomic name or ID' onChange = {(e) => handleChange(e)} ></input>
                    <div className='genome-selector-box'>
                        {props.taxIdSearch.map(element =>{
                            return <div key ={element.TaxID} onClick={()=>props.setSelectedGenome(element)}>{element.GenomeName}</div>
                        })}
                    </div>
                </div>
                    </div>
                    <div className='user-input-review-container'>
                    {
                        props.selectedGenome.GenomeName
                        ?
                        <div className='search-selection-review'>
                            <p>You selected: {props.selectedGenome.GenomeName} </p>
                            <p>This contains: {props.selectedGenome.numberOfGenomes} genomes</p>

                            {/* /* conditionally render a box that will display if the user has selected one genome that allows them to adjust the number of genomes in sample */}
                        </div>
                        :
                        null
                    }
                    
            </div>
                <div className='genome-selection-button-container'>
                    <button disabled={props.selectedGenome.length===0} className='btn btn-info' onClick={()=>handleAddToCollection( props.selectedGenome, props.collection)}>Add to Collection</button>
                    <button className='btn btn-danger' onClick={()=>props.closeModalFn('isSearchModalOpen')}>Close</button>
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
        setSelectedGenome,
        addToCollection})(SearchGenomes)