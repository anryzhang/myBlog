/**
 * Created by ziyu on 2017/7/11.
 */


function extend(subClass,superClass){
    var F = function () {};

    F.prototype = superClass.prototype;

    subClass.prototype = new F();
    subClass.prototype.constructor = subClass();

    subClass.superClass = superClass.prototype;

    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor = superClass;
    }

}
/*
继承
 */
(function () {
    //创建一个类
    function Person(name) {
        this.name = name;
    }

    function Techer(name,books){
        Person.call(this,name);
        this.books = books;
    }



})();