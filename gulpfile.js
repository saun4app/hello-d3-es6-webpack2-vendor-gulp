var gulp = require('gulp');
var gulp_webpack = require('gulp-webpack');
var webpack2 = require('webpack');

var webpack_config = require('./webpack.config.js');
var proj_config = require('./proj_config.json');

gulp.task('default', function() {
    return gulp.src(proj_config.entry_point)
        .pipe(gulp_webpack(webpack_config, webpack2))
        .pipe(gulp.dest(proj_config.output_path));
});
