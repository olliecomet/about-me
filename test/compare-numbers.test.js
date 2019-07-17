import compareNumbers from '../src/compare-numbers.js';

const test = QUnit.test;

test('guess is 0', function(assert) {
    //Arrange
    //Parameters and expectations
    const guess = 8;
    const correctNumber = 8;
    const expected = 0;

    //Act
    //Call function and set result to const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});

test('guess is -1', function(assert) {
    //Arrange
    //Parameters and expectations
    const guess = 1;
    const correctNumber = 8;
    const expected = -1;

    //Act
    //Call function and set result to const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});

test('guess is 1', function(assert) {
    //Arrange
    //Parameters and expectations
    const guess = 10;
    const correctNumber = 8;
    const expected = 1;

    //Act
    //Call function and set result to const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});