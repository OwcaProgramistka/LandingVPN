const { series, src, dest, parallel } = require('gulp');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch-sass');
var browserSync = require('browser-sync').create();

function hello(cd) {
    console.log('Zaczynamy!!!');
    cd();
}
function injectFiles() {
    return src('./app/index.html')
        .pipe(
            fileinclude({
                prefix: '@@',
                basepath: '@file',
            })
        )
        .pipe(dest('./dist'));
}


function buildImages() {
	return src('./app/assets/images/**/*')
		.pipe(dest('./dist/assets/images'))
};

function buildStyles() {
    return src('./app/styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dist/css'));
}

function updateWeb() {
    browserSync.init({
        server: {
            baseDir: './dist',
        },
    });
    watch(['./app/styles/**/*.scss'], series(buildStyles, browserSync.reload));
    watch(['./app/**/*.html'], series(injectFiles, browserSync.reload));
}

exports.default = series(hello, parallel(injectFiles, buildStyles, buildImages), updateWeb);
