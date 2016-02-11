/**
 * Created by ziyu on 2016/2/11.
 */
var myArray = [1,2,3,4,5];
for(var value of myArray){
    console.log(value);
}

function SaferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        // 转义占位符中的特殊字符。
        s += arg.replace(/&/g, "&")
            .replace(/</g, "<")
            .replace(/</g, ">");

        // 不转义模板中的特殊字符。
        s += templateData[i];
    }
    return s;
}

var a = SaferHTML('<a>测试</a>');
console.log(a);