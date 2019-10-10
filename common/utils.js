export const findById = (arr, idOne) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i].id === idOne){
            return arr[i];
        }
    }
};

export const prettyNumber = (number) => {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
};

export const calcLineTotal = (quantitiy, itemPrice) => {
    const lineItemPrice = quantitiy * itemPrice;
    return lineItemPrice;
};

export const findOrderTotal = (cart, products) => {
    let orderTotal = 0;
    for (let i = 0; i < cart.length; i ++){
        const lineItem = cart[i];
        const product = findById(products, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, product.price);
        orderTotal = orderTotal + lineTotal;
    }
    return prettyNumber(orderTotal);
};
