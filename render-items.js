const renderProducts = (product) => {
    const li = document.createElement('li');
    li.className = product.name;
    li.title = product.description;

    const header3 = document.createElement('h3');
    header3.textContent = product.name;
    li.appendChild(header3);

    const USD = document.createElement('p');
    USD.textContent = '$' + product.price.toFixed(2);
};

export default renderProducts ;