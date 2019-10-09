// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderProducts from '../products/render-items.js';
import { findById, findOrderTotal } from '../common/utils.js';
import { calcLineTotal } from '../common/utils.js';
const test = QUnit.test;

test('should create dom element, product', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const miscFarmEquipment = {
        id : 'farm-equipment',
        name : 'Whatever!',
        description : 'What you get is out of our hands.',
        category : 'misc.',
        price : 11.00,
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = '<li class="misc." title="What you get is out of our hands."><h3>Whatever!</h3><p class="11">$11.00</p><details><p>What you get is out of our hands.</p></details><button class=\"add\">Add to cart</button></li>';
    //Assert
    const dom = renderProducts(miscFarmEquipment);
    const html = dom.outerHTML;
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
test('should take a quantitiy and item price and calculate the total price', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 6;
    const itemPrice = 3;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcLineTotal(quantity, itemPrice);
    //Assert
    const correctResult = 18;
    // Make assertions about what is expected valid result
    assert.equal(result, correctResult);
});
test('shoud loop through an array and find item by id', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const cart = [{
        id : 'detector',
        quantitiy : 3
    }, {
        id : 'farm-equipment',
        quantitiy : 2,
    }, {
        id : 'door-bell',
        quantitiy : 4,
    }, {
        id : 'hound',
        quantitiy : 6,
    }, {
        id : 'shirt',
        quantitiy : 3,
    }];
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(cart, 'farm-equipment');
    //Assert
    const theRightResult = cart[1];
    // Make assertions about what is expected valid result
    assert.equal(result, theRightResult);
});

test('shoud loop through an array of lines and extract info to calculate total price', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const cart = [{
        id : 'detector',
        quantitiy : 3 //$60
    }, {
        id : 'farm-equipment',
        quantitiy : 2, //$22
    }, {
        id : 'door-bell',
        quantitiy : 4, //$16
    }, {
        id : 'hound',
        quantitiy : 6, //$24
    }, {
        id : 'shirt',
        quantitiy : 3, //$33
    }];
    const detector = {
        id : 'detector',
        name : 'detector-hector',
        description : 'If you need to find somthing, search no more!',
        category : 'misc.',
        price : 20.00,
    };
    const shirt = {
        id : 'shirt',
        name : 'best-shirt',
        description : 'Don\'t worry about your shirt.',
        category : 'garmet.',
        price : 11.00,
    };
    const miscFarmEquipment = {
        id : 'farm-equipment',
        name : 'misc-farm-equipment',
        description : 'What you get is out of our hands.',
        category : 'misc.',
        price : 11.00,
    };
    const doorBell = {
        id : 'door-bell',
        name : 'Door Bell',
        description : 'Song of choice. If you\'re thinking about it, maybe ring it!',
        category : 'home-improvement',
        price : 4.00,
    };
    const basketHound = {
        id : 'hound',
        name : 'dog',
        description : 'Hound in basket',
        category : 'hounds',
        price : 4.00,
    };
    const products = [
        detector,
        shirt,
        miscFarmEquipment,
        doorBell,
        basketHound,
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findOrderTotal(cart, products);
    //Assert
    const theRightResult = '$155.00';
    // Make assertions about what is expected valid result
    assert.equal(result, theRightResult);
});


