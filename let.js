/* let 和 const 声明的变量，不进行预解析，
 是块级作用域，仅在定义范围有效
 都不可重复声明*/
for (let codePoint of 'foo') {
    console.log(codePoint)
}
