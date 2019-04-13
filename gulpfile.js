'use strict';

var gulp            = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var runSequence     = require('run-sequence');
var browserify      = require('browserify');
var through2        = require('through2');
var del             = require('del');

var $ = gulpLoadPlugins();

var DOMAIN = 'https://log.chocolateboard.net';
var PATHS = {
  src:  './assets',
  dest: './static/assets',
  publishdir: './docs',
};

var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.2',
  'bb >= 10'
];

// -----------------------------------------------------------------------------
// Stylesheet
gulp.task('sass', function() {
  return gulp.src(PATHS.src + '/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass({
      bundleExec: true,
      errLogToConsole: true,
      outputStyle: 'expanded'
    }))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest(PATHS.dest));
});

gulp.task('minify:css', function() {
  return gulp.src(PATHS.dest + '/**/*.css')
    .pipe($.plumber())
    .pipe($.minifyCss())
    .pipe(gulp.dest(PATHS.dest));
});

// -----------------------------------------------------------------------------
// JavaScript
gulp.task('browserify', function() {
  return gulp.src(PATHS.src + '/scripts/*.js')
    .pipe($.plumber())
    .pipe(through2.obj(function(file, encode, callback) {
      browserify(file.path)
        .bundle(function(err, res){
          file.contents = res;
          callback(null, file);
        });
    }))
    .pipe(gulp.dest(PATHS.dest + '/scripts'));
});

gulp.task('minify:js', function() {
  return gulp.src(PATHS.dest + '/scripts/*.js')
    .pipe($.plumber())
    .pipe($.uglify())
    .pipe(gulp.dest(PATHS.dest + '/scripts'));
});

// -----------------------------------------------------------------------------
// HTML
gulp.task('minify:html', function() {
 return gulp.src(PATHS.publishdir + '/**/*.html')
   .pipe($.htmlmin({ collapseWhitespace: true }))
   .pipe(gulp.dest(PATHS.publishdir));
});

gulp.task('replace:html', function () {
  return gulp.src([PATHS.publishdir + '/**/*.html'])
    .pipe($.replace('[wbr]', '<wbr>'))
    .pipe($.replace('<p></p>', ''))
    .pipe($.replace('<p><section', '<section'))
    .pipe($.replace('</section></p>', '</section>'))
    .pipe(gulp.dest(PATHS.publishdir));
});

gulp.task('format:html', function () {
  runSequence('replace:html', 'minify:html');
});

// -----------------------------------------------------------------------------
// Images
gulp.task('minify:images', function() {
  return gulp.src(PATHS.src + '/images/**/*')
    .pipe($.imagemin())
    .pipe(gulp.dest(PATHS.dest + '/images'));
});

// -----------------------------------------------------------------------------
// Build: レイアウト更新するときなどに実行する
gulp.task('init', function(callback) {
  runSequence('copy:js', 'copy:fonts');
});
gulp.task('build', function(callback) {
  runSequence('sass', 'browserify', ['minify:css', 'minify:js', 'minify:images']);
});

// -----------------------------------------------------------------------------
// Others
gulp.task('copy:js', function() {
  return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/jquery_lazyload/jquery.lazyload.min.js'
    ])
    .pipe(gulp.dest(PATHS.dest + '/scripts/vendor'));
});

gulp.task('copy:fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest(PATHS.dest + '/fonts'));
});

gulp.task('format:rss', function() {
  return gulp.src(PATHS.publishdir + '/index.xml')
    .pipe($.replace('img src="/assets/images/', 'img src="' + DOMAIN + '/assets/images/'))
    .pipe($.rename('feed.rss'))
    .pipe(gulp.dest(PATHS.publishdir));
});

gulp.task('clean', function() {
  del([PATHS.publishdir + '/**/index.xml', '!' + PATHS.publishdir + '/index.xml']);
});

// -----------------------------------------------------------------------------
// Watch:
gulp.task('watch', function() {
  var targets = [
    PATHS.src + '/images/**/*',
    PATHS.src + '/styles/**/*',
    PATHS.src + '/scripts/**/*',
  ];
  gulp.watch(targets, ['sass', 'browserify']);
});
