const addToDb = id => {
    //1st step(check whether there is something exists in local storage's key)
    const storeData = localStorage.getItem('shopping-cart');
    let shoppingCart;
    if (storeData) {
        shoppingCart = JSON.parse(storeData);
    }
    else {
        shoppingCart = {};
    }
    //2nd step(check whether there is somthing exists in local storage value's object)
    if (shoppingCart[id]) {
        shoppingCart[id] = shoppingCart[id] + 1;
    }
    else {
        shoppingCart[id] = 1;
    }
    //final step(set the data in local storage)
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


const removeFromDb = id => {
    const storeData = localStorage.getItem('shopping-cart');
    if (storeData) {
        const storeDataParse = JSON.parse(storeData);
        if (id in storeDataParse) {
            delete storeDataParse[id];
        }
        localStorage.setItem('shopping-cart', JSON.stringify(storeDataParse));
    }
}

const removeAllFromDb = () => {
    localStorage.removeItem('shopping-cart');
}

export { addToDb, removeFromDb, removeAllFromDb as removeAll };