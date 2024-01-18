import { SWITCH_MODE } from "./actioType";



const initialState = {
    mode : true 
}

export const reducer = (state = initialState, action)=>{
    const {type,payload} = action
    switch (type) {
        case SWITCH_MODE:
            return {
                ...state,
                mode:!state.mode 
            }
        default:
            return state;
    }
}