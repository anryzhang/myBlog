/**
 * Created by ziyu on 16/3/3.
 */
var gulp = require('gulp');
var browserify = require('gulp-browserify');//遵循commonjs的模块,建立模块依赖
var bower = require('gulp-bower');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var group = require('gulp-group-files');
var minifycss = require('gulp-minify-css');
var rev = require('gulp-rev-append');//md5版本号
var htmlmin = require('gulp-htmlmin');
var cssver = require('gulp-make-css-url-version');
var base64 = require('gulp-base64');
var livereload = require('gulp-livereload');
var clean = require('gulp-clean');


gulp.task('clean',function(){
   gulp.src(['./build/'],{read:false})
       .pipe(clean())
});

gulp.task('bowerInstall',shell.task([
    'bower install'
]));

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('src/lib/'))
});

gulp.task('spmInstall',shell.task([
    'spm install'
]));

gulp.task('scripts',function(){
    var srcJs = {
        "app":{
            src:'src/js/app.js',
            dest:'./build/js'
        },
        "other":{
            src:'src/js/other.js',
            dest:'./build/js'
        }
    };

    return group(srcJs,function(key,fileset){
        return gulp.src(fileset.src)
            .pipe(browserify({
                insertGlobals:true,
                debug:true
            }))
            //.pipe(uglify())
            .pipe(gulp.dest(fileset.dest))
            .pipe(livereload())
    })();

});

gulp.task('imgCopy',function(){
    return gulp.src('./src/images/*/')
        .pipe(gulp.dest('./build/images/'))
});

gulp.task('sass',['imgCopy'],function(){
    var srcSass = {
        "t1":{
            src:'./src/scss/t1.scss',
            dest:'./build/css/'
        },
        "t2":{
            src:'./src/scss/t2.scss',
            dest:'./build/css'
        }
    };
    return group(srcSass,function(key,fileset){
        return gulp.src(fileset.src)
            .pipe(sass({outputStyle:'expanded'}))
            .pipe(autoprefixer())
            .pipe(gulp.dest(fileset.dest))
            .pipe(cssver())
            //.pipe(minifycss())
            .pipe(gulp.dest(fileset.dest))
            .pipe(livereload())
    })();

});

gulp.task('base64',['sass'],function(){
    var config = {
        src:'./build/css/*.css',
        dest:'./build/css'

    };
    return gulp.src(config.src)
        .pipe(base64({maxImageSize:8*1024}))
        .pipe(gulp.dest(config.dest))
});

gulp.task('rev',function(){
    var options = {
        removeComments:true,//去注释
        collapseWhitespace:true//压缩html
    };
    gulp.src('./src/*.html')
        .pipe(rev())
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./build/'))
        .pipe(livereload())
});

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('./src/**/*.scss',['base64']);
    gulp.watch('./src/**/*.js',['scripts']);
    gulp.watch('./src/**/*.html',['rev']);
});

gulp.task('default',['clean','bower'],function(){
    gulp.start('base64','scripts','rev');
});