var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    less = require('gulp-less');

gulp.task('less', function() {
  gulp.src('app/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('deploy/css/'));
});

gulp.task('copy', function() {
  gulp.src('app/*.html')
    .pipe(gulp.dest('deploy/'));

  gulp.src([
    'bower_components/reveal.js/js/reveal.min.js',
    'bower_components/reveal.js/lib/js/*.js',
    'bower_components/reveal.js/plugin/**/*.js'
  ])
    .pipe(gulp.dest('deploy/js/'));


  gulp.src([
    'bower_components/reveal.js/css/**/*.css',
    'bower_components/reveal.js/lib/css/zenburn.css'
  ])
    .pipe(gulp.dest('deploy/css/'));

});

gulp.task('reload', function() {
  gulp.src('deploy/**/*.*')
    .pipe(connect.reload('**/*.*'));
});

gulp.task('default', ['less', 'copy'], function() {

  connect.server({
    hostname: 'localhost',
    port: 9000,
    root: 'deploy',
    keepalive: false,
    livereload: true
  });

  gulp.watch('app/**/*.*', ['less', 'copy', 'reload']);
});
