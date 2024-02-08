import assert from 'node:assert/strict';

const addOvertime = (salary, overtimeValue) => salary + overtimeValue;

const calculateDeductions = (salary, deductions) => salary - deductions;

/**
 * Generates an assertion that verifies that a given value is an expected value.
 *
 * @param {any} value - The value to be verified for strict equality.
 * @return {Object} assertions - A result of verifying strict equality.
 */
const verifyIf = (value) => {
  const assertions = {
    isStrictEqual(expected) {
      assert.strictEqual(value, expected);
    },
  };
  return assertions;
};

/**
 * Compares the expected and returned values and logs whether the test passed or not.
 *
 * @param {any} title - The title of the test
 * @param {any} testFunction - The testFunction
 * @return {void}
 */
const test = (title, testFunction) => {
  try {
    testFunction();
    console.log(`✅ ${title} passed!`);
  } catch {
    console.log(`❌ ${title} failed!`);
  }
};

test('addOvertime', () => {
  const wanted = 2500;
  const actual = addOvertime(2000, 500);

  verifyIf(wanted).isStrictEqual(actual);
});

test('calculateDeductions', () => {
  const wanted = 2000;
  const actual = calculateDeductions(2500, 500);

  verifyIf(wanted).isStrictEqual(actual);
});
