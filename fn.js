function Foo() {

    var i=0;

    return function(){

        console.log(i++);

    }

}

var f1=Foo(),


    f2=Foo();

f1(); // 0

f1(); // 1

f2(); // 0

