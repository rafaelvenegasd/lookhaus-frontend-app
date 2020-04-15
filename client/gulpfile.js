const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require('gulp-minify');
const notify = require( 'gulp-notify' );

function copymobile(){
	return(
		gulp
		.src("./src/mobile/index.html")
		.pipe(gulp.dest("../server/public/mobile"))
	)
}
function copydesktop(){
	return(
		gulp
		.src("./src/desktop/index.html")
		.pipe(gulp.dest("../server/public/desktop"))
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
		gulp.watch("./src/desktop/assets/styles/**/*.scss", gulp.series('desktop'))
		gulp.watch("./src/mobile/assets/styles/**/*.scss", gulp.series('mobile'))
		gulp.watch("./src/desktop/assets/styles/**/*.scss")
		gulp.watch("./src/mobile/assets/styles/**/*.scss")
}

function build(){
	return(
		copymobile(),
		copydesktop(),
		mobile(),
		desktop()
	)
}

function dev(){
	return(
		copymobile(),
		copydesktop(),
		mobile(),
		desktop(),
		watch()
	)
}

exports.desktop = desktop;
exports.copymobile = copymobile;
exports.copydesktop = copydesktop;
exports.mobile = mobile;
exports.watch = watch;
exports.build = build;
exports.dev = dev;