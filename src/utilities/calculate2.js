
const totalPrice = products => {
    const reducer = (previous, current) => previous + current.age;
    const total = products.reduce(reducer, 0);
    return total;
}

export { totalPrice };