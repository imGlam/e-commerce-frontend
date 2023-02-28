import { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

export const ProductsContext = createContext({
    items: [],
    cartItems: [],
});

export function ProductsContextProvider({ children }) {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cookie] = useCookies(['userId']);
    const userId = cookie.userId;

    useEffect(() => {
        axios
            .get(`/products/get`)
            .then((res) => setItems(res.data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        axios
            .get(`/carts/get/hD_uInXHhTKtI-ED1jpxZN008xjygUgO`)
            .then((res) => setCartItems(res.data))
            .catch((err) => console.error(err));
    }, []);

    const contextValue = { items, cartItems };
    return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
}
