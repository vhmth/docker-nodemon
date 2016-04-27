var gulp        = require('gulp'),
    gulpNodemon = require('gulp-nodemon');

gulp.task('default', function () {
  return gulpNodemon({
    script: 'src/app.js',
    ext: 'js',
    env: {
      NODE_ENV: process.env['NODE_ENV'] || 'development'
    }
  });
});
