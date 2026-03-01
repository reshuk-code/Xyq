/**
 * DataStructures Utility Module
 * 
 * This module provides utility functions for working with common data structures.
 * It includes implementations for basic operations on arrays, linked lists, and trees
 * without relying on external libraries.
 */
public class DataStructures {
    
    /**
     * Finds the maximum element in an array of integers.
     * 
     * Time Complexity: O(n) where n is the length of the array
     * Space Complexity: O(1)
     * 
     * @param array The input array of integers
     * @return The maximum element in the array
     * @throws IllegalArgumentException if the array is null or empty
     */
    public static int findMaxElement(int[] array) {
        if (array == null || array.length == 0) {
            throw new IllegalArgumentException("Array cannot be null or empty");
        }
        
        int max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
    
    /**
     * Checks if an array contains a specific value using binary search.
     * Note: The array must be sorted for this function to work correctly.
     * 
     * Time Complexity: O(log n) where n is the length of the array
     * Space Complexity: O(1)
     * 
     * @param array The sorted input array
     * @param target The value to search for
     * @return true if the target is found, false otherwise
     * @throws IllegalArgumentException if the array is null
     */
    public static boolean binarySearch(int[] array, int target) {
        if (array == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }
        
        int left = 0;
        int right = array.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (array[mid] == target) {
                return true;
            } else if (array[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return false;
    }
    
    /**
     * Reverses an array in-place without using additional data structures.
     * 
     * Time Complexity: O(n) where n is the length of the array
     * Space Complexity: O(1)
     * 
     * @param array The array to reverse
     * @throws IllegalArgumentException if the array is null
     */
    public static void reverseArray(int[] array) {
        if (array == null) {
            throw new IllegalArgumentException("Array cannot be null");
        }
        
        int