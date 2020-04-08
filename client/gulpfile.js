const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require('gulp-minify');
const notify = require( 'gulp-notify' );


function desktop() {
    return (
      gulp
        .src("./assets/styles/web/importer.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("./assets/styles/web/"))
        .pipe( notify({ message: '\n\n✅  ===> DESKTOP STYLE — completed!\n', onLast: true }))
    );
}
function mobile() {
    return (
      gulp
        .src("./assets/styles/mobile/importer.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("./assets/styles/mobile/"))
        .pipe( notify({ message: '\n\n✅  ===> MOBILE STYLE — completed!\n', onLast: true }))
    );
}
//test comment
function watch() {
    gulp.watch("./assets/styles/web/**/*.scss", desktop);
    gulp.watch("./assets/styles/mobile/**/*.scss", mobile);
    gulp.watch("./assets/styles/web/**/*.scss");
    gulp.watch("./assets/styles/mobile/**/*.scss");
}
  


exports.desktop = desktop;
exports.mobile = mobile;
exports.watch = watch;