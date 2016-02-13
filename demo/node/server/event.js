/**
 * Created by ziyu on 2016/2/13.
 */
    //引入events模块
var events = require('events');
//创建eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//绑定事件及事件的处理程序
//eventEmitter.on('eventName',eventHandler);

//触发事件
//eventEmitter.emit('eventName');

function eventHandler(){
    console.log('连接成功');
    eventEmitter.emit('data_received');
}

//绑定connection 事件处理程序
eventEmitter.on('connection',eventHandler);

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function(){
    console.log('数据接收成功');
});

eventEmitter.emit('connection');
console.log('程序执行完成');
