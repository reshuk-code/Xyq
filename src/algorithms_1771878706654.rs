//! Algorithms Module
//!
//! This module provides common algorithms for sorting, searching, and mathematical operations.
//! All implementations use only standard library functionality.

/// Performs a binary search on a sorted slice to find the target value.
///
/// This function uses the binary search algorithm to efficiently find an element
/// in a sorted array. It returns the index of the element if found, or None if not found.
///
/// # Arguments
///
/// * `arr` - A sorted slice of comparable elements
/// * `target` - The value to search for
///
/// # Returns
///
/// * `Some(usize)` - The index of the target if found
/// * `None` - If the target is not in the array
///
/// # Examples
///
/// /// let arr = vec![1, 3, 5, 7, 9];
/// assert_eq!(binary_search(&arr, &5), Some(2));
/// assert_eq!(binary_search(&arr, &4), None);
/// pub fn binary_search<T: Ord>(arr: &[T], target: &T) -> Option<usize> {
    let mut left = 0;
    let mut right = arr.len();

    while left < right {
        let mid = left + (right - left) / 2;
        match arr[mid].cmp(target) {
            std::cmp::Ordering::Equal => return Some(mid),
            std::cmp::Ordering::Less => left = mid + 1,
            std::cmp::Ordering::Greater => right = mid,
        }
    }

    None
}

/// Calculates the Fibonacci number at the given index using iteration.
///
/// This function computes the nth Fibonacci number where F(0) = 0 and F(1) = 1.
/// It uses an iterative approach for efficiency, avoiding stack overflow issues
/// that could occur with naive recursive implementations.
///
/// # Arguments
///
/// * `n` - The index of the Fibonacci number to calculate
///
/// # Returns
///
/// * The nth Fibonacci number as a u64
///
/// # Examples
///
/// /// assert_eq!(fibonacci(0), 0);
/// assert_eq!(fibonacci(1), 1);
/// assert_eq!(fibonacci(6), 8);
/// pub fn fibonacci(n: u32) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => {
            let mut prev = 0u64;
            let mut curr = 1u64;
            for _ in 2..=n {
                let next = prev + curr;
                prev = curr;
                curr = next;
            }
            curr
        }
    }
}

/// Sorts a slice in ascending order using the bubble sort algorithm.
///
/// This is a simple sorting algorithm that repeatedly steps through the list,
/// compares adjacent elements, and swaps them if they are in the wrong order.
/// While not efficient for large datasets, it's useful for educational purposes.
///
/// # Arguments
///
/// * `arr` - A mutable slice to be sorted
pub fn bubble_sort<T: Ord>(arr: &mut [T]) {
    let n = arr.len();
    for i in 0..n {
        for j