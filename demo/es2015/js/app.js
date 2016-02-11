/**
 * Created by anry on 2016/2/4.
 */
let a = 1;
const A = 2;
const name = 'javas';
const template = 'my name is ${name}';
console.log(template);

const fn = () =>{
    console.log('hell ');
}

console.log(a);

var buttons = document.querySelectorAll('button');
var output = document.querySelector('#J_btn');
console.log(buttons)
for(let i =0 ;i < buttons.length; i++){
    buttons[i].addEventListener('click',function(e){
        output.innerHTML = buttons[i].innerHTML;
    })
}

//function 1
foo =>foo + 'world';

//function 2
(foo,bar) => foo + bar;

//function 3
foo => {

};

//function 4
let obj = {
    msg:'msg',
    ping:() => {
        let self = this;
        console.log(self.msg);
    }
}



