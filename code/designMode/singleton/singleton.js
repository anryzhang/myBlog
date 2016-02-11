/**
 * Created by DELL on 2014/11/24.
 */
    //单例模式 , init 只实例一次
var mySingleton = (function(){
    var instance;
    function init(){
        function privateMethod(){
            console.log('test')
        }
        var privateVariable = 'private';
        var privateRandomNumber = Math.random();
        return{
            publicMethod:function(){
                console.log('the public cna see me');
            },
            publicProperty:'I an also public',
            getRandomNumber:function(){
                return privateRandomNumber;
            }
        };

    }

    return {
        getInstance:function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }
})();

var singletonA = mySingleton.getInstance();
var singletonB = mySingleton.getInstance();
console.log(singletonA.getRandomNumber() === singletonB.getRandomNumber());