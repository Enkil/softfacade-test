
/* Sass Doc */
var gulp = require('gulp'),
    config = require('./config'),
    sassdoc = require('sassdoc'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber');

gulp.task('sass-doc', function () {
    var options = {
        dest: 'build/docs/sass'
    };

    return gulp.src(config.pathTo.Src.Styles)
        //.pipe(plumber(function(error) {
        //    gutil.log(gutil.colors.red(error.message));
        //    this.emit('end');
        //}))
        .pipe(sassdoc(options))
});
