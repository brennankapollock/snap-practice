# Understanding Data Structures: Hash Tables

## Introduction

A hash table is a key-value data structure that allows near-instant access to the data associated with a specific key. It is especially useful for frequent lookup, insert, or delete operations. Hash tables are implemented as arrays under the hood, with some helper methods.

Arrays, on the other hand, are suitable when storing elements of the same type in a specific order or when frequently accessing them by their index.

Sets are employed when there's a need to store unique elements, without caring about duplicates, and when checking if an element is in a set or not.

## When to Use Each Data Structure

- **Arrays:**

  - Store elements of the same type in a particular order.
  - Frequent access by index is required.

- **Hash Tables:**

  - Store key-value pairs.
  - Frequent lookup, insert, or delete operations are needed.

- **Sets:**
  - Store unique elements.
  - Duplicates are not a concern.
  - Checking the presence of an element is the primary concern.

## Hash Table Implementation

### Class: HashTable

```javascript
class HashTable {
  constructor() {
    this.size = 10;
    this.table = new Array(this.size).fill(null).map(() => []);
  }

  hashFunction(key) {
    return key % this.size;
  }

  insert(key, value) {
    const hashIndex = this.hashFunction(key);
    let keyExists = false;
    let bucket = this.table[hashIndex];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        keyExists = true;
        bucket[i] = [key, value];
        break;
      }
    }

    if (!keyExists) {
      bucket.push([key, value]);
    }
  }
}
```

This HashTable class implements a basic hash table with a hash function, allowing the insertion of key-value pairs. It ensures efficient handling of collisions and supports frequent operations with a predefined size.

Understanding these data structures and when to use them is crucial for designing efficient algorithms and solving various types of problems.

## Use Cases

### Frequency Counts

Hash tables are often used for frequency counts, where the key holds the unique element being tracked, and the value holds the number of occurrences. This approach avoids nested loops and provides efficient solutions.

#### Examples:

1. **Top K Frequent Elements:**

   - A hash table can count the frequency of each element, and then a heap or another sorting algorithm can be used to select the top k.

2. **Ransom Note:**

   - A hash table can count the frequency of each character in the magazine.

3. **Find All Anagrams in a String:**

   - A hash table can count the frequency of each character in p, and then a sliding window can be used to track the frequency of characters in s.

4. **First Unique Character In a String:**
   - A hash map can count the frequency of each character, though a set may be a slightly better data structure here to save a small amount of space.

```javascript
const words = "i love love love interviewing.io";
const wordsArray = words.split(" ");

const counter = wordsArray.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(counter); // { i: 1, love: 3, 'interviewing.io': 1 }
```

### Classic Examples

1. **Two Sum and Three Sum:**

   - Hash tables are used to track the number with the key and the location in the array with the value.

2. **Index Ranges:**

   - Tracking something between a particular start and end index, often using the prefix & suffix array tracking strategy.

3. **Least Recently Used (LRU) Cache:**

   - An advanced problem involving a doubly-linked list and a hash table to track the locations of elements in the linked list. This problem is popular on platforms like LeetCode.

4. \*\*
