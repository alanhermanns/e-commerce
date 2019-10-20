import { findById } from '../common/utils.js';

// export const setCart = (cart) => localStorage.setItem(JSON.stringify('cart', cart));
// export const getCart = () => JSON.parse(localStorage.getItem('cart'));

// export const checkForCartAndIfNoCartMakeEmptyCart = () => {
//     let json = localStorage.getItem('cart');
//     if (json) {
//        let cart = JSON.parse(json);
//     }
//     else {
//         cart = [];
//         setCart(cart);
//     }
// };


    // if (localStorage === Storage) {
    //     let newProduct = {
    //         id : id,
    //         quantitiy : 1,
    //     };
    //     cart.push(newProduct);
    //     setCart();
    // } else return;
    // return;


// const incrementProduct = (product) => {
//     cart = getCart();
//     console.log(cart);
//     let productToIncrement = findById(cart, product.id);
//     if (!productToIncrement){
//         productToIncrement = { id : product.id, quantitiy : 1, };
//         cart.push(productToIncrement);
//     }
//     else {
//         productToIncrement.quantity ++;
//     }
//     setCart(cart);

// };


const renderProducts = (product) => {
    const li = document.createElement('li');
    li.className = product.category;
    li.title = product.description;

    const header3 = document.createElement('h3');
    header3.textContent = product.name;
    li.appendChild(header3);

    const theImage = document.createElement('img');
    theImage.src = '../common/assets/200.jpg';
    theImage.alt = product.name;
    li.appendChild(theImage);


    const p = document.createElement('p');
    p.className = product.price;
    const USD = '$' + product.price.toFixed(2);
    p.textContent = USD;
    li.appendChild(p);

    const allTheDetails = document.createElement('details');
    const detailsContent = document.createElement('p');
    detailsContent.textContent = product.description;
    allTheDetails.appendChild(detailsContent);
    li.appendChild(allTheDetails);

    const addButton = document.createElement('button');
    addButton.className = 'add';
    addButton.value = product.id;
    addButton.textContent = 'Add to cart';
    addButton.addEventListener('click', () => {
        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }
        
        let lineItem = findById(cart, product.id);
        
        if (!lineItem){
            lineItem = {
                id : product.id,
                quantity : 1,
            };
            cart.push(lineItem);
        }
        else {
            lineItem.quantity ++;
        }
        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

    });
    li.appendChild(addButton);
    return li;
};

export default renderProducts;