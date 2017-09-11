/**
 * Created by ziyu on 2017/9/8.
 */
"use strict";
const entryConfig = function (hotMiddlewareScript, flag) {

    return {
        common:flag?['./assets/common/common',hotMiddlewareScript]:'./assets/common/common',
        web_index:flag?['./assets/web/index',hotMiddlewareScript]:'./assets/web/index',
        admin_index:flag?['./assets/admin/login/login',hotMiddlewareScript]:'./assets/admin/login/login'

    }
}

module.exports = entryConfig;