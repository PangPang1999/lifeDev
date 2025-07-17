import * as _ from "lodash";

const arr = [1, 2, 3];
const copy = _.clone(arr); // 类型自动推断为 number[]
console.log(copy); // 输出: [1, 2, 3]
