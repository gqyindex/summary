//三者都是改变this的指向，第一个参数都是要改变指向的元素
var xw = {
    name : "小王",
    gender : "男",
    age : 24,
    say : function() {
        console.log(this.name + " , " + this.gender + " ,今年" + this.age);
    }
}
var xh = {
    name : "小红",
    gender : "女",
    age : 18
}
xw.say();

//call的参数是一一对应的,在xw的运行环境下xh的值
xw.say.call(xh);

//apply的参数是一个数组形式
xw.say.apply(xh);

//bind返回的依旧是一个函数，需要调用才执行
xw.say.bind(xh)();