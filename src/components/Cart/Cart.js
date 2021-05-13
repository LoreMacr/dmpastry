import React from 'react'
import {Link} from "react-router-dom";
import "./cart.css";

const Cart = () => {
    return(
        <>
        <div className="shopping-cart">
            <div className="title_cart">
            Shopping Bag
            </div>

            <div className="container_cart">
        
                <div className="delete-btn" >
                <span class="delete-btn"></span>
                    {/* <img src="/img/delete-icn.png" alt="" /> */}
                </div>
                
                <div className="image_product">
                    <img src="/img/cake.png" alt="" />
                </div>
                
                <div className="description">
                    <p>Common Projects</p>
                </div>
                
                <div className="quantity">
                    <button className="plus-btn" type="button" name="button">
                        <img src="/img/plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value="1" />
                    <button className="minus-btn" type="button" name="button">
                            <img src="/img/minus.svg" alt="" />
                    </button>
                </div>
            </div>
            <div className="total-price">$549</div>
        </div>                
        
        </>
        
        )
    }
    
    export default Cart