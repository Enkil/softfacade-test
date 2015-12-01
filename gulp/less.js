/* Less */
var gulp = require('gulp'),
    config = require('./config'),
    path = require('path'),
    less = require('gulp-less'),
    lessReporter = require('gulp-less-reporter'),
    minifycss = require('gulp-minify-css'),
    cssshrink = require('gulp-cssshrink'),
    csscomb = require('gulp-csscomb'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    newer = require('gulp-newer'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    plumber = require('gulp-plumber');

gulp.task('less', function() {
    return gulp.src(config.pathTo.Src.Styles)
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .on('error', lessReporter)
        .pipe(autoprefixer(config.autoprefixerBrowsers))
        .pipe(csscomb())
        .pipe(gulp.dest(config.pathTo.Build.Styles))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.pathTo.Build.Styles))
        .pipe(reload({stream: true}));
});