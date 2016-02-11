/**
 * Created by anry on 2016/2/9.
 */
function* f(){
    yield 'hello';
    yield  'world';
    return 'ending';
}

var h = f()
h.next();
setTimeout(function(){
    h.next();
},2000)