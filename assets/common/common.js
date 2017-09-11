
require('normalize.css');


console.log("common.js");

require('./common.scss');

const $ = require('jquery');


$(()=>{
    $(document).on('click',(e)=> {
        console.log(e.currentTarget);
    });
});