/**
 * Created by DELL on 2014/11/25.
 */
(function(root,factory){
    if(typeof exports === 'object'){
        //commonjs
        factory(exports,require('b'));
    }else if(typeof define === 'function' && define.amd){
        //AMD 注册为一个匿名模块
        define(['exports','b'],factory);
    }else{
        //浏览器全局对象
        factory((root.commonJsStrict = {}), root.b);
    }
    console.log(root,factory);
})(this,function(exports,b){
    exports.action = function(){};

});