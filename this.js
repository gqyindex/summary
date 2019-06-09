var x = 3;
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function () {
            return this.x
        }
    }
}
var go = foo.baz.bar;
go();
foo.baz.bar();

console.log([1, 2] + [2, 1]);
// 1,22,1
