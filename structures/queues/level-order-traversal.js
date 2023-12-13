// “Given a binary tree return the level order traversal of it’s node values”

// Assuming you have a TreeNode class with 'val', 'left', and 'right' properties
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// Function to perform level-order traversal of a binary tree
function levelOrder(root) {
  // Check if the tree is empty
  if (!root) {
    return [];
  }

  // Initialize a result array to store the levels of the tree
  const result = [];

  // Initialize a queue with the root node
  const queue = [root];

  // Loop until the queue is empty
  while (queue.length > 0) {
    // Get the number of nodes at the current level
    const levelSize = queue.length;

    // Initialize an array to store the values of nodes at the current level
    const level = [];

    // Iterate through all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      // Dequeue the first element from the queue
      const node = queue.shift();

      // Add the value of the current node to the level array
      level.push(node.val);

      // Enqueue the left child if it exists
      if (node.left) {
        queue.push(node.left);
      }

      // Enqueue the right child if it exists
      if (node.right) {
        queue.push(node.right);
      }
    }

    // Add the current level array to the result array
    result.push(level);
  }

  // Return the final result, representing the levels of the tree
  return result;
}

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// Call the levelOrder function with the root of the tree
const result = levelOrder(root);

// Print the result (an array representing the levels of the tree)
console.log(result);
