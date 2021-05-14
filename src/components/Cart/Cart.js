import React from 'react'
import "./cart.css";
import { useDispatch, useSelector } from 'react-redux'; 
import { addToCart, removeProduct, decrementProduct} from '../../redux/cart/cartActions';
import {hidden} from '../../redux/showCart/showCartActions'

const Cart = () => {
    const cart = useSelector ((state) => state.cardData.cartItems);
    const totalAmount = useSelector ((state) => state.cardData.totalAmount);
    const showCart = useSelector ((state) => state.showCart.value);
    const dispatch = useDispatch();
    // const { id, name, description, prices, photos, category} = product;
    // const cart = useSelector ((state) => state.cardData.cartItems);
    // const photo = photos?.[0]


    return(
        <>
        <div className={`shopping-cart ${showCart ? 'shopping-cart-show' : ''}`}> 
        <div className="cart_content">
        <div onClick={() => dispatch(hidden())}>Cerrar</div>
        {cart.map((product) => {
            const { id, name, description, price, photos, category} = product;
            const photo = photos?.[0]

            return(
                <>
                <div className="title_cart">
            {name}
            </div>

            <div className="container_cart">
        
                <div className="delete-btn" >
                <span class="delete-btn" onClick={() => dispatch(removeProduct(product))}></span>
                </div>
                
                <div className="image_product">
                    <img src={photo} alt="" />
                </div>
                
                <div className="description">
                    <p>{description}</p>
                </div>
                
                <div className="quantity">
                    <button className="plus-btn" type="button" name="button">
                        <img src="/img/plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value="1" />
                    <button className="minus-btn" onClick={() => dispatch(decrementProduct(product))}>
                            <img src="/img/minus.svg" alt="" />
                    </button>
                </div>
            </div>
            <div className="total-price">{price}</div>
            </>
            )
        })}
        
        <div className="total-price">{totalAmount}</div>
        </div>
        </div>                
        
        </>
        
        )
    }
    
    export default Cart