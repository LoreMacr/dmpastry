import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../Header"
import Cart from "../components/Cart";

const CartList = () => {
    const cart = useSelector((state) => state.cardData.cartItems);
    console.log(cart);
    
    return (
        <>
        <Header/>
        {cart.map((product) => (
            <Cart
            key={product.id}
            product={product}
            />
            ))}
            <p>Total: {}</p>
            </>
            );
        };
        
        export default CartList;
        