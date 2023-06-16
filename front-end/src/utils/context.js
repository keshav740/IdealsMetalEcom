import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0 , 0)
    },[location])

    return (
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
        }}>
            {children}
        </Context.Provider>
    )
}


export default AppContext;