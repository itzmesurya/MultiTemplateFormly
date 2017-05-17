var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var injectString = require('gulp-inject-string');
var del = require('del');

gulp.task('default', function () {
    console.log("default task created");
});

gulp.task('del-index', function () {
    return del(['./src/client/main/index.html']);
});

gulp.task('copy-index',['del-index'], function () {
    return gulp.src("./src/client/main/index/index.html")
        .pipe(gulp.dest('./src/client/main'));
});

gulp.task('rename-bower-tag-append-again', ['inject-vendor-scripts'], function () {
    return gulp.src("./src/client/main/*.html")
        .pipe(injectString.replace('<!--bower:css-->', ''))
        .pipe(injectString.replace('<!--bower:js-->', ''))
        .pipe(injectString.replace('<!--endbower-->', ''))
        .pipe(injectString.replace('<!--mimicjs-->', '<!--bower:js-->'))
        .pipe(injectString.replace('<!--mimiccss-->', '<!--bower:css-->'))
        .pipe(injectString.replace('<!--endmimic-->', '<!--endbower-->'))
        .pipe(gulp.dest("./src/client/main"));
});

gulp.task("inject-vendor-scripts",["copy-index"], function () {

    var wiredep = require("wiredep").stream;

    var wiredOptions = {
        bowerJson: require("./bower.json"),
        directory: "./src/client/lib",
        ignorePath: "../"
    };

    return gulp.src("./src/client/main/index.html")
        // .src will look for source of html files which call for dependencies
        // using the syntax bower:js or bower:css.  
        .pipe(wiredep(wiredOptions))
        // wiredep options are passed to configure the wiredep stream 
        .pipe(gulp.dest("./src/client/main"));
    // Files will be picked from gulp.src call stated above and modified 
    // in the stream and placed into the gulp.dest ie in a specified 
    // destination.
});

gulp.task("inject-vendor-scripts-material", ["rename-bower-tag-append-again"], function () {

    var wiredep = require("wiredep").stream;

    var wiredOptions = {
        bowerJson: require("./src/themes/material/bower.json"),
        directory: "./src/themes/material/bower_components",
        ignorePath: "../themes/"
    };

    return gulp.src("./src/client/main/index.html")
        // .src will look for source of html files which call for dependencies
        // using the syntax bower:js or bower:css.  
        .pipe(wiredep(wiredOptions))
        // wiredep options are passed to configure the wiredep stream 
        .pipe(gulp.dest("./src/client/main"));
    // Files will be picked from gulp.src call stated above and modified 
    // in the stream and placed into the gulp.dest ie in a specified 
    // destination.
});

/* setting up browser-sync */

gulp.task('serve', ['nodemon-setup'], function () {
    console.log('"serve" task has begun');
    browserSync.init(null, {
        proxy: "http://localhost:5000",
        files: ["src/**/*.*"],
        port: 7000,
    });
});

gulp.task('nodemon-setup', ["inject-vendor-scripts-material"], function () {
    var watchedFileList = ['*.js', 'src/**/*.js', '*.html', '*.css'];

    var nodemonOptions = {
        script: "src/server/app.js",
        ext: "html js",
        delayTime: 1,
        env: {
            port: 5000
        },
        watch: watchedFileList
    };

    return nodemon(nodemonOptions)
        .on('start', function () {
            console.log('Server up and running');
        });
});