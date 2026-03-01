public class MathAlgorithm {
    
    /**
     * Calculates the greatest common divisor (GCD) of two numbers using Euclidean algorithm
     * @param a first number
     * @param b second number
     * @return the greatest common divisor
     */
    public static int calculateGCD(int a, int b) {
        // Handle negative numbers by converting to positive
        a = Math.abs(a);
        b = Math.abs(b);
        
        // Base case: if b is 0, a is the GCD
        if (b == 0) {
            return a;
        }
        
        // Recursive case: GCD(a, b) = GCD(b, a mod b)
        // Keep dividing until remainder is 0
        return calculateGCD(b, a % b);
    }
    
    /**
     * Calculates the least common multiple (LCM) of two numbers
     * @param a first number
     * @param b second number
     * @return the least common multiple
     */
    public static int calculateLCM(int a, int b) {
        // Handle edge cases where either number is 0
        if (a == 0 || b == 0) {
            return 0;
        }
        
        // Convert to positive numbers for calculation
        a = Math.abs(a);
        b = Math.abs(b);
        
        // LCM formula: LCM(a, b) = (a * b) / GCD(a, b)
        // First find GCD, then divide product by it
        return (a * b) / calculateGCD(a, b);
    }
    
    /**
     * Checks if a number is prime
     * @param n the number to check
     * @return true if prime, false otherwise
     */
    public static boolean isPrime(int n) {
        // Numbers less than 2 are not prime
        if (n < 2) {
            return false;
        }
        
        // 2 is the only even prime number
        if (n == 2) {
            return true;
        }
        
        // All other even numbers are not prime
        if (n % 2 == 0) {
            return false;
        }
        
        // Check odd divisors up to square root of n
        // If n has a divisor greater than sqrt(n), it must also have one less than sqrt(n)
        for (int i = 3; i * i <= n; i += 2) {
            // If n is divisible by i, it's not prime
            if (n % i == 0) {
                return false;
            }
        }
        
        // If no divisors found, n is prime
        return true;
    }
    
    /**
     * Calculates factorial of a number
     * @param n the