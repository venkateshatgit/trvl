import { USER_ACTION_TYPE } from "./user.types"

export const setCurrUser = (user) => {
    return ({
        type: USER_ACTION_TYPE.SET_CURRENT_USER,
        payload: user
    })
}