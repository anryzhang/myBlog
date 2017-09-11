/**
 * Created by ziyu on 2017/9/11.
 * path by
 */
"use strict";

const crypho = require('crypto');
const secret = '会当凌绝顶,一览众山小!';

module.exports = {
    md5(val){
        let obj = crypho.createHmac('sha256',secret).update(val).digest('hex');
        let _val = crypho.createHash('md5').update(obj).digest('hex');
        console.log(_val);
        return _val;
    }
}
