import { useState, useEffect } from "react";
import CartItems from './CartItems.js';
    // fetch and display all cartItems from database
    // establish a checkout functionality
    // a checkout button that clears out all items in cart


const Cart = () => {
    // with now established cartItems in json, display the information
    const [cartItems, setCartItems] = useState([])
    const fetchCartItems = () => {
        fetch('http://localhost:3000/cartItems')
        .then(res => res.json())
        .then(data => setCartItems(data))
    }

    const total = (quantity, price) => {
        return quantity * price
    }

    useEffect(fetchCartItems, [])

    const establishCartItems = () => {
        return cartItems.map(cartItems => <CartItems 
            name={cartItems.name}
            quantity ={cartItems.quantity}
            total = {(cartItems.quantity * cartItems.price)}/>
            )
    }


    return(
        <div id="cart">
            {establishCartItems()}
        </div>
    )
}

export default Cart;