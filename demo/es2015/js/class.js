/**
 * Created by anry on 2016/2/9.
 */
class Posit{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        var str = '(' + this.x + ', ' + this.y + ')';
        console.log(str);
        return str;
    }
}

var point = new Posit(2,3);

point.toString();

//class ColorPoint extends Posit{
//    constructor(x,y,color){
//        super(x,y);
//        this.color = color;
//    }
//    toString(){
//        return this.color + ' ' + super();
//    }
//}
