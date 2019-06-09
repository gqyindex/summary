// 请写出以下代码执行的顺序

setTimeout(function () {
    console.log(1);
});

new Promise(function(resolve,reject){
    console.log(2);
    resolve(3);
}).then(function(val){
    console.log(val);
});
console.log(4);

// 2 4 3 1
// 在同步代码执行完成后才回去检查是否有异步任务完成，并执行对应的回调，而微任务又会在宏任务之前执行。
// 同步代码=>异步代码(微任务=>宏任务)
// 宏任务: setTimeout
// 微任务: Promise.then
