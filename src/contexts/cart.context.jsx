import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    dropdownOpen:false,
    cartItems: [],
    setDropdownOpen: () => {},
    addItemToCart: (product) => {},
    removeFromCartItems: () => {},
    cartQuantity: 0,
    setCartQuantity: () => {},
});

export const CartProvider = ({children}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    
    const addItemToCart = (product) => {
        const newCartItems = addItemToCartItems(cartItems, product);
        setCartItems(newCartItems);
    }

    const value = {dropdownOpen, setDropdownOpen, cartItems, addItemToCart, cartQuantity, setCartQuantity}

    useEffect(() => {
        const newCartQuantity = cartItems.reduce((a, b) => a + b.quantity , 0);
        setCartQuantity(newCartQuantity)
    }, [cartItems])

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

const addItemToCartItems = (cartItems , product) => {
    const productToAddExists = cartItems.find(item => item.id == product.id);
    if(productToAddExists){
        return cartItems.map( item =>
            item.id == product.id ? 
            {...item, quantity: item.quantity + 1 }
            :
            item
        )
    }
    return [...cartItems, {...product, quantity: 1}]
} 