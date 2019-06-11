var a = {n: 1}
var b = a
a.x = a = {n: 2}
console.log(a.n, b.n) // ? ? 2 1
console.log(a.x, b.x) // ? ? undefined   object{ n: 2}