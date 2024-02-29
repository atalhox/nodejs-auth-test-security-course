# JavaScript Testing Overview

This document provides an overview of the basic testing approach demonstrated in our JavaScript class. We've introduced a simple yet effective way to test our code by writing test cases that compare expected outcomes with returned values from our functions.

## Functions Tested

- `somaHorasExtras`: This function calculates the total salary after adding extra hours. It takes two parameters: the base salary and the value of the extra hours worked.
- `calculaDescontos`: This function calculates the net salary after subtracting any discounts. It also takes two parameters: the gross salary and the total discounts.

## Testing Function

- `teste`: A custom testing function designed to evaluate the correctness of other functions. It takes three parameters: a title for the test case, the expected outcome, and the returned value from the function being tested.

## Test Cases

1. **somaHorasExtras Test**

   - **Purpose**: To verify that the `somaHorasExtras` function correctly adds the value of extra hours to the base salary.
   - **Execution**: `teste('somaHorasExtras', 2500, somaHorasExtras(2000, 500))`
   - **Expected Outcome**: The test should pass, indicating that the function correctly calculates the total salary as 2500 when adding 500 to a base salary of 2000.

2. **calculaDescontos Test**
   - **Purpose**: To ensure that the `calculaDescontos` function accurately calculates the net salary after applying discounts.
   - **Execution**: `teste('calculaDesconto', 2200, calculaDescontos(2500, 200))`
   - **Expected Outcome**: The test should not pass, computing the net salary as 2300 after deducting 200 in discounts from a gross salary of 2500.

## Conclusion

The simple testing method outlined in this document is a foundational step towards developing reliable JavaScript applications. By comparing expected outcomes with actual function returns, we can quickly identify discrepancies and ensure our code behaves as intended. This approach promotes a culture of testing and continuous improvement within the development process.
