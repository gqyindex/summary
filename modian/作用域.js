let obj_1 = { a: 'xxx', b: { c: 3, d: 4 } };
let obj_2 = obj_1;
obj_1 = { a: 'yyy', b: { c: 4, d: 5 } };
obj_2.b = { c: 5, d: 6 };
console.log(obj_1);
console.log(obj_2);



var test = (function(a) {
    this.a = a;
    console.log(this);
    return function(b) {
        console.log(this);
        return this.a + b
    }
})(
    (function(a, b) {
        return a
    })(1, 2)
);

console.log(test(4));