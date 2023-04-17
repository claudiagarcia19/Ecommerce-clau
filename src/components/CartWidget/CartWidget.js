import "./CartWidget.css"
import  cart  from './assets/carrito_compras.png';

const CartWidget = () => {
    return (
        <div className='carrito'>
            <img src={cart} alt="carrito de compras"/>
            0
        </div>
    
    )
}

export default CartWidget;