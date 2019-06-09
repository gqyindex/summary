var x = 1,
    y = z = 0

function add(n) {
    console.log('1');
    return n = n + 1
}
y = add(x)

function add(n) {
    console.log('ok');
    return n = n + 3
}
z = add(x)
console.log(x, y, z);

//因为变量预解释的时候，add函数被覆盖，所以执行的都是第二个
// 1 4 4
