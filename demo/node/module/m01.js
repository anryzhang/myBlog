/**
 * Created by ziyu on 2016/2/13.
 */
exports.world = function(){
    console.log('hello world');
};

var myModule = {
    init:function(){
        var self = this;
        self.num = 1;
        self.addNum();
    },
    addNum:function(){
        var self = this;
        var _str = '';
        _str += self.num;
        return _str;
    }
};

//myModule.init();

exports.myModule = myModule;

