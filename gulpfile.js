/**
 * Created by taco on 13.02.17.
 */

var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('serve', function(cb) {

    exec('bundle exec jekyll serve', function (err) {
        if (err) return cb(err); // return error
        cb(); // finished task
    });
});