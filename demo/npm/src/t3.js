/**
 * Created by ziyu on 16/3/5.
 */
{
    let temp = {
        constructor:window.temp,
        init() {
            var self = this;
            self.count = 1;

            self.getVal();
        },
        getVal(){
            var self = this;
            //console.log(self.count);
        },
        setVal(val){
            var self = this;
            self.count = val;
        }
    };

    temp.init();

}

{
    var tm = {
        init:function(){
            var self = this;
            self.count = 2;
            self.getVal();
        },
        getVal:function(){
            var self = this;
            //console.log(self.count)
        }
    };

    tm.init();
}

var i = 1;
var j= 0;
var ar = [];
while(i <= 100){
    if(i%6 == 0) {
        j+=1;
        ar.push(i)
    }
    i++;
}
console.log(ar);
console.log(j);



