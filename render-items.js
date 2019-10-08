const renderProducts = (product) => {
    const li = document.createElement('li');
    li.className = product.category;
    li.title = product.description;

    const header3 = document.createElement('h3');
    header3.textContent = product.name;
    li.appendChild(header3);

    const p = document.createElement('p');
    p.className = product.price;
    const USD = '$' + product.price.toFixed(2);
    p.textContent = USD;
    li.appendChild(p);

    const allTheDetails = document.createElement('details');
    const detailsContent = document.createElement('p');
    allTheDetails.textContent = product.description;
    allTheDetails.appendChild(detailsContent);
    li.appendChild(allTheDetails);

    const addButton = document.createElement('button');
    addButton.className = 'add';
    addButton.textContent = 'Add to cart';
    addButton.addEventListener('click', () => {
        alert('It\'s in the cart!');
    });
    li.appendChild(addButton);
    
    return li;
};

export default renderProducts ;