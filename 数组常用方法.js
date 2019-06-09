//foreach
let arr = [1,3,5,7,9];
arr.forEach(function (item) {
    console.log(item)
});

//for in
let arr2 = [2,3,4,5,6,7];
for (key in arr2){
    console.log(key,arr2[key])
}

//for of
let arr3 = [1,2,3,4,56];
for (val of arr3){
    console.log(val)
}

let arr4 = [1,2,3,4,5,6];
let result = arr4.forEach(function (value,index,array) {
    return value + 100
});
console.log(result); //undefined

//map方法返回一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
let arr5 = [1,4,56,7];
let remap = arr5.map(function (value, index, array) {
    return value + 1000
});
console.log(remap);//[1001, 1004, 1056, 1007]

//filter
let arr6 = [2,4,6,8,3,7,9];
let refilter = arr6.filter(function (value) {
    return value%2 === 0
});
console.log(refilter);

//every 全部满足条件则返回true,否则返回false
//some 用法同上，只要有一个满足条件就返回true
let arr7 = [3,5,7,0];
let revery = arr7.every(function (value) {
    return value%2 === 1
});
console.log(revery);

//reduce
let arr8 = [1,2,3,4];
let reduces = arr8.reduce(function (pre,cur) {
    return pre+cur
});
console.log(reduces);

//splice
console.log([1,2,3,4].splice(1,2));