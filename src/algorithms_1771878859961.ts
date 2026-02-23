/**
 * Algorithms Utility Module
 * 
 * This module provides a collection of common algorithmic functions
 * for sorting, searching, and data manipulation.
 */

/**
 * Performs a binary search on a sorted array to find the index of a target value.
 * 
 * @param arr - A sorted array of numbers to search through
 * @param target - The value to search for
 * @returns The index of the target if found, otherwise -1
 * 
 * @example
 * const arr = [1, 3, 5, 7, 9];
 * const index = binarySearch(arr, 5); // Returns 2
 */
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

/**
 * Performs quicksort algorithm to sort an array in ascending order.
 * Uses an in-place sorting approach with randomized pivot selection.
 * 
 * @param arr - The array to be sorted
 * @param left - The starting index of the subarray (default: 0)
 * @param right - The ending index of the subarray (default: arr.length - 1)
 * @returns The sorted array
 * 
 * @example
 * const arr = [64, 34, 25, 12, 22, 11, 90];
 * quickSort(arr); // Returns [11, 12, 22, 25, 34, 64, 90]
 */
function quickSort(arr: number[], left = 0, right = arr.length - 1): number[] {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

/**
 * Helper function for quicksort that partitions the array around a pivot element.
 * 
 * @param arr - The array being partitioned
 * @param left - The left boundary index
 * @param right - The right boundary index
 * @returns The final position of the pivot element
 */
function partition(arr: number[], left: number, right: number): number {
  // Select a random pivot to avoid worst-case O(n²) complexity
  const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
  [arr[randomIndex], arr[right]] = [arr[right], arr[randomIndex]];

  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]