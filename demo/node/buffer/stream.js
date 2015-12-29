/**
 * Created by Think-ziyu on 2015/8/12.
 */
var fs = require('fs');

var rs = fs.createReadStream(src);

rs.on('data',function(chunk){
	rs.pause();
	doSomething(chunk,function(){
		rs.resume();
	});
})

rs.on('end',function(){
	cleanUp();
})

function doSomething(str,callBlack){
	console.log('dosomething');
	callBlack();
}

function cleanUp(){
	console.log('cleanUp');
}