
const CartItems = ({total, quantity, name}) => {

    return(
        <div>
            <p className="cart">{`${name}`}</p>
            <p className="cart">Quantity: {`${quantity}`}</p>
            <p className="cart-two">Amount: ${`${total}`}</p>

        </div>
    )
}

export default CartItems