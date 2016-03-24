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
var isProduction = false;

// 2. FILE PATHS
// - - - - - - - - - - - - - - -

var paths = {
    webroot: "./wwwroot/",
    html: {
        base: [
            './*.html'
        ],
        partials: [
            './partials/**/*.html'
        ],
        templates: [
            './templates/**/*.html'
        ]
    },
    
    // Sass will check these folders for files when you use @import.
    sass: {
        base: [
            './styles/**/*.scss',
        ],
        includes: [
            'bower_components/foundation-apps/scss', // foundation scss
        ]
    },
    css: {
        includes: [
            './styles/**/*.css',
            'bower_components/open-iconic/font/css/open-iconic-foundation.css' // open-iconic
        ]
    },
    // Javascript
    javascript: {
        foundation: [ // foundation-apps components
            'bower_components/fastclick/lib/fastclick.js',
            'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js',
            'bower_components/tether/tether.js',
            'bower_components/hammerjs/hammer.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-ui-router/**/*.js',
            'bower_components/foundation-apps/js/vendor/**/*.js',
            'bower_components/foundation-apps/js/angular/**/*.js',
            '!bower_components/foundation-apps/js/angular/app.js'
        ],
        libs: [ // other bower components
            'bower_components/d3/d3.js',
            'bower_components/Geolib/dist/geolib.js'
        ],
        apps: [ // user's scripts
            './app/heatmaps.js',
            './app/model.js',
            './app/app.js',
            './app/mock.js',
            './app/service.js',
            './app/chart-assign.js',
            './app/radio.js',
            
        ]
    }
}

// 3. TASKS
// - - - - - - - - - - - - - - -

gulp.task('setenv:dev', function () {
    isProduction = false;
})

gulp.task('setenv:prod', function () {
    isProduction = true;
})

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

gulp.task('copy:partials', function () {
    return gulp.src(paths.html.partials)
        .pipe(gulp.dest(paths.webroot + '/partials'));
});

// Copies your app's page templates and generates URLs for them
gulp.task('copy:templates', function() {
    return gulp.src(paths.html.templates)
        .pipe(router({
            path: paths.webroot + '/scripts/routes.js',
            root: '.'
        }))
        .pipe(gulp.dest(paths.webroot + '/templates'));
});

// Compiles the Foundation for Apps directive partials into a single JavaScript file
gulp.task('copy:foundation', function (cb) {
    var filename = (isProduction) ? 'templates.min.js' : 'templates.js';
    
    var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
        console.log(e);
    }));
    
    gulp.src('bower_components/foundation-apps/js/angular/components/**/*.html')
        .pipe($.ngHtml2js({
            prefix: 'components/',
            moduleName: 'foundation',
            declareModule: false
        }))
        .pipe(uglify)
        .pipe($.concat(filename))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));

    // Iconic SVG icons
    gulp.src('./bower_components/foundation-apps/iconic/**/*')
        .pipe(gulp.dest(paths.webroot + '/img/iconic/'));
        
    gulp.src('bower_components/open-iconic/font/fonts/**/*')
        .pipe(gulp.dest(paths.webroot + '/fonts/'));

    cb();
});

// Compiles Sass
gulp.task('sass', function () {
    var filename = (isProduction) ? 'app.min.css' : 'app.css';
    
    var minify = $.if(isProduction, $.minifyCss()
    .on('error', function (e) {
      console.log(e);
    }));

    return gulp.src(paths.sass.base)
        .pipe($.sass({
            includePaths: paths.sass.includes,
            outputStyle: 'nested',
            errLogToConsole: true
        }))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions', 'ie 10']
        }))
        .pipe(minify)
        .pipe($.rename(filename))
        .pipe(gulp.dest(paths.webroot + '/styles/'));
});

gulp.task('css', function() {
    var filename = (isProduction) ? 'vendor.min.css' : 'vendor.css';
    
    var minify = $.if(isProduction, $.minifyCss()
    .on('error', function (e) {
      console.log(e);
    }));
    
    return gulp.src(paths.css.includes)
        .pipe($.concat(filename))
        .pipe(minify)
        .pipe(gulp.dest(paths.webroot + '/styles/'));
})

gulp.task('js', ['js:foundation', 'js:lib', 'js:app'])

gulp.task('js:foundation', function (cb) {
    var filename = (isProduction) ? 'foundation.min.js' : 'foundation.js';
    
    var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
        console.log(e);
    }));
    
    return gulp.src(paths.javascript.foundation)
        .pipe(uglify)
        .pipe($.concat(filename))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));
});

gulp.task('js:lib', function () {
    var filename = (isProduction) ? 'lib.min.js' : 'lib.js';
    
    var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
        console.log(e);
    }));
    
    return gulp.src(paths.javascript.libs)
        .pipe(uglify)
        .pipe($.concat(filename))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));
});

gulp.task('js:app', function () {
    var filename = (isProduction) ? 'app.min.js' : 'app.js';
    
    var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
        console.log(e);
    }));
    
    return gulp.src(paths.javascript.apps)
        .pipe(uglify)
        .pipe($.concat(filename))
        .pipe(gulp.dest(paths.webroot + '/scripts/'));
});

// Starts a test server, which you can view at http://localhost:8079
gulp.task('server:development', ['build'], function () {
    gulp.src(paths.webroot)
        .pipe($.webserver({
            port: 8078,
            host: 'localhost',
            fallback: 'index.html',
            livereload: true,
            open: true
        }));
});

gulp.task('server:production', ['deploy'], function () {
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
    sequence('clean', ['copy', 'copy:partials', 'copy:foundation', 'sass', 'css', 'js'], 'copy:templates', cb);
});

gulp.task('deploy', function (cb) {
    sequence('setenv:prod', 'build', cb);
});

gulp.task('watch', function () {
    // watch sass
    gulp.watch(['./styles/**/*.scss'], ['sass']);

    // watch javascript
    gulp.watch(['./app/**/*', './js/**/*'], ['js:app']);

    // watch static files
    gulp.watch(['./**/*.html', '!./partials/**/*.*', '!./templates/**/*.*', '!./{styles,app}/**/*.*'], ['copy']);

    // watch app templates
    gulp.watch(['./templates/**/*.html'], ['copy:templates']);

    // watch partials
    gulp.watch(['./partials/**/*.html'], ['copy:partials']);
});

// Default task: builds your app, starts a server, and recompiles assets when they change
gulp.task('default', ['server:development'], function () {
    sequence('watch');
});
