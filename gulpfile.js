const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

/**
 * Paths
 */
const paths = {
  scss: {
    src: 'sass/**/*.scss',
    entry: 'sass/main.scss',
    dest: 'css'
  },
  html: {
    src: './*.html'
  }
};

/**
 * Compile SCSS (Development)
 */
function stylesDev() {
  return src(paths.scss.entry)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

/**
 * Compile SCSS (Production)
 */
function stylesProd() {
  return src(paths.scss.entry)
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(
      cleanCSS({
        compatibility: 'ie11'
      })
    )
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(dest(paths.scss.dest));
}

/**
 * BrowserSync Server
 */
function serve() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    notify: false
  });

  watch(paths.scss.src, stylesDev);
  watch(paths.html.src).on('change', browserSync.reload);
}

/**
 * Public tasks
 */
exports.dev = series(stylesDev, serve);
exports.build = stylesProd;
exports.default = exports.dev;
