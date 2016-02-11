/**
 * Created by ziyu on 2016/2/5.
 */

var a = [];
for(var i = 0; i< 10;i++){
    let c = i;
    a[i] = function(){
        console.log(c);
    }
}

a[6]();

function dom(){
    console.log(foo);
    let foo = 2;
}
dom();

function f1(){
    let n = 5;
    if(true){
        let n = 10;
    }
    console.log(n);
}
f1();

{
    let temp = {
        init:function(){
            var self = this;
            console.log(this)
            console.log(1);
            self.getVal();
        },
        getVal:function(){
            var self = this;
            console.log(2);
        }
    };

    temp.init()
}

const b = 1;

