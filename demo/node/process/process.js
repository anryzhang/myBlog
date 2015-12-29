/**
 * Created by Think-ziyu on 2015/8/16.
 */

process.on('exit',function(){
	process.nextTick(function(){
		console.log('this will not run');
	});
	console.log('about to exit');
})

process.on('uncaughtException',function(err){
	console.log('caught exception:' + err);
});

setTimeout(function(){
	console.log('this will still run');

},500);