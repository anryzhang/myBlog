/**
 * Created by ziyu on 2016/2/10.
 */
module.exports = {
    entry:'./entry_config.js',
    output:{
        path:__dirname,
        filename:'build_config.js'
    },
    module:{
        loaders:[
            {
                test:/\.css/,
                loader:'style!css'
            }
        ]
    }
}