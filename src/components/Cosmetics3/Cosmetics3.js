import React, { useEffect, useState } from "react";
import { totalPrice } from "../../utilities/calculate2";
import { removeAll } from "../../utilities/fakedb2";
import CosUser from "../CosUser/CosUser";

const Cosmetics3 = () => {
    const [cosUsers, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data2.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const deleteAll = () => {
        removeAll();
    }
    const total = totalPrice(cosUsers);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Total: {total}</p>
            {
                cosUsers.map(cosUser => <CosUser cosUser={cosUser} key={cosUser.id}></CosUser>)
            }
            <button onClick={deleteAll}>Delete All Carts</button>
        </div>
    )
}

export default Cosmetics3;