function interest(principal, rate = 3.5, year = 5) {
  // rate = rate || 3.5;
  // year = year || 5;

  return ((principal * rate) / 100) * year;
}

console.log(interest(10000)); // 使用默认值：rate = 3.5, year = 5
console.log(interest(10000, undefined, 10)); // rate使用默认值3.5, year = 10
