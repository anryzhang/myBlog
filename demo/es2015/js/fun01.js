/**
 * Created by anry on 2016/2/9.
 */

function add(...value){
    let sum = 0;
    for(var val of value){
        sum += val;
    }
    return sum;
}

var a = add(2,3,5);
console.log(a);

function push(array,...items){
    items.forEach(function(item){
        array.push(item);
        console.log(item);
    });
}
var b = [];
push(b,1,2,3);
console.log(b);
