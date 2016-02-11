/**
 * Created by anry on 2016/2/9.
 */
let ps = document.querySelectorAll('li');

Array.from(ps).forEach(function(p,i){
    let s = p.innerHTML;
    //console.log(i);
    //console.log(p);
    //console.log(s);
});


//find 用于找到第一个符合条件的数组元素，
//所有数组元素依次遍历该回调函数 ，
//直接到找到第一个返回值 为True的元素，然后返回该元素。否则返回undefined
//与findIndex相似
let a = [2,5,10,15];
let b = a.find(function(value,index,arr){
    console.log(value,index,arr);
    return value > 5;
});
console.log(b);

//fill , 使用给定的值填充一个数组
let c = ['a','b','c'].fill(7);
console.log(c);
let d = c.fill('a',1,2);
console.log(d);


//数组的实例方法 entries(),keys(),valuesOf()
for(let index of ['a','b'].keys()){
    console.log(index);
}

for(let [index,elem] of ['a','b'].entries()){
    console.log(index,elem);
}

for(let ele of ['a','b'].valueOf()){
    console.log(ele);
}

//数组推导
var a1 = [1,2,3,4,5];
var a2 = a1.map(function(i){
    console.log(i);
    return i*i;
});
console.log(a2);

var a3 = a1.filter(function(i){
    return i < 3;
});
console.log(a3);

