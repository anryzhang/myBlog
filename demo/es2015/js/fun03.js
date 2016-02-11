/**
 * Created by anry on 2016/2/9.
 */
var handler = {
    id:'123',
    init:function(){
        document.addEventListener('click',event => this.doSomething(event.type),false);
    },
    doSomething:function(type){
        var self = this;
        console.log(this);
        console.log('handler' + type + 'for' + this.id);
    }
};

var s = new Set();
[1,2,,3,4,5].map(x=> s.add(x));

for(let i of s){
    console.log(i);
}