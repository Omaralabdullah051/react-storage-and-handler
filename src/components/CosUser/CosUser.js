import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb2';

const CosUser = (props) => {
    const { id, name, age: price } = props.cosUser;

    const addToCart = id => {
        addToDb(id);
    }

    const deleteCart = id => {
        removeFromDb(id);
    }

    return (
        <div style={{ border: '2px solid red', borderRadius: '20px', margin: '20px', padding: '20px', backgroundColor: 'bisque' }}>
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            <p>Id: {id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => deleteCart(id)}>Delete Cart</button>
        </div>
    );
};

export default CosUser;