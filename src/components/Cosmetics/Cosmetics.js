import React from 'react';
import { add } from '../../utilities/calculate';
import Shoes from '../Shoes/Shoes';
const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);
    return (
        <div>
            <h1>Hello I am a cosmetic component</h1>
            <p>Total cosmetic products: {total}</p>
            <Shoes></Shoes>
        </div>
    );
};

export default Cosmetics;