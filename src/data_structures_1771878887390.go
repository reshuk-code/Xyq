package main

import (
	"fmt"
)

// Stack represents a Last-In-First-Out (LIFO) data structure.
// Elements are added and removed from the same end.
type Stack struct {
	items []interface{}
}

// Push adds an element to the top of the stack.
// Time complexity: O(1) amortized
// Space complexity: O(1) amortized
func (s *Stack) Push(item interface{}) {
	s.items = append(s.items, item)
}

// Pop removes and returns the top element from the stack.
// Returns nil if the stack is empty.
// Time complexity: O(1)
// Space complexity: O(1)
func (s *Stack) Pop() interface{} {
	if len(s.items) == 0 {
		return nil
	}
	item := s.items[len(s.items)-1]
	s.items = s.items[:len(s.items)-1]
	return item
}

// Peek returns the top element without removing it.
// Returns nil if the stack is empty.
// Time complexity: O(1)
// Space complexity: O(1)
func (s *Stack) Peek() interface{} {
	if len(s.items) == 0 {
		return nil
	}
	return s.items[len(s.items)-1]
}

// IsEmpty checks if the stack contains no elements.
// Time complexity: O(1)
// Space complexity: O(1)
func (s *Stack) IsEmpty() bool {
	return len(s.items) == 0
}

// Size returns the number of elements in the stack.
// Time complexity: O(1)
// Space complexity: O(1)
func (s *Stack) Size() int {
	return len(s.items)
}

// Queue represents a First-In-First-Out (FIFO) data structure.
// Elements are added at the rear and removed from the front.
type Queue struct {
	items []interface{}
}

// Enqueue adds an element to the rear of the queue.
// Time complexity: O(1) amortized
// Space complexity: O(1) amortized
func (q *Queue) Enqueue(item interface{}) {
	q.items = append(q.items, item)
}

// Dequeue removes and returns the front element from the queue.
// Returns nil if the queue is empty.
// Time complexity: O(n) due to slice manipulation
// Space complexity: O(1)
func (q *Queue) Dequeue() interface{} {
	if len(q.items) == 0 {
		return nil
	}
	item := q.items[0]
	q.items = q.items[1:]
	return item
}

// Front returns the front element without removing it.
// Returns nil if the queue is empty.
// Time complexity: O(1)
// Space complexity: O(1)
func (q *Queue) Front() interface{} {
	if len(q.items) == 0 {
		return nil
	}
	return q.items[0]
}

// IsEmpty checks if the queue contains no elements.
// Time complexity: O(1)
// Space complexity: O(1)
func (q *Queue) IsEmpty() bool {