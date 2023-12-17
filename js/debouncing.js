// Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds,
// it must wait until after X milliseconds have elapsed since the debounced function was last called. You almost certainly have encountered debouncing in your daily lives before — when entering an elevator.
// Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

// Implement a debounce function which accepts a callback function and a wait duration.
// Calling debounce() returns a function which has debounced invocations of the callback function following the behavior described above.

function debounce(callback, wait) {
  let timeoutId;

  return function () {
    const args = arguments;

    // Clear the previous timeout
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, wait);
  };
}

function myFunction() {
  console.log("Debounced function called");
}

const debouncedFunction = debounce(myFunction, 1000); // Set a wait time of 1000 milliseconds (1 second)

// Now, you can call debouncedFunction() multiple times, and it will only execute the actual function after the specified wait time has passed.
debouncedFunction(); // This won't trigger the function immediately
debouncedFunction(); // This won't trigger the function immediately
// ...

// After 1000 milliseconds (1 second) from the last call, myFunction will be executed.
