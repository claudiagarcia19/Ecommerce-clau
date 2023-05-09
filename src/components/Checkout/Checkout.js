import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, total, clearCart} = useContext(CartContext)

    const createOrder =async ({ name,phone, email}) =>
}