const Anthropic = require("@anthropic-ai/sdk");
const readline = require("readline");

const client = new Anthropic();

// Initialize conversation history for multi-turn conversations
let conversationHistory = [];

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to prompt user for input
function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Utilities class that demonstrates various useful algorithms
class Utilities {
  // Algorithm to find the maximum element in an array
  static findMax(arr) {
    // Return the maximum value using Math.max with spread operator
    return Math.max(...arr);
  }

  // Algorithm to find the minimum element in an array
  static findMin(arr) {
    // Return the minimum value using Math.min with spread operator
    return Math.min(...arr);
  }

  // Algorithm to calculate the sum of all elements in an array
  static calculateSum(arr) {
    // Use reduce to accumulate the sum of all elements
    return arr.reduce((sum, num) => sum + num, 0);
  }

  // Algorithm to calculate the average of an array
  static calculateAverage(arr) {
    // Avoid division by zero by checking array length
    if (arr.length === 0) return 0;
    // Return sum divided by the length of the array
    return this.calculateSum(arr) / arr.length;
  }

  // Algorithm to reverse an array
  static reverseArray(arr) {
    // Create a new array with elements in reverse order
    return arr.slice().reverse();
  }

  // Algorithm to remove duplicates from an array
  static removeDuplicates(arr) {
    // Use Set to automatically remove duplicates, then convert back to array
    return Array.from(new Set(arr));
  }

  // Algorithm to check if an array is sorted in ascending order
  static isSorted(arr) {
    // Iterate through array comparing each element with the next
    for (let i = 0; i < arr.length - 1; i++) {
      // If current element is greater than next, array is not sorted
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    // If loop completes without finding unsorted pair, array is sorted
    return true;
  }

  // Algorithm to find the most frequently occurring element
  static findMostFrequent(arr) {
    // Create an object to count occurrences of each element
    const frequency = {};
    // Initialize tracking variables for the most frequent element
    let maxCount = 0;
    let mostFrequent = null;

    // Count occurrences of each element
    for (const