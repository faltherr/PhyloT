// const SEQ_PLATFORM = 'SEQ_PLATFORM'
const INPUT_TYPE = 'INPUT_TYPE'

const initialState = {
    seqPlatform: 'illumina',
    inputType: ''
}

export default function mainReducer (state = initialState, action){
    switch (action.type){
        case INPUT_TYPE:
        return{
            ...state,
            inputType: action.payload
        }
        default:
            return state
    }
}

export function setInputType(value){
    return{
        type: INPUT_TYPE,
        payload: value
    }
}
