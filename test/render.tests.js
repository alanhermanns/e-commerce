// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderProducts from '../products/render-items.js';
import findById from '../common/utils.js';
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
test('shoud loop through an array until an id matches', function(assert) {
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
        quantitiy : '3'
    }];
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(cart, 'farm-equipment');
    //Assert
    const theRightResult = 'farm-equipment';
    // Make assertions about what is expected valid result
    assert.equal(result, theRightResult);
});

