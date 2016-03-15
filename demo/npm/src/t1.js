/**
 * Created by ziyu on 16/3/4.
 */

import "babel-polyfill";

let a = 2;

function addAll(){
    return Array.from(arguments).reduce((a,b) => a + b);
}

class Foo{
    method(){}
}