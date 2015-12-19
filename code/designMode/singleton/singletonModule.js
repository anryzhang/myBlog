/**
 * Created by DELL on 2014/11/24.
 */
var SingletonTester = (function(){
    // options:包含Singleton所需配置信息的对象
    //eg: var options={name :"test",pointX:5}
    function Singleton(options){
        options = options || {};
        this.name = options.name;
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }
    //实例持有者
    var instance;
    //静态变量和方法的模拟
    var _static = {
        name:'singletonTester',
        getInstance:function(options){
            //获取实例的方法,返回Singleton对象的singleton实例
            if(instance === undefined){
                instance = new Singleton(options);
                instance.name = this.name;
            }
            return instance;
        }
    };
    return _static;
})();

var singletonTest = SingletonTester.getInstance({
    pointX:5
});
console.log(singletonTest.pointX);