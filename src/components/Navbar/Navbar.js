import React from 'react'
import {Link} from "react-router-dom";
import "../../styles/header.css";
import "../../index.css"

const Navbar = ({ open }) => {
    
    return(
        <>
        <nav className={`navbar ${open ? 'navbar_open' : 'navbar_close'}`}>
        <ul>       
        <li><Link to="/productos">Productos<img className="icon" src="/img/icons-shop.svg"/></Link></li>
        <li><Link to="/buscar">Buscar<img className="icon" src="/img/1-icons-search.svg"/></Link></li>
        <li><Link to="/carrito">Carrito<img className="icon" className="icon" src="/img/1-icons-shopping-cart.svg"/></Link></li>
        <li><Link to="/Login">Login<img className="icon" src="/img/icons-user.svg"/></Link></li>
        </ul>
        </nav>
        </>
        )
    }
    
    export default Navbar