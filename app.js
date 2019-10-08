import products from './data.js';
import renderProducts from './render-items.js';

const list = document.getElementById('products');

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    list.appendChild(renderProducts(product));
}
