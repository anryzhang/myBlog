/**
 * Created by ziyu on 2016/2/2.
 */

var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    webpackConfig = require('./webpack.config');

gulp.task('webpack',function(){
    return gulp.src('./')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./build'));
});

