function minimumBribes(q) {
  // Variable to keep track of the total number of bribes
  let bribes = 0;

  // Loop through each person in the queue
  for (let i = 0; i < q.length; i++) {
    // Calculate the original position of the person
    const originalPosition = q[i] - 1;

    // Check if the person has moved more than two positions forward
    if (originalPosition - i > 2) {
      console.log("Too chaotic");
      return;
    }

    // Count the number of bribes for each person by comparing with previous positions
    for (let j = Math.max(0, originalPosition - 1); j < i; j++) {
      if (q[j] > q[i]) {
        bribes++;
      }
    }
  }

  // Print the total number of bribes
  console.log(bribes);
}

// Example usage
const q = [2, 1, 5, 3, 4];
minimumBribes(q);
