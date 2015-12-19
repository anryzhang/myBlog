/**
 * Created by anry on 2015/12/18.
 */
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify')
    ;
var version = 151217
var dir = 'test';
var paths = {
    src: 'dev/' + dir + '/',
    dest:'bulid/' + dir + '/' + version
};

gulp.task('clean',function(){
    gulp.src([paths.dest],{read:false})
        .pipe(clean())
})


gulp.task('script',function(){
    //gulp.src('js/**/*.js')
    gulp.src([paths.src + 'js/t.js',
            paths.src + 'js/t2.js'])
        //.pipe(uglify())
        .pipe(concat('/js/all.js'))
        .pipe(gulp.dest(paths.dest))
        .pipe(rename('/js/all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest));
});

gulp.task('css',function(){
    gulp.src([paths.src + 'css/t1.css'])
        .pipe(concat('/css/all.css'))
        .pipe(gulp.dest(paths.dest))
        .pipe(rename('/css/all.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest(paths.dest))
        .pipe(notify({
            message:'styles task complete'
        }));

})

gulp.task('images',function(){
    gulp.src([paths.src + 'images/**/*'])
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(paths.dest + '/images'))

})



gulp.task('watch',function(){
    gulp.watch(paths.src +'js/**/*.js',['script']);
    gulp.watch(paths.src + 'css/**/*.css',['css']);
    gulp.watch(paths.src + 'images/**/*',['images']);

    var server = livereload()
    gulp.watch([paths.src]).on('change',function(file){
        server.changed(file.path)
    })

})


gulp.task('default',['clean','script','css','images']);