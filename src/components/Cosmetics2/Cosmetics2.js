import React, { useEffect, useState } from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../../utilities/calculate'
const Cosmetics2 = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const removeAllCarts = () => {
        deleteShoppingCart();
    }

    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Money needed: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)
            }
            <button onClick={removeAllCarts}>Remove all Carts</button>
        </div>
    );
};

export default Cosmetics2;