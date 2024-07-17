import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocument, getCategoriesAndDocument } from "../utils/firebase.utils";
import { SHOP_DATA } from "../shop-data";

export const CategoriesConext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    const value = {categoriesMap};
    // console.log(categoriesMap);
    useEffect(() => {
        const getCategoryMap = async() => {
            const categoryMap = await getCategoriesAndDocument();
            setCategoriesMap(categoryMap);
        }

        getCategoryMap();
        
    }, [])
    

    return(
        <CategoriesConext.Provider value={value}>
            {children}
        </CategoriesConext.Provider>
    );
}