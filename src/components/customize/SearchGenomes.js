import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Placeholder data
import { searchTableData } from '../data/data'
import { ref_genomes } from '../data/ref_genome_subset'

//Reducer action creators
import { setSearchValues, setSelectedGenome, addToCollection } from '../../reducers/mainReducer'

//Stlyes
import '../../styles/searchGenomes.css'

//This functional component handles the searchbar functionality
let SearchGenomes = props => {
    // Here we dynamically filter the returned values from the search bar
    let handleChange = (event) => {
        let searchValue = event.target.value.toLowerCase()
        let options = ref_genomes
        options = options.filter(item => {
            return(
                item.organism_name.toLowerCase().search(searchValue) !== -1
                ||
                item.taxid.toString().search(searchValue) !== -1
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
            // Use toast here to alert user that genome is in collection
            toast.error(`${genome.GenomeName} already in collection!`)
        }
    }
    return(
        <div className='taxonomy-search-modal'>
            <h2> Search For Genomes </h2>
            <div className='genome-selection-ui-container'>
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