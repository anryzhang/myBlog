/**
 * Created by ziyu on 2016/2/13.
 */
function Hello(){
    var name = '';
    this.setName = function(thyName){
        name = thyName;
    }
    this.sayHello = function(){
        console.log('hello ' + name);
    }
}

module.exports = Hello;