type WatchParameter = {
  methodName: string;
  parameterIndex: number;
};

// 用于存储元数据的数组 (通常更复杂的元数据反射系统会用到)
const watchedParameters: WatchParameter[] = [];

// 1. 定义参数装饰器
function Watch(target: any, methodName: string, parameterIndex: number) {
  // 2. 记录元数据
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}

// 验证 (装饰器在类定义时执行)
console.log("Watched Parameters Metadata:", watchedParameters);
// 输出类似:
// Watched Parameters Metadata: [ { methodName: 'move', parameterIndex: 0 } ]
