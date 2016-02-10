/**
 * Created by anry on 2016/2/9.
 */
var map = new Map([['name','test'],['title','tit']]);
console.log(map);

var  m  = new Map();
m.set('edition',6);
m.set(262,'standard');
m.set(undefined,'nah');
console.log(m);

var hello =()=> {
    console.log('hello');

};
m.set(hello,'hello es6');

for(let key of m.keys()) {
    console.log('key: %s', key);
}

for(let value of m.values()){
    console.log('value:%s',value);
}

for(let item of m.entries()){
    console.log('key:%s,value:%s',item[0],item[1])
}

for(let item of m){
    console.log(item);
}

var reporter = {
    report:function(key,value){
        console.log('key:%s,value:%s',key,value);
    }
}
m.forEach(function(value,key,m){
    console.log('key:%s,value:%s',key,value);
    console.log(m);
    this.report(key,value);
},reporter);