// const SEQ_PLATFORM = 'SEQ_PLATFORM'
const INPUT_TYPE = 'INPUT_TYPE'
const INPUT_TYPE_CHECKED = 'INPUT_TYPE_CHECKED'

const initialState = {
    seqPlatform: 'illumina',
    inputType: '',
    radioInputClassChecked: false
}

export default function mainReducer (state = initialState, action){
    switch (action.type){
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

// Change button style on click event
export function setInputChecked(){
    return{
        type: INPUT_TYPE_CHECKED,
    }
}
