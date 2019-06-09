// 实现一个闭包，要求fn(1)(2)=3
function fn(a) {
    return function (b) {
        return a + b
    }
}

let sum = fn(1)(2);
console.log(sum);

//多个数字相加
function add(a) {
    return function (b) {
        return function (r) {
            return a+b+r
        }
    }
}

console.log(add(1)(2)(3));

