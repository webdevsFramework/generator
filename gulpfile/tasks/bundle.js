/**
 * BundleJS
 * Bundles your ES6-JavaScript
 * with Webpack-Stream
 * https://webpack.github.io/docs/usage-with-gulp.html
 */

import gulp from 'gulp'
import webpack from 'webpack-stream'

const bundleJSTask = () => {

  return gulp
    .src('src/scripts/scripts.js')
    .pipe(webpack())
    .pipe(gulp.dest('dist/'))

}

gulp.task('bundlejs', bundleJSTask)
module.exports = bundleJSTask
