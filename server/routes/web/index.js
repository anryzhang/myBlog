/**
 * Created by ziyu on 2017/9/8.
 */
"use strict";
const express = require('express');

let router = express.Router();

router.get(['/', '/index'], (req, res) => {

    res.render('./web/index',{title:'index'});

})

module.exports = router;