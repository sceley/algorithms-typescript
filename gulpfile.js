const gulp = require('gulp');
const uglify = require('gulp-uglify');
const ts = require("gulp-typescript");
gulp.task('compiled', () => {
    const tsProject = ts.createProject("tsconfig.json");
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(uglify())
        .pipe(gulp.dest("lib"));
});
gulp.task('watch', () => {
    gulp.watch(['./src/*.ts', './tsconfig.json'], ['compiled']);
});
gulp.task('default', ['compiled', 'watch']);