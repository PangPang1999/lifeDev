function convertWeight(weight: number | string): number {
  // 类型缩小：判断 weight 是否为 number
  if (typeof weight === "number") {
    // 在这个分支里，编译器推断 weight 一定是 number
    return weight * 2.2; // kg 转 pounds 的简单演示
  } else {
    // 进入这个分支，说明 weight 是 string
    return parseInt(weight) * 2.2;
  }
}

convertWeight(10); // 22
convertWeight("10kg "); // 22

console.log("convertWeight(10):", convertWeight(10));
console.log('convertWeight("10kg "):', convertWeight("10kg "));
