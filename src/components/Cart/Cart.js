import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Cartitem from "../cartItem/cartItem";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay item en el carrito</h1>
                <Link to="/" className="option">Productos</Link>
            </div>
        )
    }
    return (
        <div>
            { Cart.map(p => <Cartitem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to="/checkout" className="Option">Checkout</Link>
        </div>
    )

}

