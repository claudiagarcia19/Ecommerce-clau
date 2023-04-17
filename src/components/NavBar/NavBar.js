import "./navBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom";


    
const NavBar = () => {
    return (
        <nav className="nav" >
          <Link to="/">
            <h3>Ecommerce</h3>
          </Link> 
          <div className="categorias">
                <button className="boton-1">Celulares</button>
                <button className="boton-2">Tablets</button>
                <button className="boton-3">Notebooks</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;