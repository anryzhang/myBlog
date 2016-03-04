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

//基础设置,一般不用修改
var path = {
    src:'./src/',
    dest:'./dest/'
};
//开发打包的文件
var assets = {
    SrcCss:{
        t1:{
            src:path.src + 'scss/t1.scss',
            dest:path.dest + 'css/'
        },
        t2:{
            src:path.src + 'scss/t2.scss',
            dest:path.dest + 'css'
        }
    },
    SrcJs:{
        app:{
            src:path.src + 'js/app.js',
            dest: path.dest + 'js'
        },
        other:{
            src:path.src + 'js/other.js',
            dest:path.dest + 'js'
        }
    }
};

gulp.task('clean',function(){
   //gulp.src(['./build/'],{read:false})
   gulp.src([path.dest],{read:false})
       .pipe(clean())
});

gulp.task('bowerInstall',shell.task([
    'bower install'
]));

gulp.task('bower',['bowerInstall'], function() {
    return bower()
        .pipe(gulp.dest(path.src + 'lib/'))
});

gulp.task('spmInstall',shell.task([
    'spm install'
]));

gulp.task('scripts',['spmInstall','bower'],function(){
    return group(assets.SrcJs,function(key,fileset){
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
    return gulp.src(path.src + 'images/*/')
        .pipe(gulp.dest(path.dest + 'images/'))
});

gulp.task('sass',['imgCopy'],function(){
    return group(assets.SrcCss,function(key,fileset){
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
        src:path.dest + 'css/*.css',
        dest:path.dest + 'css'

    };
    return gulp.src(config.src)
        .pipe(base64({maxImageSize:8*1024}))
        .pipe(gulp.dest(config.dest))
});

gulp.task('rev',['base64'],function(){
    var options = {
        removeComments:true,//去注释
        collapseWhitespace:true//压缩html
    };
    gulp.src(path.src + '*.html')
        .pipe(rev())
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dest/'))
        .pipe(livereload())
});

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch(path.src + '**/*.scss',['base64']);
    gulp.watch(path.src + '**/*.js',['scripts']);
    gulp.watch(path.src + '**/*.html',['rev']);
});

gulp.task('default',['clean','bower','scripts'],function(){
    gulp.start('rev');
});