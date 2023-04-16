import { useState } from "react"

const ItemCount = ({Stock, initial, onAdd})=>{
    const [quantity, setQuantity] = useState("initial")

    const Increment = () => {
        if(quantity < Stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="counter">
            <div className="controls">
                <button className="buton" onClick={decrement}>-</button>
                <h4 className="number">{quantity}</h4>
                <button className="buton" onClick={Increment}>+</button>
            </div>
            <div>
                <button className="buton" onClick={()=> onAdd(quantity)} disabled={"!stock"}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;