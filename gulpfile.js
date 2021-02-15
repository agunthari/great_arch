const { series, src, dest, watch } = require('gulp');
const less = require('gulp-less');
// const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');

const js_files = [
	'fonctions.js',
	'grf.js',
];

function buildLess (){
	return src(['./public/css/less/styles.less'])
	    .pipe(less())
	    .pipe(dest('./public/css/'))
	    .pipe(livereload());
}

function buildScriptsProd(){
	return src( js_files.map(function (file){
			return './public/js/src/'+file;
		}) )
	    .pipe(uglify())
	    .pipe(concat('scripts.min.js'))
	    .pipe(dest('./public/js/'));
}

function buildScripts(){
	buildScriptsProd();
	return src( js_files.map(function (file){
			return './public/js/src/'+file;
		}) )
	    .pipe(concat('scripts.js'))
	    .pipe(dest('./public/js/'))
	    .pipe(livereload());
}




exports.default = series(
	buildLess,
	buildScripts
);

exports.watch = function () {
	livereload.listen();
  	watch(js_files.map(function (file){
		return './public/js/src/'+file;
	}), buildScripts);
  	watch(['./public/css/less/styles.less', './public/css/less/origin/*.less'], buildLess);
};
