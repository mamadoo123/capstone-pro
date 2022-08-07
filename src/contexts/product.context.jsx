import { createContext, useState, useEffect } from "react";
import firebaseUtils from "../firebase/firebase.utils.js";

export const ProductContext = createContext({
    categoriesMap: {},
});

export const ProductProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = {categoriesMap}

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoriesMap = await firebaseUtils.getCategoriesAndDocuments();
            setCategoriesMap(categoriesMap); // categoriesMap is an Object not array
        }

        getCategoriesMap();
    }, [])

    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}