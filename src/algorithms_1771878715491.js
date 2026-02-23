/**
 * Binary Search Tree Implementation
 * A self-balancing binary search tree that maintains sorted data
 * with O(log n) average time complexity for search, insert, and delete operations
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; // For AVL balancing
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  /**
   * Get the height of a node
   * @param {Node} node - The node to measure
   * @returns {number} The height of the node
   */
  getHeight(node) {
    return node ? node.height : 0;
  }

  /**
   * Get the balance factor of a node (difference between left and right heights)
   * @param {Node} node - The node to check
   * @returns {number} The balance factor
   */
  getBalanceFactor(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  /**
   * Update the height of a node based on its children
   * @param {Node} node - The node to update
   */
  updateHeight(node) {
    if (node) {
      node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
  }

  /**
   * Perform a right rotation on a node (used for left-heavy imbalance)
   * @param {Node} node - The node to rotate
   * @returns {Node} The new root of the subtree
   */
  rotateRight(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    this.updateHeight(node);
    this.updateHeight(newRoot);
    return newRoot;
  }

  /**
   * Perform a left rotation on a node (used for right-heavy imbalance)
   * @param {Node} node - The node to rotate
   * @returns {Node} The new root of the subtree
   */
  rotateLeft(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    this.updateHeight(node);
    this.updateHeight(newRoot);
    return newRoot;
  }

  /**
   * Insert a value into the AVL tree while maintaining balance
   * @param {*} value - The value to insert
   */
  insert(value) {
    this.root = this._insertHelper(this.root, value);
  }

  /**
   * Recursive helper function for insertion
   * @param {Node} node - Current node in traversal
   * @param {*} value - Value to insert
   * @returns {Node} The new root of the subtree
   */
  _insertHelper(node, value) {
    // Base case: create new node if current position is empty
    if (!node) {
      return new Node(value);
    }

    // Recursively insert in left or right subtree based on value comparison
    if (value < node