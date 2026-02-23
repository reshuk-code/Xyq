import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

// This is a simple example that uses Claude to explain data structures
// In a real implementation, you would implement the actual data structure

async function explainDataStructure(dataStructureName) {
  const message = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `Explain the ${dataStructureName} data structure and provide a JavaScript implementation example with detailed comments explaining the logic.`,
      },
    ],
  });

  return message.content[0].type === "text" ? message.content[0].text : "";
}

// Implementation of a Binary Search Tree data structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  // Time Complexity: O(log n) average case, O(n) worst case
  insert(value) {
    const newNode = new Node(value);

    // If tree is empty, set root to new node
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // Otherwise, traverse tree to find insertion point
    let current = this.root;
    while (true) {
      // Avoid duplicates
      if (value === current.value) return undefined;

      // Go left if value is less than current node
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        // Go right if value is greater than current node
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in the BST
  // Time Complexity: O(log n) average case, O(n) worst case
  search(value) {
    let current = this.root;

    while (current) {
      // Found the value
      if (value === current.value) return true;

      // Search left subtree if value is smaller
      if (value < current.value) {
        current = current.left;
      } else {
        // Search right subtree if value is larger
        current = current.right;
      }
    }

    // Value not found
    return false;
  }

  // In-order traversal: Left -> Root -> Right
  // Produces values in sorted order
  inOrderTraversal(node = this.root, result = []) {
    if (node !== null) {
      // Recursively traverse left subtree
      this.inOrderTraversal(node.left, result);

      // Visit current node
      result.push(node.value);

      // Recursively traverse right subtree
      this.inOrderTraversal(node.right, result);
    }

    return result;
  }