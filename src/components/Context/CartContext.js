import { createContext, useState } from "react";
import Item from "../Item/Item";

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (Item, quantity) => {
        if(!isInCart(Item.id)) {
            setCart(prev => [...prev, {...Item,quantity}])
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(Item.id !==itemId)
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}