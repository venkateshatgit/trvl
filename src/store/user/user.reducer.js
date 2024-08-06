import { USER_ACTION_TYPE } from "./user.types"


const INITIAL_STATE = {
    currUser: null
}


export const userReducer = (state=INITIAL_STATE, action) => {
    // here state is previous state of object, which we automatically get
    // We only require to pass action with payload to dispatch
    
    const {type, payload} = action;

    switch(type){
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state, 
                currUser: payload
            }

        default:
            return state;
    }
}