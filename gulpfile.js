var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var scssPath = './css/scss/**/*.scss';
util = require("gulp-util");
log = util.log;
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');


gulp.task("sass", function(){
	log("Generate CSS files " + (new Date()).toString());
    gulp.src(scssPath)
		.pipe(sass({ style: 'expanded' }))
    .pipe(concat('style.css'))
		.pipe(minifycss())
		.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('build', function(){
    runSequence(
    'sass', 'sass:watch'
    );
});
