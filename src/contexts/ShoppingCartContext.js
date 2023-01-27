import { createContext, useEffect, useState } from 'react';

export const ShoppingCartContext = createContext({
    items: [],
    getProductsQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    submitOneToCart: () => {},
});

export function ShoppingCartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        if (cartProducts.length > 0) {
            localStorage.setItem('items-in-cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items-in-cart'));
        if (items) {
            setCartProducts(items);
        }
    }, []);

    function getProductsQuantity(id) {
        const quantity = cartProducts.find((product) => product.id === id)?.quantity;
        if (quantity) {
            return quantity;
        } else {
            return 1;
        }
    }

    function addOneToCart(id, title, version, image, price, size) {
        const quantity = getProductsQuantity(id, title, version, image, price);
        if (quantity === 1 && !cartProducts.find((product) => product.id === id)) {
            setCartProducts([...cartProducts, { id, title, version, image, price, quantity: 2, inCart: false, size }]);
        } else {
            setCartProducts(
                cartProducts.map((product) =>
                    product.id === id
                        ? {
                              ...product,
                              quantity: product.quantity + 1,
                          }
                        : product,
                ),
            );
        }
    }

    function deleteFromCart(id) {
        if (cartProducts.length === 1) {
            localStorage.removeItem('items-in-cart');
            setCartProducts([]);
        } else {
            setCartProducts((prev) => prev.filter((product) => product.id !== id));
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductsQuantity(id);
        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map((product) =>
                    product.id === id
                        ? {
                              ...product,
                              quantity: product.quantity - 1,
                          }
                        : product,
                ),
            );
        }
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartProduct) => {
            totalCost += cartProduct.quantity * cartProduct.price;
        });

        return totalCost;
    }

    function submitOneToCart(id, title, version, image, price, size) {
        if (cartProducts.find((product) => product.id === id)) {
            setCartProducts(
                cartProducts.map((product) => (product.id === id ? { ...product, inCart: 'true' } : product)),
            );
        } else {
            setCartProducts([...cartProducts, { id, title, version, image, price, quantity: 1, inCart: 'true', size }]);
        }
    }

    const contextValue = {
        items: cartProducts,
        getProductsQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        submitOneToCart,
    };

    return <ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>;
}
