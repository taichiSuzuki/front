var gulp = require('gulp');

var sass = require('gulp-sass');
var kss = require('gulp-kss');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function(){
	gulp.src('_sass/**/*.scss')
		.pipe(sass())
		.pipe(prefix())
		.pipe(gulp.dest('./css'));
});

gulp.task('styleguide', function() {
  gulp.src(['_sass/**/*.scss'])
      .pipe(kss({
          overview: __dirname + '/_sass/styleguide.md'
      }))
    .pipe(gulp.dest('styleguide/'));
   gulp.src('_sass/**/*.scss')
		.pipe(sass())
		.pipe(prefix())
		.pipe(gulp.dest('./styleguide/public/'));
});