
import { GET_ITEM, SWITCH_MODE } from "./actioType";



const initialState = {
    mode : true ,
    item:{}
}

export const reducer = (state = initialState, action)=>{
    const {type,payload} = action
    switch (type) {
        case SWITCH_MODE:
            return {
                ...state,
                mode:!state.mode 
            }
        case GET_ITEM:
            return {
                ...state,
                item:payload
            }
        default:
            return state;
    }
}