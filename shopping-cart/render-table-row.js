import { prettyNumber } from '../common/utils.js';

const renderTabeRow = (lineItem, product) => {
    const tr = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = product.name;
    tr.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.className = 'align-left';
    priceCell.textContent = prettyNumber(product.price);
    tr.appendChild(priceCell);

    const quantityCell = document.createElement('td');
    quantityCell.className = 'align-left';
    quantityCell.textContent = lineItem.quantity;
    console.log(lineItem.quantity);
    tr.appendChild(quantityCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = lineItem.quantity * product.price;
    totalCell.textContent = prettyNumber(total);
    tr.appendChild(totalCell);

    return tr;
};

export default renderTabeRow;