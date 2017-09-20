//https://travismaynard.com/writing/getting-started-with-gulp
//npm install  gulp-jshint gulp-plumber gulp-sass gulp-concat gulp-cssnano gulp-uglify gulp-ignore gulp-rename gulp-rimraf --save-dev

// Defining base pathes
var basePaths = {
    bower: './bower_components/'
};

// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var ignore = require('gulp-ignore');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// Run: 
// gulp nanocss
// Minifies CSS files
gulp.task('cssnano', ['cleancss'], function(){
  return gulp.src('./css/*.css')
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano({discardComments: {removeAll: true}}))
    .pipe(gulp.dest('./css/'));
});

gulp.task('cleancss', function() {
  return gulp.src('./css/*.min.css', { read: false }) // much faster
    .pipe(ignore('style.css'))
    .pipe(rimraf());
});

// Run: 
// gulp watch
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./css/style.css', ['cssnano']);
});


// Default Task
gulp.task('default', ['lint', 'sass', 'watch']);
