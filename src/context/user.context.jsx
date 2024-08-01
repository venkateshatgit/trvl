import { createContext, useEffect, useReducer} from "react";
import { onAuthStateChangedListner } from "../utils/firebase.utils";


//actual value you want to access
export const UserContext = createContext({
    currUser: null,
    setCurrUser: () => null
});


export const INITIAL_STATE = {
    currUser: null
}


export const USER_ACTION_TYPE = {
    'SET_CURRENT_USER': 'SET_CURRENT_USER',
}


const userReducer = (state, action) => {
    // here state is previous state of object, which we get automatically 
    // We only require to pass action with payload to dispatch
    
    const {type, payload} = action;

    switch(type){
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state, 
                currUser: payload
            }

        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}


export const UserProvider = ({children}) => {
    // const [currUser, setCurrUser] = useState(null);
    

    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
    const { currUser } = state;

    const setCurrUser = (user) => {
        dispatch({
            type: USER_ACTION_TYPE.SET_CURRENT_USER,
            payload: user
        })
    }

    const value = {currUser, setCurrUser};

    useEffect(() => {
        const unsubcribe = onAuthStateChangedListner((user) => {
            setCurrUser(user);
            // console.log(user);
        })

        return unsubcribe;
    }, [])
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}