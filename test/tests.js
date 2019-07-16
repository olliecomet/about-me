import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('yes is yes', function(assert) {
    //Arrange
    //Parameters and expectations
    const text = 'yes';
    const expected = true;

    //Act
    //Call function and set result to const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('y is yes', function(assert) {
    //Arrange
    //Parameters and expectations
    const text = 'y';
    const expected = true;

    //Act
    //Call function and set result to const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('no is no', function(assert) {
    //Arrange
    //Parameters and expectations
    const text = 'no';
    const expected = false;

    //Act
    //Call function and set result to const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});