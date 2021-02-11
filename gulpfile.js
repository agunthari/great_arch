const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('build-less', function(){
  return gulp.src(['./public/css/less/styles.less'])
    .pipe(less())
    .pipe(gulp.dest('./public/css/'));
});

// gulp.task('default', ['build-less'], function (){
// 	console.log('all done');
// });