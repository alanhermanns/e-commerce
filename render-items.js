const renderProducts = (product) => {
    const li = document.createElement('li');
    li.className = product.name;
    li.title = product.description;

    const header3 = document.createElement('h3');
    header3.textContent = product.name;
    li.appendChild(header3);

    const p = document.createElement('p');
    p.className = product.price;
    const USD = '$' + product.price.toFixed(2);
    p.textContent = USD;
    
    return li;
};

export default renderProducts ;