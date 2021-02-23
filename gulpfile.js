const { series } = require('gulp');
const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function minifyCss() {
  return src('src/public/css/*.css')
  .pipe(uglify())
  .pipe(dest('build/public/css/'));
}

function minifyImg() {
  return src('src/public/img/*.png')
  .pipe(imagemin())
  .pipe(dest('build/public/img/'));
}

function compileTs() {
  return src('src/**/*.ts')
    .pipe(tsProject())
    .pipe(uglify())
    .pipe(dest('build/'));
}

function bundleAppFiles() {
  return src(['src/**/*.*', '!src/**/*.ts', '!src/**/*.js', '!src/**/*.png'])
    .pipe(dest('build/'));
}

exports.default = series(minifyCss, minifyImg, compileTs, bundleAppFiles)
