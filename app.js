import products from './data.js';
import renderProducts from './render-items.js';

const list = document.getElementById('products-list');

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const renderedProduct = renderProducts(product);
    list.appendChild(renderedProduct);
}
