// FOUNDATION FOR APPS TEMPLATE GULPFILE
// -------------------------------------
// This file processes all of the assets in the "client" folder, combines them with the Foundation for Apps assets, and outputs the finished files in the "build" folder as a finished app.

// 1. LIBRARIES
// - - - - - - - - - - - - - - -
var $        = require('gulp-load-plugins')();
var argv     = require('yargs').argv;
var gulp     = require('gulp');
var rimraf   = require('rimraf');
var router   = require('front-router');
var sequence = require('run-sequence');

// Check for --production flag
var isProduction = !!(argv.production);

// 2. FILE PATHS
// - - - - - - - - - - - - - - -

var paths = {
    webroot: "./wwwroot/",
    html: {
        base: [
            './*.html'
        ],
        templates: [
            './templates/**/*.html'
        ]
    },
    sass: {
        base: [
            './styles/**/*.scss'
        ],
        includes: [
            'bower_components/foundation-apps/scss' // foundation scss
        ]
    },
    javascript: {
        foundation: [ // foundation-apps components
            'bower_components/fastclick/lib/fastclick.js',
            'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js',
            'bower_components/tether/tether.js',
            'bower_components/hammerjs/hammer.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/foundation-apps/js/vendor/**/*.js',
            'bower_components/foundation-apps/js/angular/**/*.js',
            '!bower_components/foundation-apps/js/angular/app.js'
        ],
        libs: [ // other bower components

        ],
        apps: [ // user's scripts
            './app/app.js'
        ]
    },
    assets: [
        './*.html',
        './templates/**/*.html',
        './styles/**/*.scss',
        './app/**/*.js'
        // './client/**/*.*',
        // '!./client/templates/**/*.*',
        // '!./client/assets/{scss,js}/**/*.*'
    ],
    // Sass will check these folders for files when you use @import.
    sass: {
        base: [
            './styles/**/*.scss'
        ],
        includes: [
            'bower_components/foundation-apps/scss'
        ]
    },
    // These files include Foundation for Apps and its dependencies
    foundationJS: [
        'bower_components/fastclick/lib/fastclick.js',
        'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js',
        'bower_components/tether/tether.js',
        'bower_components/hammerjs/hammer.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/foundation-apps/js/vendor/**/*.js',
        'bower_components/foundation-apps/js/angular/**/*.js',
        '!bower_components/foundation-apps/js/angular/app.js'
    ]
}

// 3. TASKS
// - - - - - - - - - - - - - - -

// Cleans the build directory
gulp.task('clean', function (cb) {
    rimraf(paths.webroot, cb);
});

// Copies all htmls in the source folder
gulp.task('copy', function () {
    return gulp.src(paths.html.base)
        //.pipe(minHtml())
        .pipe(gulp.dest(paths.webroot));
});

// Copies your app's page templates and generates URLs for them
gulp.task('copy:templates', function() {
    return gulp.src(paths.html.templates)
        .pipe(router({
            path: paths.webroot + '/scripts/routes.js',
            root: '.'
        }))
        .pipe(gulp.dest(paths.webroot + '/templates/'));
});

// Compiles the Foundation for Apps directive partials into a single JavaScript file
gulp.task('copy:foundation', function (cb) {
    gulp.src('bower_components/foundation-apps/js/angular/components/**/*.html')
        .pipe($.ngHtml2js({
            prefix: 'components/',
            moduleName: 'foundation',
            declareModule: false
        }))
        //.pipe($.uglify())
        .pipe($.concat('templates.js'))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));

    // Iconic SVG icons
    gulp.src('./bower_components/foundation-apps/iconic/**/*')
        .pipe(gulp.dest(paths.webroot + '/img/iconic/'));

    cb();
});

// Compiles Sass
gulp.task('sass', function () {

    return gulp.src(paths.sass.base)
        .pipe($.sass({
            includePaths: paths.sass.includes,
            outputStyle: 'nested',
            errLogToConsole: true
        }))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions', 'ie 10']
        }))
        //.pipe($.minifyCss())
        .pipe(gulp.dest(paths.webroot + '/styles/app.css'));
});

gulp.task('js', ['js:foundation', 'js:lib', 'js:app'])

gulp.task('js:foundation', function () {
    return gulp.src(paths.javascript.foundation)
        .pipe($.uglify({
            beautify: true,
            mangle: false
        }).on('error', function (e) {
            console.log(e);
        }))
        .pipe($.concat('foundation.js'))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));
});

gulp.task('js:lib', function () {
    return gulp.src(paths.javascript.libs)
        .pipe($.uglify({
            beautify: true,
            mangle: false
        }).on('error', function (e) {
            console.log(e);
        }))
        .pipe($.concat('lib.js'))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));
});

gulp.task('js:app', function () {
    return gulp.src(paths.javascript.apps)
        .pipe($.uglify({
            beautify: true,
            mangle: false
        }).on('error', function (e) {
            console.log(e);
        }))
        .pipe($.concat('app.js'))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));
});

// Compiles and copies the Foundation for Apps JavaScript, as well as your app's custom JS
gulp.task('minify', ['uglify:templates', 'uglify:foundation', 'uglify:lib', 'uglify:app', 'min:css'])

gulp.task('uglify:templates', function (cb) {
    return gulp.src(paths.webroot + '/scripts/templates.js')
        .pipe($.uglify())
        .pipe($.rename('templates.min.js'))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));
});

gulp.task('uglify:foundation', function (cb) {
    return gulp.src(paths.webroot + '/scripts/foundation.js')
        .pipe($.uglify())
        .pipe($.rename('foundation.min.js'))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));
});

gulp.task('uglify:lib', function (cb) {
    return gulp.src(paths.webroot + '/scripts/lib.js')
        .pipe($.uglify())
        .pipe($.rename('lib.min.js'))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));
});

gulp.task('uglify:app', function (cb) {
    return gulp.src(paths.webroot + '/scripts/app.js')
        .pipe($.uglify())
        .pipe($.rename('app.min.js'))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));
});

gulp.task('min:css', function (cb) {
    return gulp.src(paths.webroot + '/styles/app.css')
        .pipe($.minifyCss())
        .pipe($.rename('app.min.css'))
        .pipe(gulp.dest(paths.webroot + '/styles/'));
})

// Starts a test server, which you can view at http://localhost:8079
gulp.task('server', ['build'], function () {
    gulp.src(paths.webroot)
        .pipe($.webserver({
            port: 8079,
            host: 'localhost',
            fallback: 'index.html',
            livereload: true,
            open: true
        }));
});

// Builds your entire app once, without starting a server
gulp.task('build', function (cb) {
    //sequence('clean', ['copy', 'copy:foundation', 'sass', 'uglify'], 'copy:templates', cb);
    sequence('clean', 'copy', 'copy:foundation', 'sass', 'js', 'copy:templates', cb);
});

gulp.task('deploy', function (cb) {
    //sequence('clean', ['copy', 'copy:foundation', 'sass', 'uglify'], 'copy:templates', cb);
    sequence('clean', 'copy', 'copy:foundation', 'sass', 'js', 'copy:templates', 'minify', cb);
});

// Default task: builds your app, starts a server, and recompiles assets when they change
gulp.task('default', ['server'], function () {
    // watch sass
    gulp.watch(['./client/assets/scss/**/*', './scss/**/*'], ['sass']);

    // watch javascript
    gulp.watch(['./client/assets/js/**/*', './js/**/*'], ['uglify:app']);

    // watch static files
    gulp.watch(['./client/**/*.*', '!./client/templates/**/*.*', '!./client/assets/{scss,js}/**/*.*'], ['copy']);

    // watch app templates
    gulp.watch(['./client/templates/**/*.html'], ['copy:templates']);
});
