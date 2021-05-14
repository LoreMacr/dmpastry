import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'


const Card =(props) => {
    const { card = {} } = props
    const { name, description, prices, photos, category, url, featured, id } = card;
    const [price,setPrice] = useState(prices?.[0]?.price)
    const photo = photos?.[0]
    const cart = useSelector ((state) => state.cardData.cartItems);
    const user = useSelector (state => state.user)


    const isProductInCart =
    cart.findIndex((cartProduct) => cartProduct.id === id) >= 0;


    return (
        <div className="product_card">
            <div className="product_card_img_container" >
                <img src={photo}/>
            </div>
            <div className="product_info">
                <h4 className="product_name">
                {name}
                </h4>
                <p className="product_description">
                {description}
                </p>
        </div>
        <div className="product_selector">
        <p>Selecciona para cuantas personas</p>
        <div className="product_selector_btn">
        {prices.map ((item) => {
            const persons = item.persons
            const newPrice = item.price
            return (
                <button onClick={()=> setPrice(newPrice)} className="pieces_selector">{persons}</button>
                )
            })}

            <h4>${price}</h4>
            </div>

            <Link to={`/producto/${url}`}>
            <button isProductInCart={isProductInCart} className="main_btn">Ver producto</button>
            </Link>
            </div>
            </div>
            )
        }
        
        export default Card