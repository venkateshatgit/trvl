import { createContext, useState } from "react";
import SHOP_DATA from "../pages/shoppage/shop.data";

export const ProductsConext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(SHOP_DATA);

    const value = {products};

    return(
        <ProductsConext.Provider value={value}>
            {children}
        </ProductsConext.Provider>
    );
}