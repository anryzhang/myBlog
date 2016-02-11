/**
 * Created by Think-ziyu on 2015/8/12.
 */
var fs = require('fs');

//大文件拷贝
function copy(src,dst){
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));

}

function main(argv){
	copy(argv[0],argv[1]);
}

main(process.argv.slice(2));