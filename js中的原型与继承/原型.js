function Person(name){

    this.name = name;

}

function Mother(){ }

Mother.prototype = {      //Mother的原型

    age: 18,

    home: ['Beijing']

};

Person.prototype = new Mother();   //Person的原型为Mother

var p1 = new Person('Jack');   //Person中的this指向p1 p1.name = Jack

var p2 = new Person('Mark');

p1.age = 20;  //p1自己有一个age属性，跟他的原型无关，自己的属性覆盖了原型上的属性

p1.home = ['Hangzhou', 'Guangzhou']; //自己的属性跟原型无关

p1.home[0] = 'Shenzhen';  //相当于在p1的原型上，改变了home属性，他的Mother()无这个属性，就去原型上查找，修改

Person.prototype.lastName = 'Jin'; //给Mother加了一个属性叫lastName，等同于Mother.lastName='Jin'

Person.prototype = {

    age: 28,

    address: { country: 'USA', city: 'Washington' }

};  //重写了Person的原型，覆盖了Mother

var p3 = new Person('Obama');  //name = Obama，age=28,address: { country: 'USA', city: 'Washington' }

Mother.prototype.no = 9527; //p1和p2继承了新属性no,但是p3没有继承，因为他被重写了




