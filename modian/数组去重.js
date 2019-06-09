var arr = ['a', 'b', 'c', 'a', 'b', 'd'];
var test = ['a'];
// console.log(unique(arr));
console.log(unique(test));

function unique(arr) {
    if (arr.length ===1 ||arr.length === 0){
        return arr
    }
    let newarr = [];
    let result = {};
    for (let i = 0; i < arr.length ;i++){
        if (!result.hasOwnProperty(arr[i])){
            newarr.push(arr[i]);
            result[arr[i]] = arr[i];
        }
    }
    return newarr
}

var objArr = [
    { a: 1, b: 3 },
    { a: 2, b: 4 },
    { a: 3, b: 5 },
    { a: 1, b: 4 },
    { a: 1, b: 3 }
    ];

function dubRemove(arr){
    if (arr.length === 1 || arr.length === 0) {
        return arr
    }
    let result=[];
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        let a=arr[i].a;
        if(!newarr[a]){
            result.push(arr[i]);
            newarr[a]=1
        }
    }
    return result;
}

console.log(dubRemove(objArr))

