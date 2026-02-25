package main

import (
	"context"
	"fmt"
	"strings"

	"github.com/anthropic-ai/sdk-go"
)

func main() {
	// Initialize the Anthropic client
	// The API key is automatically read from ANTHROPIC_API_KEY environment variable
	client := sdk.NewClient()

	// Create a message request that asks Claude to explain and implement data structures
	// We're using the Messages API to interact with Claude
	message, err := client.Messages.New(context.Background(), &sdk.MessageNewParams{
		Model: sdk.String("claude-3-5-sonnet-20241022"),
		Messages: []sdk.MessageParam{
			sdk.NewUserMessage("Explain the key data structures (arrays, linked lists, stacks, queues, trees, graphs, hash tables) with their operations and time complexities. For each, provide a brief Go implementation example."),
		},
		MaxTokens: sdk.Int(4096),
	})

	if err != nil {
		panic(err)
	}

	// Extract and display the response
	fmt.Println("=== Data Structures Algorithm Explanation ===\n")

	// Process the response content
	for _, block := range message.Content {
		if textBlock, ok := block.(*sdk.TextBlock); ok {
			// Display the Claude's explanation
			fmt.Println(textBlock.Text)
			fmt.Println("\n" + strings.Repeat("=", 50) + "\n")
		}
	}

	// Now let's demonstrate with actual Go implementations
	fmt.Println("=== Practical Data Structures Implementation ===\n")

	// 1. Stack implementation
	fmt.Println("1. Stack (LIFO - Last In First Out):")
	stack := NewStack()
	stack.Push(1)
	stack.Push(2)
	stack.Push(3)
	fmt.Printf("Stack after pushing 1, 2, 3: %v\n", stack.items)
	fmt.Printf("Pop: %v, Stack: %v\n", stack.Pop(), stack.items)
	fmt.Println()

	// 2. Queue implementation
	fmt.Println("2. Queue (FIFO - First In First Out):")
	queue := NewQueue()
	queue.Enqueue(1)
	queue.Enqueue(2)
	queue.Enqueue(3)
	fmt.Printf("Queue after enqueuing 1, 2, 3: %v\n", queue.items)
	fmt.Printf("Dequeue: %v, Queue: %v\n", queue.Dequeue(), queue.items)
	fmt.Println()

	// 3. Linked List implementation
	fmt.Println("3. Singly Linked List:")
	linkedList := NewLinkedList()
	linkedList.Insert(1)
	linke