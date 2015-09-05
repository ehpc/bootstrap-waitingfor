'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

var DEST = 'build/';

gulp.task('default', function() {
	return gulp.src('src/waitingfor.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'))
	.pipe(rename('bootstrap-waitingfor.js'))
	.pipe(gulp.dest(DEST))
	.pipe(uglify())
	.pipe(rename({ extname: '.min.js' }))
	.pipe(gulp.dest(DEST));
});
