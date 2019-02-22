import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DebounceInput } from 'react-debounce-input'
import{ Badge } from 'react-bootstrap'

import Checkbox from '../utilities/Checkbox'

//Placeholder data
import { ref_genomes } from '../data/ref_genome_subset_v5'

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
        let filteredOptions = options.filter(item => {
            return(
                item.comboID.toLowerCase().search(searchValue) !== -1
                // ||
                // item.taxid.toString().search(searchValue) !== -1
            )
        })
        props.setSearchValues(filteredOptions)
    }

    //This will check the sample array and the collection array for the same value and only add the value if it is not present
    let handleAddToCollection = (genome, arr) => {
        let found = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i].comboID === genome.comboID )
            found = true
            break
        }
        if(!found){
            props.addToCollection(genome)
            toast.success(`Added ${genome.organism_name} to collection. Close the window to review.`)
        } else {
            // Use toast here to alert user that genome is in collection
            toast.error(`${genome.organism_name} already in collection!`)
        }
    }

    return(
        <div className='taxonomy-search-modal'>
            <h2> Search For Genomes </h2>
            <div className='genome-selection-ui-container'>
                <div className='search-box-container'>
                    <DebounceInput id='genome-searchbar' debounceTimeout={0} placeholder='Enter a taxonomic name or ID' onChange = {(e) => handleChange(e)} /> <Badge variant="dark">{`${props.filteredGenomes.length} genome${props.filteredGenomes.length !== 1 ? 's' : ''} to choose from`}</Badge>
                    <div className='genome-selector-box'>
                        <div id='genome-selector-box-header'>
                            <p style={{fontWeight:'bold'}}>Genome Name(Taxonomic ID)</p>
                            <p style={{justifySelf:'center', fontWeight:'bold'}}>Add as a spike in?</p>
                        </div>
                        <div id='genome-selector-box-body'>
                            {props.filteredGenomes.map((element, i) =>{
                                return (
                                <div id='genome-selector-box-element-container' key={`${element.comboID}${i}`} className={props.selectedGenome.comboID === element.comboID ? 'clicked' : null}>
                                    <div className={`genome-search-list-item`} key ={`${element.comboID}${i}`} onClick={()=>props.setSelectedGenome(element)}>
                                        <p>{`${element.organism_name}(${element.taxid})`}</p>
                                        <div id='search-list-item-small-details'>
                                            <small> &nbsp; Genomes:{element.speciesNumGenome === 'na' ? 'N/A' : element.speciesNumGenome}  &nbsp; Pathogen: {element.pathogen === 0 ? 'No' : 'Yes'} </small>
                                            <small> &nbsp; Submitter: {element.submitter} </small>
                                            <small> &nbsp; ASM(UID): {element.gbrs_paired_asm}  </small>
                                        </div>
                                    </div>
                                    <Checkbox style={{alignSelf:'center', justifySelf:'center'}}/>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                    </div>
                    <div className='user-input-review-container'>
                    {
                        props.selectedGenome.organism_name
                        ?
                        <div className='search-selection-review'>
                            <p>You selected: {props.selectedGenome.organism_name} </p>
                            <p>This contains: {props.selectedGenome.speciesNumGenome} genomes</p>

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