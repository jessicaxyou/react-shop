import {useState} from 'react'
import ProductFront from './ProductFront'
import ProductBack from './ProductBack'
// display each individual item
// passing as props
// name, imgURL, description, quantity, price

const Item = ({item}) => {
    // on hover or click to flip the image and show full body image of the item aka image option 2
    const [front, setImage] = useState(true)

    const flipImage = () => {
        setImage(!front)
    }

    const imageSides = () => {
        return front ? 
        <ProductFront id={item.id} image={item.imgURL} flipImage={flipImage}/> 
        : 
        <ProductBack id={item.id} imageTwo={item.imgURL2}/>
    }

// request to POST cartItems via db.json so we can update what to add to cart
    const handleSubmit= (event) => {
        // prevent form from redirecting due to a defined action
        event.preventDefault()
        let quantity = event.target.children[0].value
        // setting object of properties needed
        let cartItems = {
            quantity: quantity,
            name: item.name,
            price: item.price,
        }
        // calling for info to be posted to cartItems on json using fetch
        let setCart = {
            method: "POST",
            headers:{
                "content-type":"application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(cartItems)
        }
        fetch('http://localhost:3000/cartItems', setCart)
        .then(res => res.json())
        .then(data => console.log(data))
    }


// need to fix select and button to center on page rendering
    return(
        <div className="item">
            <h1 className="item-name">{item.name}</h1>
            {imageSides()}
            <p className="item-name">{item.descriptions}</p>
            <p className="item-name">${item.price}</p>
            <p className="item-name">Quantity: {item.quantity}</p>
            <form onSubmit = {handleSubmit} className ="center">
                <select>
                    <option> 1 </option>
                    <option> 2 </option>
                    <option> 3 </option>
                    <option> 4 </option>
                    <option> 5 </option>
                </select>
                <input type ="submit" value ="add to cart"/>
            </form>
        </div>
    )
}

export default Item