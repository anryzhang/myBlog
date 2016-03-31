/**
 * Created by ziyu on 16/3/29.
 */


const toArray = (()=>
    Array.from ? Array.from : obj => [].slice.call(obj))();

    window.onload = function(){
        let J_switch = document.getElementById('J_switch');
        let ul =  J_switch.getElementsByTagName('ul')[0];
        let ali = ul.getElementsByTagName('li');

        console.log(ali[0].offsetWidth);
        ul.innerHTML = ul.innerHTML + ul.innerHTML;
        ul.style.width = ali[0].offsetWidth * ali.length + 'px';

        var speed = -300;

        function move(){
            "use strict";
            if(ul.offsetLeft < -ul.offsetWidth/2){
                ul.style.left = '0'
            }
            if(ul.offsetLeft > 0){
                ul.style.left = -ul.offsetWidth/2 + 'px';
            }
            ul.style.left = ul.offsetLeft + speed +'px';

        }

       var timer =   setInterval(move,3000) ;

        J_switch.onmouseover = function(){
            "use strict";
            clearInterval(timer);
        };

        J_switch.onmouseout = function(){
            "use strict";
           timer = setInterval(move,3000);
        }

        console.log(document.querySelector('.pre'));

        document.querySelector('.pre').onclick = function(){
            speed = 300;
        }
        document.querySelector('.next').onclick = function(){
            "use strict";
            speed = -300;

        }


        //

        var timer2 = null;
        var div1 = document.querySelector('.main');
        var sub = document.querySelector('.sub');

        div1.onmouseover = function(){
            clearTimeout(timer2);
            sub.style.display = 'block'
        }

        div1.onmouseout = function(){
            timer2 = setTimeout(function(){
                sub.style.display = 'none'
            },300);
        }

        sub.onmouseover = function(){
            "use strict";
            clearTimeout(timer2);
        }

        sub.onmouseout = function(){
            "use strict";
            timer2 = setTimeout(function(){
                sub.style.display = 'none'
            },300);
        }


    };




export default toArray;


