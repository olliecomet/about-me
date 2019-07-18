import { getThrowFromNumber } from '../src/get-throw.js';

const test = QUnit.test;

test('0 is rock', function(assert) {
    //Arrange
    //Parameters and expectations
    const number = 0;
    const expected = 'rock';

    //Act
    //Call function and set result to const
    const result = getThrowFromNumber(number);

    //Assert
    assert.equal(result, expected);
});

test('1 is paper', function(assert) {
    //Arrange
    //Parameters and expectations
    const number = 1;
    const expected = 'paper';

    //Act
    //Call function and set result to const
    const result = getThrowFromNumber(number);

    //Assert
    assert.equal(result, expected);
});

test('2 is scissors', function(assert) {
    //Arrange
    //Parameters and expectations
    const number = 2;
    const expected = 'scissors';

    //Act
    //Call function and set result to const
    const result = getThrowFromNumber(number);

    //Assert
    assert.equal(result, expected);
});