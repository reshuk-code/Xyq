package main

import (
	"fmt"
	"sort"
)

// AlgorithmError represents an error that occurs during algorithm execution
type AlgorithmError struct {
	Operation string
	Message   string
	Err       error
}

func (e *AlgorithmError) Error() string {
	if e.Err != nil {
		return fmt.Sprintf("algorithm error in %s: %s (%v)", e.Operation, e.Message, e.Err)
	}
	return fmt.Sprintf("algorithm error in %s: %s", e.Operation, e.Message)
}

// AlgorithmHelper provides various algorithm utilities with proper error handling
type AlgorithmHelper struct{}

// NewAlgorithmHelper creates a new instance of AlgorithmHelper
func NewAlgorithmHelper() *AlgorithmHelper {
	return &AlgorithmHelper{}
}

// BinarySearch performs binary search on a sorted slice of integers
// Returns the index of the target or -1 if not found
func (ah *AlgorithmHelper) BinarySearch(arr []int, target int) (int, error) {
	if arr == nil {
		return -1, &AlgorithmError{
			Operation: "BinarySearch",
			Message:   "input array cannot be nil",
		}
	}

	if len(arr) == 0 {
		return -1, &AlgorithmError{
			Operation: "BinarySearch",
			Message:   "input array cannot be empty",
		}
	}

	left, right := 0, len(arr)-1

	for left <= right {
		mid := left + (right-left)/2
		if arr[mid] == target {
			return mid, nil
		} else if arr[mid] < target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return -1, nil
}

// QuickSort sorts an array using the quicksort algorithm
func (ah *AlgorithmHelper) QuickSort(arr []int) ([]int, error) {
	if arr == nil {
		return nil, &AlgorithmError{
			Operation: "QuickSort",
			Message:   "input array cannot be nil",
		}
	}

	if len(arr) <= 1 {
		return arr, nil
	}

	result := make([]int, len(arr))
	copy(result, arr)

	ah.quickSortHelper(result, 0, len(result)-1)
	return result, nil
}

func (ah *AlgorithmHelper) quickSortHelper(arr []int, low, high int) {
	if low < high {
		pi := ah.partition(arr, low, high)
		ah.quickSortHelper(arr, low, pi-1)
		ah.quickSortHelper(arr, pi+1, high)
	}
}

func (ah *AlgorithmHelper) partition(arr []int, low, high int) int {
	pivot := arr[high]
	i := low - 1

	for j := low; j < high; j++ {
		if arr[j] < pivot {
			i++
			arr[i], arr[j] = arr[j], arr[i]
		}
	}

	arr[i+1],