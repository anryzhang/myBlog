/**
 * Created by DELL on 2014/11/24.
 */

var myNameSpace = (function(){
    var myPrivateVar = 0;
    var myPrivateMethod = function(foo){
        console.log(foo);

    };
    return{
        myPublicVar:'foo',
        myPublicFunction:function(bar){
            myPrivateVar ++;
            myPrivateMethod(bar);
            console.log(myPrivateVar);
        }

    };
})();