/**
 * Created by anry on 2016/2/9.
 */

var f = v =>v;
var d = () => 5;

var sum = (n1,n2) => n1+n2;


var getTempItem  =  (id,name) =>({
    id:id,
    name:'temp'
});
var getValue = (n1,n2,n3) =>{
    if(n1> 1){
        return n1+n2;
    }else if(n1>5){
        return n1 + n3;
    }else{
        return n3;
    }
};

let n = getValue(0,3,5);
console.log(n);

var arr =[1,2,3].map(x => x*x);
console.log(arr);
