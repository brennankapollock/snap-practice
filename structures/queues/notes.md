# Understanding and Utilizing Queues

## Introduction

Demonstrating knowledge of where and why queues are used can set you apart. If the problem involves traversing a graph or a tree, mention that a queue would be perfect for a Breadth-First Search (BFS) because it naturally facilitates level-by-level traversal.

If the problem hints towards processing elements in a rolling window of a certain size, articulate that a queue can help manage this 'sliding window' scenario effectively. Additionally, while discussing the implementation, highlight the reasons to use a singly-linked list over a doubly-linked list (saving memory, simpler implementation) unless backward traversal is required.

## Queues

- **Definition**: First In, First Out (FIFO)
- **Usage**:
  - Network traffic management
  - Memory allocation
  - Operating system operations
- A collection of items maintained in a specific order
- **Operations**:
  - Enqueue: Add element to the end
  - Dequeue: Remove element from the front
  - Peek: Return the first element in the queue
  - isEmpty: Check if it’s empty
  - Size: Return the number of elements in the queue
- All operations performed in constant time O(1)

## Implementations

- In JavaScript, an array can be used to implement a queue. However, popping off the first element requires shifting all elements by one, resulting in a time complexity of O(n).
- A "circular buffer" technique is another approach. It treats the array as if it were connected end to end, forming a "circle" when the end of the array is reached. Two pointers are used at the front (enqueue) and back (dequeue).
- Another implementation is the linked list, where the front of the queue is represented by the head and the end by the tail. Enqueue adds elements to the end, and dequeue removes elements from the head. It doesn't require size definition at the onset.

## Uses

### Graph Algorithms (BFS and Level Order Traversal)

- Unlike DFS that uses a stack, BFS employs a queue.
- The first node discovered is the first one explored.
- As BFS moves over each level, it uses a queue to keep track of the next nodes to visit. When finished with one, it dequeues it, and when arriving at a new node, it enqueues it.

## Common Questions

1. **Walls & Gates**
2. **Transformation Dictionary**
3. **Even Odd Tree**
4. **Infinite Binary Print**