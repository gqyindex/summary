//普通函数中
var a = 'I am a';
function fn(){
    console.log(this.a); //a
}
fn(); //this指向window


//对象函数调用（哪个对象调用，就指向哪个）
var b = 'I am b';
var obj = {
    b : 'bbbbb',
    fnb:function () {
        console.log(this.b)
    }
};
obj.fnb();

let obj1={
    b:222
};
let obj2={
    b:111,
    fn:function(){
        console.log(this.b);
    }
};
obj1.fn=obj2.fn;
obj1.fn();//222,因为还是obj1调用的fn


//****构造函数的调用
function Person(name) {
    this.name = name;
    this.sayHi = function () {
        console.log('hi~' + this.name)
    }
}
var person = new Person('index');
person.sayHi();

function unique()
{
    this.user = 'index';
    return {}; //return function(){};
}
var c = new unique();
console.log(c.user); //undefined

function unique1()
{
    this.user = 'index';
    return 1; //return undefined
}
var d = new unique1();
console.log(d.user);


//箭头函数里面本身没有this，他的this是继承执行环境的
var obj={
    a:222,
    fn:function(){
        setTimeout(()=>{console.log(this.a)});
    }
};
obj.fn();//222 this向上级作用域查找，找到了fn，fn的this指向的是obj，所以指向obj

