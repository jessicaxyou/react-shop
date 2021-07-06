
const CartItems = ({total, quantity, name}) => {
    return(
        <div>
            <p>{`${name}`}</p>
            <p>{`${quantity}`}</p>
            <p>{`${total}`}</p>
        </div>
    )
}

export default CartItems