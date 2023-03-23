import CartWidget from "../CartWidget/CartWidget"
import "./navBar.css"

    
const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div className="contenedor-botones">
                <button className="boton-1">Celulares</button>
                <button className="boton-2">Tablets</button>
                <button className="boton-3">Notebooks</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;