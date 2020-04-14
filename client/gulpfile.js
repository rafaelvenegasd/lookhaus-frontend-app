const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require('gulp-minify');
const notify = require( 'gulp-notify' );


function desktop() {
    return (
      gulp
        .src("./src/desktop/assets/styles/importer.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("./src/desktop/assets/styles/"))
        .pipe( notify({ message: '\n\n✅  ===> DESKTOP STYLE — completed!\n', onLast: true }))
    );
}
function mobile() {
    return (
      gulp
        .src("./src/mobile/assets/styles/importer.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("./src/mobile/assets/styles/"))
        .pipe( notify({ message: '\n\n✅  ===> MOBILE STYLE — completed!\n', onLast: true }))
    );
}
//test comment
function watch() {
    gulp.watch("./src/desktop/assets/styles/**/*.scss", desktop);
    gulp.watch("./src/mobile/assets/styles/**/*.scss", mobile);
    gulp.watch("./src/desktop/assets/styles/**/*.scss");
    gulp.watch("./src/mobile/assets/styles/**/*.scss");
}
  

exports.desktop = desktop;
exports.mobile = mobile;
exports.watch = watch;