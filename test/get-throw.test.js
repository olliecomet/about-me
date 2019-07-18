import { getThrowFromNumber } from '../src/get-throw.js';

const test = QUnit.test;

test('placeholder', function(assert) {
    //Arrange
    //Parameters and expectations
    const expected = 'placeholder';

    //Act
    //Call function and set result to const
    const result = 'another placeholder';
    getThrowFromNumber(result, expected);

    //Assert
    assert.equal(result, expected);

});