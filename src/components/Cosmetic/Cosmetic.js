import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }

    const addToCartWithParam = () => addToCart(id);

    const removeFromCart = () => {
        removeFromDb(id);
    }

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It has id: {id}</small></p>
            {/* Event handler with parameter in jsx  */}
            <button onClick={addToCartWithParam}>Add to Cart</button>
            {/* or */}
            <button onClick={() => addToCart(id)}>Add to Cart:shortcut</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;