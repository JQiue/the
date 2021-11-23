/**
 * @description 生成整数数组
 * @param count {Number} 生成数量，有序的 
 * @param random {Boolean} 是否随机顺序
 * @return Array
 */
 function range (count = 0, random){
  const arr = [];
  arr.forEach
  let i = 0;
  while (i < count) {
    let rand = Math.floor(Math.random() * count);
    if(random){
      while(arr.includes(rand)){
        rand = Math.floor(Math.random() * count);
      }
      arr[i] = rand;
    } else {
      arr[i] = i;
    }
    i++;
  }
  return arr;
}

module.exports = function () {
  globalThis.range = range;
}
