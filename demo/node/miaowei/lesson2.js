/**
 * Created by ziyu on 2017/6/28.
 */

// console.log(process);

// console.log(process.title)

process.stdin.resume();

// process.stdin.on('data',function (chunk) {
//     process.stdout.write('用户输入了:'+chunk);
// })

let a = '',
    b = '';
process.stdout.write('请输入a:');
process.stdin.on('data',function(num){
    if(!a){
        a = Number(num);
        process.stdout.write('请输入b:')
    }else{
        b = Number(num);
        process.stdout.write('结果是:' + (a + b));
        a='';
        b='';
    }
})