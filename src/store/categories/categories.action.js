import { CATEGORIES_ACTION_TYPE } from "./categories.types"


export const setCategoriesMap = (categories) => {
    return {
        type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
        payload: categories
    }
}