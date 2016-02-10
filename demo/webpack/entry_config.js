/**
 * Created by ziyu on 2016/2/10.
 */
(function(){
    //require("!style!css!./style.css");
    require('./style.css');
    document.write('it works');
   var content = require('./content.js');
    console.log(content);
    document.write(content);
    console.log(1);
})();