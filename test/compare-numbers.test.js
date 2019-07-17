import compareNumbers from '../src/compare-numbers.js';

const test = QUnit.test;

test('8 is 8', function(assert) {
    //Arrange
    //Parameters and expectations
    const number = 8;
    const expected = 8;

    //Act
    //Call function and set result to const
    const result = compareNumbers(number);

    //Assert
    assert.equal(result, expected);
});

