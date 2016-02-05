/**
 * Created by anry on 2016/2/4.
 */

const gulp = require('gulp');
const  babel = require('gulp-babel');
const clean = require('gulp-clean');
const group = require('gulp-group-files');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');

gulp.task('es',function(){
    return gulp.src('js/*.js')
        .pipe(babel({
            presets:['es2015']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('js/**/*.js',['es']);
})
