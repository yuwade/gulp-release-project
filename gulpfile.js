/**
 * Created by yu on 2015/12/2.
 */
var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');
var uglify = require('gulp-uglify');
gulp.task('default',['scripts'], function () {
    // 将你的默认的任务代码放在这
});
gulp.task('scripts', function () {
    return gulp.src('D:/WorkPlace/htmls/requirejs/app.js')
        .pipe(requirejsOptimize())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
