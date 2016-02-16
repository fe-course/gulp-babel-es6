'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';

const dirs = {
  src: './src',
  dest: 'dest'
};

const panths = {
  src: `${dirs.src}/` + `*/.js`,
  dest: `${dirs.dest}`
};

gulp.task('babel', () => {
  return gulp.src(panths.src)
      .pipe(babel())
      .pipe(gulp.dest(panths.dest));
});

gulp.task('watch', () => {
  gulp.watch(paths.src, ['babel']);
})

gulp.task('default', ['watch']);
