const gulp = require('gulp');
const del = require('del');

gulp.task('extras', ['clean'], () => gulp.src(['src/**/*.js', 'src/**/*.tpl', 'src/**/*.json'])
    .pipe(gulp.dest('dist')));

gulp.task('clean', del.bind(null, ['dist']));
gulp.task('default', ['extras']);
