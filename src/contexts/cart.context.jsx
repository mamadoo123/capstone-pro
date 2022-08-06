import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    dropdownOpen:false,
    cartItems: [],
    cartQuantity: 0,
    cartTotal: 0,
    setDropdownOpen: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    setCartQuantity: () => {},
    decreaseItemQuantityByOne: () => {},
    setCartTotal: () => {},
});

export const CartProvider = ({children}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartTotal, setCartTotal] = useState(0)
    
    useEffect(() => {
        const newCartQuantity = cartItems.reduce((a, b) => a + b.quantity , 0);
        const total = cartItems.reduce((a,b) => a + (b.quantity * b.price) , 0)
        setCartQuantity(newCartQuantity)
        setCartTotal(total)
    }, [cartItems])

    const addItemToCart = (product) => {
        const newCartItems = addItemToCartItems(cartItems, product);
        setCartItems(newCartItems);
    }

    const removeItemFromCart = (product) => {
        const newCartItems = cartItems.filter(item => item.id != product.id);
        setCartItems(newCartItems)
    }

    const decreaseItemQuantityByOne = (product) => {
        const newCartItems = decreaseItemQuantityFromList(cartItems, product)
        setCartItems(newCartItems)
    }

    const value = {
        dropdownOpen, 
        setDropdownOpen, 
        cartItems, 
        addItemToCart,
        decreaseItemQuantityByOne, 
        cartQuantity, 
        setCartQuantity, 
        removeItemFromCart,
        cartTotal,
    }

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
            item.id === product.id ? 
            {...item, quantity: item.quantity + 1 }
            :
            item
        )
    }
    return [...cartItems, {...product, quantity: 1}]
} 

const decreaseItemQuantityFromList = (itemList, item) => {
        if(item.quantity === 1) return itemList.filter(it => it.id !== item.id);
        return itemList.map(it => 
            it.id === item.id ?
            {...it, quantity: it.quantity - 1}
            :
            it
        )
}