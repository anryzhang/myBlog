/**
 * Created by ziyu on 2016/2/5.
 */
var [a,b,c] = [1,2,3];

let x = 2;
let y = 3;
[x,y] = [y,x];

console.log(x,y);

function ex(){
    return [1,2,3];
}
var [d,e,f] = ex();

///
var map = new Map();
map.set('first','hello');
map.set('second','world');

console.log(map);

for(let [key,value] of map){
    console.log(key + ' is ' + value);
}


