## 1. What is JavaScript?

### JavaScript is a versatile programming language used for creating interactive and dynamic web content. It runs in web browsers and allows developers to enhance user experience through client-side scripting.

## 2. Explain the event loop in JavaScript.

### The event loop manages the execution of code, ensuring non-blocking operations. It continuously checks the message queue for tasks, executing them one by one. This allows JavaScript to handle asynchronous tasks without freezing the user interface.

## 3. What is hoisting in JavaScript?

### Hoisting moves variable and function declarations to the top of their containing scope during the compilation phase. This allows you to use variables or functions before they are declared.

```
console.log(x); // undefined
var x = 5;

// The above code is essentially interpreted as follows during execution:

var x; // Declaration is hoisted to the top
console.log(x); // undefined
x = 5; // Initialization

// Contrast this with let and const:

console.log(y); // ReferenceError: y is not defined
let y = 10;
```

#### In the case of let and const, both declaration and initialization are hoisted.

## 4. What is the difference between let, const, and var in variable declaration?

### var has function-level scope, let has block-level scope, and const is used for constants. let and const provide better scoping and prevent variable redeclaration.

```
if (true) {
var varVariable = 1;
let letVariable = 2;
const constVariable = 3;
}
console.log(varVariable); ###  1
console.log(letVariable); ### ReferenceError
console.log(constVariable); ### ReferenceError
```

## 5. What is closure in JavaScript?

### A closure is a function bundled with its lexical environment, allowing it to access variables from its outer scope even after that scope has finished executing.

```
function outer() {
let outerVar = "I am from outer!";
function inner() {
console.log(outerVar);
}
return inner;
}


const closureFunction = outer();
closureFunction(); ### Output: I am from outer!
```

## 6. Explain the concept of prototypal inheritance in JavaScript.

### JavaScript uses prototype-based inheritance, where objects can inherit properties and methods from other objects. Each object has a prototype object, forming a chain.

```
function Animal(name) {
this.name = name;
}

Animal.prototype.makeSound = function () {
console.log("Generic Animal Sound");
};

function Dog(name) {
Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog("Buddy");
myDog.makeSound(); ### Output: Generic Animal Sound
```

## 7. What is the this keyword in JavaScript?

### this refers to the current execution context. Its value depends on how a function is called: in the global scope, it refers to the global object; in a method, it refers to the object the method is called on.

```
const person = {
name: "John",
greet: function () {
console.log(`Hello, ${this.name}!`);
},
};

person.greet(); ### Output: Hello, John!
```

## 8. How does asynchronous programming work in JavaScript?

### Asynchronous programming allows non-blocking execution. Callbacks, Promises, and Async/Await are common patterns. Callbacks are functions passed as arguments, while Promises and Async/Await provide more structured ways to handle asynchronous tasks.

### Using Callbacks

```
function fetchData(callback) {
setTimeout(() => {
callback("Data received");
}, 1000);
}

fetchData((data) => {
console.log(data); ### Output: Data received
});
```

## 9. What is the difference between == and === in JavaScript?

### == performs type coercion, allowing comparison of different types after conversion. === strictly compares both value and type, making it a safer choice.

```
5 == "5"; // true (type coercion)
5 === "5"; // false (strict comparison)
```

## 10. What is the difference between null and undefined in JavaScript?

### null is a deliberate assignment meaning no value or no object exists, while undefined indicates a variable has been declared but not assigned a value.

```
let x; ### undefined
let y = null;
```

## 11. What is a callback function? Provide an example.

### A callback function is a function passed as an argument to another function and executed after its parent function completes.

```
function doSomething(callback) {
console.log("Doing something...");
callback();
}

doSomething(() => {
console.log("Callback executed.");
});
```

## 12. Explain the concept of function currying.

### Function currying is a technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

```
function curryAdd(x) {
return function (y) {
return x + y;
};
}

const addFive = curryAdd(5);
console.log(addFive(3)); ### Output: 8
```

## 13. What is the purpose of the bind method? Provide an example.

### The bind method creates a new function with a specified this value and initial arguments. It is often used to set the context of a function.

```
const person = {
name: "Alice",
greet: function () {
console.log(`Hello, ${this.name}!`);
},
};

const greetFunction = person.greet;
const boundFunction = greetFunction.bind(person);
boundFunction(); ### Output: Hello, Alice!
```

## 14. How does the spread operator (...) work, and what is its purpose?

### The spread operator is used to spread the elements of an iterable (like an array) or the properties of an object into another array or object.

```
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); ### Output: [1, 2, 3, 4, 5]
```

## 15. Explain the difference between let, const, and var in terms of hoisting.

### While var is hoisted to the top of its scope, both let and const are hoisted but not initialized. This means using let or const before declaration results in a ReferenceError.

```
console.log(x); ### undefined
var x = 5;

console.log(y); ### ReferenceError
let y = 10;
```

## 16. What is the purpose of the map method in JavaScript? Provide an example.

### The map method creates a new array by applying a provided function to each element of the original array.

```
const numbers = [1, 2, 3];
const squaredNumbers = numbers.map((num) => num \* num);
console.log(squaredNumbers); ### Output: [1, 4, 9]
```

## 17. Explain the concept of debouncing and provide a use case.

### Debouncing is a delay tactic used to ensure that time-consuming tasks do not fire so often, slowing down the browser's performance. A common use case is in handling search input.

```
function debounce(func, delay) {
let timeoutId;
return function () {
clearTimeout(timeoutId);
timeoutId = setTimeout(() => {
func.apply(this, arguments);
}, delay);
};
}

const searchHandler = debounce(searchFunction, 300);
```

## 18. What is a closure, and how is it useful in practical scenarios?

### A closure is a function bundled with its lexical environment, allowing it to access variables from its outer scope. Closures are useful for data encapsulation and maintaining state.

```
function counter() {
let count = 0;
return function () {
count++;
console.log(count);
};
}

const increment = counter();
increment(); ### Output: 1
increment(); ### Output: 2
```

## 19. Explain the concept of CORS and how it is handled in JavaScript.

### Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers to restrict web pages from making requests to a different domain. CORS headers must be set on the server, and in JavaScript, the XMLHttpRequest or fetch API is used.

### Using Fetch API with CORS

```
fetch("https:###api.example.com/data")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error("Error:", error));
```
