import { useState, useEffect } from 'react';
import Item from './Item'

    // fetch and display all the items created via db.json

const Shop = () => {
    // create state of items starting with empty array
    const [items, setItems] = useState ([])
    

    const fetchItems = () => {
        fetch('http://localhost:3000/items')
            .then(res => res.json())
            .then(data => setItems(data))

    }

    // As soon as component mounts, it will fetch the items and reset items to what we fetch
    useEffect(fetchItems)

    const renderItems = () => {
        return items.map(item => <Item item={item}/>)
    }

    return(
        <div id="shop">
            {renderItems()}
        </div>
    )
}

export default Shop;