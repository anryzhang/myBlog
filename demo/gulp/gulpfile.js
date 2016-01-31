/**
 sass = require('gulp-sass'),
 * Created by anry on 2015/12/18.
 */
var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    group = require('gulp-group-files'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');

    //gutil = require('gulp-util'),
    //autoprefixer = require('gulp-autoprefixer'),
    //cache = require('gulp-cache'),
    //
    //notify = require('gulp-notify'),
    //less = require('gulp-less'),
    //path = require('path');
;
var version = 151217
var dir = 'test';
var paths = {
    src: 'dev/' + dir,
    dest:'bulid/' + dir + '/' + version
};

var paths = {
    css:{
        css1:{
            src:'dev/css/scss/s.scss',
            dest:'build/css/'
        },
        css2:{
            src:'dev/css/scss/b.scss',
            dest:'build/css/'
        }
    },
    js:{
        t1:{
            src:'dev/js/t.js',
            dest:'build/js/'
        },
        t2:{
            src:'dev/js/t2.js',
            dest:'build/js'
        }

    }
}

gulp.task('clean',function(){
    gulp.src([paths.css.css1.dest,paths.js.t1.dest],{read:false})
        .pipe(clean());
});

gulp.task('sass',function(){
    return group(paths.css,function(key,filest){
        return gulp.src(filest.src)
            .pipe(sass({outputStyle:'expanded'}))
            .pipe(autoprefixer())
            .pipe(gulp.dest(filest.dest))
            //.pipe(minifycss())
            //.pipe(gulp.dest(filest.dest))
            .pipe(livereload());
    })();
});

gulp.task('js',function(){
   return group(paths.js,function(key,filest){
       return gulp.src(filest.src)
           .pipe(gulp.dest(filest.dest))
           //.pipe(uglify())
           //.pipe(gulp.dest(filest.dest));
   })();
});

gulp.task('concat-css',function(){
    gulp.src(['build/css/s.css',
        'build/css/b.css'
    ])
        .pipe(concat('all.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('build/css'));
});

gulp.task('concat-js',function(){
    gulp.src(['build/js/t2.js',
            'build/js/t.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('imagemin',function(){
    gulp.src('dev/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel:5,
            progressive:true,
            interlaced:true,
            multipass:true
        }))
        .pipe(gulp.dest('build/images'));
})

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('dev/css/**/*.scss',['sass']);
    gulp.watch('dev/js/**/*.js',['js']);
});

gulp.task('default',['clean'],function(){
    gulp.start('sass','js',/*'concat-css','concat-js',*/'imagemin')
});


