//1、原型链继承 ======》核心：要继承的元素的prototype指向父级的prototype
function Father() {

}

Father.prototype.fgetName = function () {
    return 'I am Father prototype'
};

function Son() {

}

   //这一步实现继承，相当于Son.prototype = Father.prototype
Son.prototype = new Father();

Son.prototype.sgetName = function () {
    return 'I am Son prototype'
};

var grandson = new Son();

console.log(grandson.fgetName());


//2、借用构造函数 =====》核心：使用call和apply使元素在他父级环境下运行
function Sup() {
    this.name = ['g','q','y']
}

function Sub() {
    Sup.call(this)   //这一步相当于继承Sup的this.name，因为this不同，所以互不影响
}

var subSon = new Sub();
subSon.name.push('i');
console.log(subSon.name);
var subSon1 = new Sup();
console.log(subSon1.name);


//组合继承（原型链+构造函数）
function SuperType(name) {
    this.name = name;
    this.colors = ["red","blue","green"]
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
};
    //子类使用call在父类环境中执行，子类的prototype指向父类的prototype
function SubType(name,age) {
    SuperType.call(this,name);
    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    console.log(this.age);
};

var instance1 = new SubType("Nicholas", 29);
var instance2 =new SubType("Greg", 27);
instance1.colors.push("black");
console.log(instance1.colors); // red,blue,green,black
console.log(instance2.colors); // red,blue,green


//原型式继承
var person = {
    name:'Tom',
    hobbies:'swim,sing,coding'
};
var otherPerosn = Object.create(person);  //创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
console.log(otherPerosn.hobbies);

//寄生式继承
function createAnother(original){
    var clone = Object.create(original);    //通过调用函数创建一个新对象
    clone.sayHi = function(){               //以某种方式来增强这个对象
        console.log("Hi");
    };

    return clone;                        //返回这个对象
}

var person = {
    name: "Bob",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi();


//寄生组合式继承
function SuperType1(name){
    this.name=name;
}
SuperType1.prototype.eat=function(){};

function subType1(name,age){
    SuperType1.call(this,age);
    this.age=age;
}

function Temp(){};
Temp.prototype=SuperType1.prototype;
let temp=new Temp();
subType1.prototype=temp;
temp.constructor=subType1;

let student1=new subType1('me',20);
console.log(student1)