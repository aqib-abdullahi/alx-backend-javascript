const weakMap = new WeakMap();
function queryAPI(endPoint) {
  if (!weakMap.has(endPoint)) {
    weakMap.set(endPoint, 1);
  } else {
    const counter = weakMap.get(endPoint) + 1;
    weakMap.set(endPoint, counter);
    if (counter >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}

export { queryAPI, weakMap };
