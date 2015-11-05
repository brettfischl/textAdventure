var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var gutil = require('gulp-util');

var del = require('del');

var chalk = require('chalk');


var DEST_PATH = './public/js/';

gulp.task('build', function () {
  return gulp.src('./src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest(DEST_PATH))
    .pipe(rename({ extname: '.min.js'}))
    // .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
    //     .on('error', gutil.log)
    .pipe(sourcemaps.write(DEST_PATH))
    .pipe(gulp.dest(DEST_PATH));
});

gulp.task('clean', function() {

});