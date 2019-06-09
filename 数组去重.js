//数组去重的方法总结

//1.我最先想到的办法，简化了时间复杂度
function unique1(arr) {
    let result = {};
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.hasOwnProperty(arr[i])){
            newarr.push(arr[i]);
            result[arr[i]] = arr[i];
        }
    }
    return newarr
}

console.log(unique1([1,2,3,4,1,2,3]));

//2. indexOf 的方法
function unique2(arr) {
    var newarr = [];
    for (let i = 0; i < arr.length ; i++){
        if (newarr.indexOf(arr[i]) === -1){
            newarr.push(arr[i])
        }
    }
    return newarr
}
console.log(unique2([1,2,3,1,2,1]));

//3.ES6
function unique3(array) {
    return Array.from(new Set(array));
}

console.log(unique3([1,2,1,2,1,3]));