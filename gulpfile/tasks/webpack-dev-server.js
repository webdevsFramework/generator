/**
 * Webpack Dev Server
 */

import gulp from 'gulp'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

const webpackDevServerTask = () => {

  // Start a webpack-dev-server
  var compiler = webpack({
    // configuration
  })

  new WebpackDevServer(compiler, {
    // server and middleware options
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

    // keep the server alive or continue?
    // callback();
  });

}

gulp.task('webpackDevServer', webpackDevServerTask)
module.exports = webpackDevServerTask
