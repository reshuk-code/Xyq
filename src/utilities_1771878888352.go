package main

import (
	"fmt"
	"strings"
	"unicode"
)

// StringUtils provides utility functions for string manipulation.
type StringUtils struct{}

// ToTitleCase converts a string to title case where the first letter
// of each word is capitalized and the rest are lowercase.
// For example: "hello world" becomes "Hello World"
func (su *StringUtils) ToTitleCase(s string) string {
	if s == "" {
		return ""
	}

	words := strings.Fields(s)
	for i, word := range words {
		if len(word) > 0 {
			runes := []rune(word)
			runes[0] = unicode.ToUpper(runes[0])
			for j := 1; j < len(runes); j++ {
				runes[j] = unicode.ToLower(runes[j])
			}
			words[i] = string(runes)
		}
	}
	return strings.Join(words, " ")
}

// ReverseString reverses a string and returns the reversed version.
// It handles UTF-8 runes correctly to support multi-byte characters.
// For example: "hello" becomes "olleh"
func (su *StringUtils) ReverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

// MathUtils provides utility functions for mathematical operations.
type MathUtils struct{}

// Max returns the maximum value among the provided integers.
// Returns the first value if the slice is empty.
func (mu *MathUtils) Max(numbers ...int) int {
	if len(numbers) == 0 {
		return 0
	}

	max := numbers[0]
	for _, num := range numbers[1:] {
		if num > max {
			max = num
		}
	}
	return max
}

// Min returns the minimum value among the provided integers.
// Returns the first value if the slice is empty.
func (mu *MathUtils) Min(numbers ...int) int {
	if len(numbers) == 0 {
		return 0
	}

	min := numbers[0]
	for _, num := range numbers[1:] {
		if num < min {
			min = num
		}
	}
	return min
}

// IsEven checks if a number is even.
// Returns true if the number is divisible by 2, false otherwise.
func (mu *MathUtils) IsEven(n int) bool {
	return n%2 == 0
}

// ArrayUtils provides utility functions for array/slice operations.
type ArrayUtils struct{}

// Contains checks if a slice contains a specific string value.
// Returns true if the value is found, false otherwise.
func (au *ArrayUtils) Contains(slice []string, value string) bool {
	for _, item := range slice {
		if item == value {
			return true
		}
	}
	return false
}

// RemoveDuplicates removes duplicate strings from a slice