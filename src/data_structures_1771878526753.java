/**
 * DataStructureUtils - A utility module for common data structure operations.
 * This module provides utility functions for working with various data structures
 * including arrays, linked lists, stacks, queues, and trees.
 */
public class DataStructureUtils {

    /**
     * Reverses an array in-place using the two-pointer approach.
     * 
     * This method modifies the original array by swapping elements from both ends
     * moving towards the center, effectively reversing the order of all elements.
     * 
     * @param arr The input array to be reversed
     * @return The reversed array (same reference as input)
     * 
     * Example:
     * int[] numbers = {1, 2, 3, 4, 5};
     * reverseArray(numbers);
     * // Result: {5, 4, 3, 2, 1}
     */
    public static int[] reverseArray(int[] arr) {
        // Validate input array
        if (arr == null || arr.length == 0) {
            return arr;
        }

        // Initialize pointers at both ends
        int left = 0;
        int right = arr.length - 1;

        // Swap elements until pointers meet
        while (left < right) {
            // Swap elements at left and right positions
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            // Move pointers towards center
            left++;
            right--;
        }

        return arr;
    }

    /**
     * Searches for a target value in a sorted array using binary search.
     * 
     * This method implements the binary search algorithm which reduces search time
     * to O(log n) by repeatedly dividing the search interval in half. The input array
     * must be sorted in ascending order for correct results.
     * 
     * @param arr The sorted input array to search in
     * @param target The value to search for
     * @return The index of the target if found, otherwise returns -1
     * 
     * Example:
     * int[] sorted = {1, 3, 5, 7, 9, 11};
     * int index = binarySearch(sorted, 7);
     * // Result: index = 3
     */
    public static int binarySearch(int[] arr, int target) {
        // Handle edge cases
        if (arr == null || arr.length == 0) {
            return -1;
        }

        // Initialize search boundaries
        int left = 0;
        int right = arr.length - 1;

        // Continue searching while left pointer doesn't exceed right pointer
        while (left <= right) {
            // Calculate middle index (prevents integer overflow)
            int mid = left + (right - left) / 2;

            // Check if target is at middle position
            if (arr[mid] == target) {
                return mid;
            }

            // If target is greater, ignore left half
            if (arr[mid] < target) {
                left = mid + 1;
            } 
            // If target is smaller, ignore right half
            else {
                right = mid - 1;
            }
        }

        // Target not found in array
        return -1;
    }

    /**
     *