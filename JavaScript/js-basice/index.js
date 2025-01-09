const first = [1, 2, 3];
const second = [4, 5, 6];
const objArr = [{ id: 1 }];

const combined = first.concat(second);

const slice = combined.slice(2, 4);
const copy = combined.slice();

console.log(slice);
console.log(combined);

const combineObj = combined.concat(objArr);
objArr[0].id = 10;
console.log(combineObj);
