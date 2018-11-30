﻿const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const connect = require('gulp-connect');
const data = require('gulp-data');
const babel = require('gulp-babel');
const lint = require('gulp-eslint');
const stylint = require('gulp-stylint');
const ghPages = require('gulp-gh-pages');

gulp.task('pug', () => {
  gulp.src('./src/*.pug')
      .pipe(data(() => require('./talks.json')))
      .pipe(data(() => require('./articles.json')))
      .pipe(pug())
      .pipe(gulp.dest('./out'))
      .pipe(connect.reload());
});

gulp.task('stylus', () => {
  gulp.src('./src/assets/styles/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./out/assets/styles/'))
      .pipe(connect.reload());
});

gulp.task('stylint', () => {
  gulp.src(['./src/assets/styles/*.styl', './src/assets/styles/modules/*.styl'])
      .pipe(stylint({
        config: '.stylintrc'
      }))
      .pipe(stylint.reporter())
      .pipe(connect.reload());
});

gulp.task('lint', () => {
  gulp.src('src/assets/scripts/script.js')
      .pipe(lint())
      .pipe(lint.format())
      .pipe(connect.reload());
});

gulp.task('babel', () => {
  gulp.src('src/assets/scripts/script.js')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest('./out/assets/scripts'))
      .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(['./src/*.pug', './src/partials/*.pug', './src/layouts/*.pug'],['pug']);
  gulp.watch(['./src/assets/styles/*.styl', './src/assets/styles/modules/*.styl'],['stylint', 'stylus']);
  gulp.watch(['./src/assets/scripts/*.js'],['lint', 'babel']);
});

gulp.task('serve', () => {
  connect.server({
    root: './out',
    livereload: true
  });
});

gulp.task('ghpages', () => gulp.src('./out/**/*').pipe(ghPages({branch: 'master'})));

gulp.task('deploy', ['build', 'ghpages']);
gulp.task('build', ['pug', 'stylint', 'stylus', 'imagemin', 'lint', 'babel']);
gulp.task('server', ['serve', 'watch']);
