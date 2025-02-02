import axios from "axios";

// const SEQ_PLATFORM = 'SEQ_PLATFORM'
const INPUT_TYPE = "INPUT_TYPE";
const INPUT_TYPE_CHECKED = "INPUT_TYPE_CHECKED";
const EXISTING_PROJECT_FILE = "EXISTING_PROJECT_FILE";
const BIOM_FILE = "BIOM_FILE";
const READ_MODEL = "READ_MODEL";
const CUSTOM_MODEL = "CUSTOM_MODEL";
const TAX_ID_SEARCH = "TAX_ID_SEARCH";
const FILTER_GENOMES = "FILTER_GENOMES";
const UPDATE_KINGDOM_FILTER = "UPDATE_KINGDOM_FILTER"
const UPDATE_PATHOGEN_FILTER = "UPDATE_PATHOGEN_FILTER"
const SET_SELECTED_GENOME = "SET_SELECTED_GENOME";
const ADD_TO_GENOME_SAMPLE = "GENOME_SAMPLE";
const RESET_SEARCH = "RESET_SEARCH";
const ADD_TO_COLLECTION = "ADD_TO_COLLECTION";
const RESET_COLLECTION = "RESET_COLLECTION";
const UPDATE_COLLECTION_GENOME_NUMBER = "UPDATE_COLLECTION_GENOME_NUMBER";
const REMOVE_FROM_COLLECTION = "REMOVE_FROM_COLLECTION";
const UPDATE_SAMPLE = "UPDATE_SAMPLE";
const REMOVE_FROM_SAMPLE = "REMOVE_FROM_SAMPLE";
const TOGGLE_SPIKE_IN = "TOGGLE_SPIKE_IN"


// API Requests
const FULFILLED = '_FULFILLED'
const PENDING = '_PENDING'
const REJECTED = '_REJECTED'
const GET_GENOMES = "GET_GENOMES";

const initialState = {
  seqPlatform: "illumina",
  customModel: [],
  inputType: "",
  radioInputClassChecked: false,
  existingProjectFile: [],
  biomFile: [],
  readModel: "default",
  //taxId Search holds the list of all genomes available populated with data transformed from NCBI
  allNcbiGenomes: [],
  //filteredGenomes manages the user selected filters to subset the available data in the search genomes
  filteredGenomes: [],
  kingdomFilter: null,
  pathogenFilter: false,
  //selectedGenome displays the genome selected in the search by taxonomicID box
  selectedGenome: [],
  //The collection is the holding area for genomes that will be added to the final sample
  collection: [],
  //Genome sample is full array of genomes and associated properties that will be posted prior to analysis
  genomeSample: [],
  //This handles the loading state of requests
  pendingRequest: true,
  //This displays error messages that might be returned if the HTTP request fails
  errorMessage: '',
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case READ_MODEL:
      return {
        ...state,
        readModel: action.payload
      };
    case CUSTOM_MODEL:
      return {
        ...state,
        customModel: action.payload
      };
    case INPUT_TYPE:
      return {
        ...state,
        inputType: action.payload
      };
    case INPUT_TYPE_CHECKED:
      return {
        ...state,
        radioInputClassChecked: !state.radioInputClassChecked
      };
    case EXISTING_PROJECT_FILE:
      return {
        ...state,
        existingProjectFile: action.payload
      };
    case BIOM_FILE:
      return {
        ...state,
        biomFile: action.payload
      };
    case TAX_ID_SEARCH:
      return {
        ...state,
        filteredGenomes: action.payload
      };
    case FILTER_GENOMES:
      let newFilterSet = state.allNcbiGenomes.filter(element =>{
        if(state.pathogenFilter && state.kingdomFilter){
            return element.superkingdomName === state.kingdomFilter &&
                   element.pathogen === 0
        } else if (state.pathogenFilter){
            return element.pathogen === 0
        } else if (state.kingdomFilter){
            return element.superkingdomName === state.kingdomFilter
        } else {
            return state.allNcbiGenomes
        }
      })
      return{
          ...state,
          filteredGenomes: newFilterSet
      }
    case UPDATE_KINGDOM_FILTER:
      return{
          ...state,
          kingdomFilter: action.payload
      }
    case UPDATE_PATHOGEN_FILTER:
      return{
          ...state,
          pathogenFilter: !state.pathogenFilter
      }
    case SET_SELECTED_GENOME:
      return {
        ...state,
        selectedGenome: action.payload,
      };
    case TOGGLE_SPIKE_IN:
    // if selectedGenome.length()>0 then change the spike in value in the selected genome
    // Otherwise if the 
      // console.log(state.selectedGenome)
      return{
        ...state,
        selectedGenome: Object.assign({}, state.selectedGenome, {spikeIn:!state.selectedGenome.spikeIn}),
        filteredGenomes: state.filteredGenomes.map(genome => {
          if (genome.comboID !== action.payload){
            return genome
          }
          return {
            ...genome,
            spikeIn: !genome.spikeIn
          }
        })
      }
    case ADD_TO_COLLECTION:
      return {
        ...state,
        collection: [...state.collection, action.payload]
      };
    case ADD_TO_GENOME_SAMPLE:
      return {
        ...state,
        genomeSample: [...state.genomeSample, ...action.payload]
      };
    case RESET_COLLECTION:
      return {
        ...state,
        collection: initialState.collection
      };
    case UPDATE_COLLECTION_GENOME_NUMBER:
      return {
        ...state,
        collection: state.collection.map(genome => {
          return genome.gbrs_paired_asm === action.payload.gbrs_paired_asm
            ? { ...genome, GenomeNumer: action.payload.GenomeNumer }
            : genome;
        })
      };
    case REMOVE_FROM_COLLECTION:
      return {
        ...state,
        collection: state.collection.filter(
          genome => genome.gbrs_paired_asm !== action.payload.value
        )
      };
    case UPDATE_SAMPLE:
      return {
        ...state,
        genomeSample: state.genomeSample.map(genome => {
          return genome.gbrs_paired_asm === action.payload.value
            ? { ...genome }
            : genome;
        })
      };
    case REMOVE_FROM_SAMPLE:
      return {
        ...state,
        genomeSample: state.genomeSample.filter(
          genome => genome.gbrs_paired_asm !== action.payload.value
        )
      };
    case RESET_SEARCH:
      return {
        ...state,
        selectedGenome: initialState.selectedGenome,
        allNcbiGenomes: initialState.allNcbiGenomes
      };

    // API Interactions
    case GET_GENOMES + PENDING:
      return { ...state, pendingRequest: true };
    case GET_GENOMES + FULFILLED:
    let genomeData_modified = action.payload.data.map(genome => {
      genome.comboID = genome.comboID.toLowerCase()
      return genome
    })
    let alphaSortGenomes = genomeData_modified.sort((a,b)=>{
        return a.comboID.localeCompare(b.comboID)
    })
      return {
        ...state,
        allNcbiGenomes: alphaSortGenomes,
        filteredGenomes: alphaSortGenomes,
        errorMessage: "",
        pendingRequest: false
      };
    case GET_GENOMES + REJECTED:
      return {
        ...state,
        allNcbiGenomes: [],
        errorMessage: action.payload
      };

    // Default case
    default:
      return state;
  }
}

//Manages state of model selected

export function setReadModel(model) {
  return {
    type: READ_MODEL,
    payload: model
  };
}

// Manages the model files uploaded

export function setCustomModel(modelFile) {
  return {
    type: CUSTOM_MODEL,
    payload: modelFile
  };
}

export function setInputType(value) {
  return {
    type: INPUT_TYPE,
    payload: value
  };
}

// Change button style on click event
export function setInputChecked() {
  return {
    type: INPUT_TYPE_CHECKED
  };
}

// Maintain file upload from exisiting metagenome project
export function setExistingProjectFile(files) {
  return {
    type: EXISTING_PROJECT_FILE,
    payload: files
  };
}

//Maintain the file upload from BIOM File selector
export function setBiomFile(files) {
  return {
    type: BIOM_FILE,
    payload: files
  };
}

//Update the array of values returned for the search
export function setSearchValues(arrayOfGenomes) {
  return {
    type: TAX_ID_SEARCH,
    payload: arrayOfGenomes
  };
}

//The selected genome identifies the taxonomy selected by the user
export function setSelectedGenome(genome) {
  return {
    type: SET_SELECTED_GENOME,
    payload: genome
  };
}

//This is the sample that will be displayed on the review page
export function addToGenomeSample(genomes) {
  return {
    type: ADD_TO_GENOME_SAMPLE,
    payload: genomes
  };
}

//The collection is a staging area to adjust values prior to adding them to the sample for review
export function addToCollection(genomes) {
  return {
    type: ADD_TO_COLLECTION,
    payload: genomes
  };
}

export function resetCollection() {
  return {
    type: RESET_COLLECTION
  };
}

//This action creator will reset the search on modal close or adding to cart
export function resetSearch() {
  return {
    type: RESET_SEARCH
  };
}

//This action will update the number of genomes from a clade
export function updateCollection(genomes) {
  return {
    type: UPDATE_COLLECTION_GENOME_NUMBER,
    payload: genomes
  };
}

export function removeFromCollection(uniqueID) {
  return {
    type: REMOVE_FROM_COLLECTION,
    payload: uniqueID
  };
}

//This action will update the cell selected by the user in the sample review table
export function updateSample(uniqueID) {
  return {
    type: UPDATE_SAMPLE,
    payload: uniqueID
  };
}

export function removeFromSample(uniqueID) {
  return {
    type: REMOVE_FROM_SAMPLE,
    payload: uniqueID
  };
}

//This action will subset the NCBI genomes by the user defined filters, "Kingdom" and "Pathogen"
export function filterGenomes(){
    return{
        type: FILTER_GENOMES,
    }
}

export function updateKingdomFilter(kingdom){
    let kingdomValue = kingdom ? kingdom.value : null
    return{
        type: UPDATE_KINGDOM_FILTER,
        payload: kingdomValue
    }
}

export function updatepathogenFilter(){
    return{
        type: UPDATE_PATHOGEN_FILTER,
    }
}


//This action will make the GET request to grab the genomes available in the database
export function getGenomes() {
  const url = "/api/getGenomes";
  const request = axios.get(url);
  return {
    type: GET_GENOMES,
    payload: request
  };
}

//This action will toggle the state of the spikein for an individual genome
export function toggleSpikeIn(ID){
  return{
    type: TOGGLE_SPIKE_IN,
    payload: ID
  }
}