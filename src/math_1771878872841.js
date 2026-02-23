/**
 * Math Utility Module
 * A collection of mathematical helper functions for common calculations
 */

const MathUtility = (() => {
  /**
   * Calculates the greatest common divisor (GCD) of two numbers
   * using the Euclidean algorithm
   * 
   * @param {number} a - First integer
   * @param {number} b - Second integer
   * @returns {number} The greatest common divisor
   * @example
   * gcd(48, 18) // returns 6
   */
  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    
    return a;
  };

  /**
   * Calculates the least common multiple (LCM) of two numbers
   * using the formula: LCM(a,b) = (a * b) / GCD(a,b)
   * 
   * @param {number} a - First integer
   * @param {number} b - Second integer
   * @returns {number} The least common multiple
   * @example
   * lcm(12, 18) // returns 36
   */
  const lcm = (a, b) => {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
  };

  /**
   * Checks if a number is prime
   * 
   * @param {number} n - The number to check
   * @returns {boolean} True if the number is prime, false otherwise
   * @example
   * isPrime(17) // returns true
   */
  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    
    return true;
  };

  /**
   * Calculates the factorial of a non-negative integer
   * 
   * @param {number} n - Non-negative integer
   * @returns {number} The factorial of n
   * @throws {Error} If n is negative
   * @example
   * factorial(5) // returns 120
   */
  const factorial = (n) => {
    if (n < 0) throw new Error("Factorial is not defined for negative numbers");
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    
    return result;
  };

  /**
   * Calculates the nth Fibonacci number
   * 
   * @param {number} n - The position in the Fibonacci sequence (0-indexed)
   * @returns {number} The nth Fibonacci number