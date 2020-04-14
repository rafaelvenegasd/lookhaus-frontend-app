const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require('gulp-minify');
const notify = require( 'gulp-notify' );

function copy(){
	return(
		gulp
		.src("./src/index.html")
		.pipe(gulp.dest("../server/public/desktop"))
		.pipe(gulp.dest("../server/public/mobile"))
	)
}

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

function watch() {
	gulp
		.watch("./src/desktop/assets/styles/**/*.scss", desktop)
		.watch("./src/mobile/assets/styles/**/*.scss", mobile)
		.watch("./src/desktop/assets/styles/**/*.scss")
		.watch("./src/mobile/assets/styles/**/*.scss")
}

function build(){
	return(
		copy(),
		mobile(),
		desktop()
	)
}

function dev(){
	return(
		copy(),
		mobile(),
		desktop(),
		watch()
	)
}

exports.desktop = desktop;
exports.copy = copy;
exports.mobile = mobile;
exports.watch = watch;
exports.build = build;
exports.dev = dev;