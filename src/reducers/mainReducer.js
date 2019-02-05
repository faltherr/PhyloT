// const SEQ_PLATFORM = 'SEQ_PLATFORM'
const INPUT_TYPE = 'INPUT_TYPE'
const INPUT_TYPE_CHECKED = 'INPUT_TYPE_CHECKED'
const EXISTING_PROJECT_FILE = 'EXISTING_PROJECT_FILE'
const BIOM_FILE = 'BIOM_FILE'
const READ_MODEL = 'READ_MODEL'
const CUSTOM_MODEL = 'CUSTOM_MODEL'
const TAX_ID_SEARCH = 'TAX_ID_SEARCH'
const SET_SELECTED_GENOME = 'SET_SELECTED_GENOME'
const ADD_TO_GENOME_SAMPLE = 'GENOME_SAMPLE'
const RESET_SEARCH = 'RESET_SEARCH'
const ADD_TO_COLLECTION = 'ADD_TO_COLLECTION'
const RESET_COLLECTION = 'RESET_COLLECTION'
const UPDATE_COLLECTION_GENOME_NUMBER = 'UPDATE_COLLECTION_GENOME_NUMBER'
const REMOVE_FROM_COLLECTION = 'REMOVE_FROM_COLLECTION'
const UPDATE_SAMPLE = 'UPDATE_SAMPLE'
const REMOVE_FROM_SAMPLE = 'REMOVE_FROM_SAMPLE'

const initialState = {
    seqPlatform: 'illumina',
    customModel: [],
    inputType: '',
    radioInputClassChecked: false,
    existingProjectFile: [],
    biomFile: [],
    readModel:'default',
    taxIdSearch: [],
    selectedGenome: [],
    collection: [],
    genomeSample: []
}

export default function mainReducer (state = initialState, action){
    switch (action.type){
        case READ_MODEL:
            return{
                ...state,
                readModel: action.payload
            }
        case CUSTOM_MODEL:
            return{
                ...state,
                customModel: action.payload
            }
        case INPUT_TYPE:
        return{
            ...state,
            inputType: action.payload
        }
        case INPUT_TYPE_CHECKED:
            return{
                ...state,
                radioInputClassChecked: !state.radioInputClassChecked
            }
        case EXISTING_PROJECT_FILE:
            return{
                ...state,
                existingProjectFile: action.payload
            }
        case BIOM_FILE:
            return{
                ...state,
                biomFile: action.payload
            }
        case TAX_ID_SEARCH:
            return{
                ...state,
                taxIdSearch: action.payload
            }
        case SET_SELECTED_GENOME:
            return{
                ...state,
                selectedGenome: action.payload
            }
        case ADD_TO_COLLECTION:
            return{
                ...state,
                collection: [...state.collection, action.payload]
            }
        case ADD_TO_GENOME_SAMPLE:
            return{
                ...state,
                genomeSample: [...state.genomeSample, ...action.payload]
            }
        case RESET_COLLECTION:
            return{
                ...state,
                collection: initialState.collection
            }
        case UPDATE_COLLECTION_GENOME_NUMBER:
            return{
                ...state,
                collection: state.collection.map(genome =>{
                    return(
                        genome.gbrs_paired_asm === action.payload.gbrs_paired_asm
                        ?
                        {...genome, GenomeNumer:action.payload.GenomeNumer}
                        :
                        genome
                    )
                })
            }
        case REMOVE_FROM_COLLECTION:
        return {
            ...state,
            collection: state.collection.filter(genome => genome.gbrs_paired_asm !== action.payload.value)
        }
        case UPDATE_SAMPLE:
            return{
                ...state,
                genomeSample: state.genomeSample.map(genome => {
                    return(
                        genome.gbrs_paired_asm === action.payload.value
                        ?
                        {...genome }
                        :
                        genome
                    )
                })
            }
        case REMOVE_FROM_SAMPLE:
            return {
                ...state,
                genomeSample: state.genomeSample.filter(genome => genome.gbrs_paired_asm !== action.payload.value)
            }
        case RESET_SEARCH:
            return{
                ...state,
                selectedGenome: initialState.selectedGenome,
                taxIdSearch: initialState.taxIdSearch
            }
        default:
            return state
    }
}

//Manages state of model selected

export function setReadModel(model){
    return{
        type: READ_MODEL,
        payload: model
    }
}

// Manages the model files uploaded

export function setCustomModel(modelFile){
    return{
        type: CUSTOM_MODEL,
        payload: modelFile
    }
}

export function setInputType(value){
    return{
        type: INPUT_TYPE,
        payload: value
    }
}

// Change button style on click event
export function setInputChecked(){
    return{
        type: INPUT_TYPE_CHECKED,
    }
}

// Maintain file upload from exisiting metagenome project
export function setExistingProjectFile(files){
    return{
        type: EXISTING_PROJECT_FILE,
        payload: files
    }
}

//Maintain the file upload from BIOM File selector
export function setBiomFile(files){
    return{
        type: BIOM_FILE,
        payload: files
    }
}

//Update the array of values returned for the search
export function setSearchValues(arrayOfGenomes){
    return{
        type: TAX_ID_SEARCH,
        payload: arrayOfGenomes
    }
}

//The selected genome identifies the taxonomy selected by the user
export function setSelectedGenome(genome){
    return{
        type: SET_SELECTED_GENOME,
        payload: genome
    }
}

//This is the sample that will be displayed on the review page
export function addToGenomeSample(genomes){
    return{
        type: ADD_TO_GENOME_SAMPLE,
        payload: genomes
    }
}

//The collection is a staging area to adjust values prior to adding them to the sample for review
export function addToCollection(genomes){
    return{
        type: ADD_TO_COLLECTION,
        payload: genomes
    }
}

export function resetCollection(){
    return{
        type: RESET_COLLECTION
    }
}

//This action creator will reset the search on modal close or adding to cart
export function resetSearch(){
    return{
        type: RESET_SEARCH
    }
}

//This action will update the number of genomes from a clade
export function updateCollection(genomes){
    return{
        type: UPDATE_COLLECTION_GENOME_NUMBER,
        payload: genomes
    }
}

export function removeFromCollection(uniqueID){
    return{
        type: REMOVE_FROM_COLLECTION,
        payload: uniqueID
    }
}

//This action will update the cell selected by the user in the sample review table
export function updateSample(uniqueID){
    return{
        type: UPDATE_SAMPLE,
        payload: uniqueID
    }
}

export function removeFromSample(uniqueID){
    return{
        type: REMOVE_FROM_SAMPLE,
        payload: uniqueID
    }
}