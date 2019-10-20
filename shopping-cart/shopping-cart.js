import products from '../products/data.js';
import { findById, findOrderTotal } from '../common/utils.js';
import renderTableRow from './render-table-row.js';

const tableBody = document.querySelector('tbody');
const tableCellWithOrderTotal = document.getElementById('order-total');

let json = localStorage.getItem('CART');
let cart = JSON.parse(json);

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const product = findById(products, lineItem.id);
    const dom = renderTableRow(lineItem, product);
    tableBody.appendChild(dom);
}

const theTotal = findOrderTotal(cart, products);
tableCellWithOrderTotal.textContent = theTotal;

