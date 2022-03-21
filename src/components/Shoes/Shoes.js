import React from 'react';
import { multiply } from '../../utilities/calculate';
import { add } from '../../utilities/calculate'
import devide from '../../utilities/calculation';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second);
    const sum = add(first, second);
    const devision = devide(first, second);
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>Result shoes: {result}</p>
            <p>Total shoes: {sum}</p>
            <p>Devide shoes: {devision}</p>
        </div>
    );
};

export default Shoes;