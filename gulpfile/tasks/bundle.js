/**
 * Combine JS
 * @description Combine Scripts from Browser to script.js
 * Added as Alternative to Browserify
 */

import gulp from 'gulp'
import webpack from 'webpack-stream'

const bundleJSTask = () => {
  return gulp
    .src('src/scripts/scripts.js')
    .pipe(webpack())
    .pipe(gulp.dest('dist/'));
}

gulp.task('bundlejs', bundleJSTask)
module.exports = bundleJSTask
