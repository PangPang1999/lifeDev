const numbers = [3, 4];

// End
numbers.push(5, 6); // add element at end of

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, "a", "b"); // index from 0

console.log(numbers);
