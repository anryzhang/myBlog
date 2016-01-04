/**
 * Created by anry on 2015/12/18.
 */
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    less = require('gulp-less'),
    path = require('path')
    ;
var version = 151217
var dir = 'test';
var paths = {
    src: 'dev/' + dir,
    dest:'bulid/' + dir + '/' + version
};

gulp.task('clean',function(){
    gulp.src([paths.dest],{read:false})
        .pipe(clean())
})
gulp.task('clean-temp',function(){
    gulp.src([paths.dest+'/css/temp'])
        .pipe(clean())
})


gulp.task('js',function(){
    //gulp.src('js/**/*.js')
    gulp.src([paths.src + '/js/t.js',
            paths.src + '/js/t2.js'])
        .pipe(concat('/js/all.js'))
        .pipe(gulp.dest(paths.dest))
        .pipe(uglify())
        .pipe(rename('/js/all.min.js'))
        .pipe(gulp.dest(paths.dest));

    //gulp.src([paths.src + 'js/t.js'])
    //    .pipe(concat('/js/t.js'))
    //    .pipe(gulp.dest(paths.dest))
    //    .pipe(uglify())
    //    .pipe(rename('/js/t.min.js'))
    //    .pipe(gulp.dest(paths.dest));

    gutil.log('123');
});

gulp.task('less',function(){
   gulp.src(paths.src + '/css/less/**/*.less')
       //.pipe(less({
       //    paths:[path.join(__dirname,'less','includes')]
       //}))
       .pipe(less())
       .pipe(gulp.dest(paths.dest + '/css/temp'))
   // gutil.log(__dirname)
});

gulp.task('css',function(){
    //gulp.src([paths.src + 'css/t1.css'])
    //    .pipe(concat('/css/all.css'))
    //    .pipe(gulp.dest(paths.dest))
    //    .pipe(minifycss())
    //    .pipe(rename({
    //        extname:'.min.css'
    //    }))
    //    .pipe(gulp.dest(paths.dest));
        //.pipe(notify({
        //    message:'styles task complete'
        //}));

    gulp.src([paths.dest + '/css/temp/t.css',
    paths.dest + '/css/temp/s.css',
        paths.src + '/css/t1.css'
    ]).pipe(concat('/css/all.css'))
        .pipe(gulp.dest(paths.dest))
        .pipe(minifycss())
        .pipe(rename({
            extname:'.min.css'
        }))
        .pipe(gulp.dest(paths.dest))


})

gulp.task('images',function(){
    gulp.src([paths.src + '/images/**/*'])
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(paths.dest + '/images'))

})



gulp.task('watch',function(){
    gulp.watch(paths.src +'/js/**/*.js',['js']);
    gulp.watch(paths.src + '/css/**/*.css',['css']);
    gulp.watch(paths.src + '/images/**/*',['images']);

    var server = livereload()
    gulp.watch([paths.src]).on('change',function(file){
        server.changed(file.path)
    })

})


//gulp.task('default',['clean','js','less','css','images']);
gulp.task('default',['watch','js','less','css','images','clean-temp']);