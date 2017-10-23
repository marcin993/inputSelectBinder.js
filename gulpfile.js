const gulp = require("gulp");
const browserSync = require("browser-sync");
const ESLint = require("gulp-eslint");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

gulp.task("serve", function() {
  browserSync.init({
    server: "demo"
  });

  gulp.watch("js/inputSelectBinder.js", ["lint", "copy"])
});

gulp.task("copy", function() {
  return gulp.src("js/inputSelectBinder.js")
          .pipe(gulp.dest("demo"))
          .pipe(browserSync.stream());
});

gulp.task("lint", function() {
  return gulp.src("js/inputSelectBinder.js")
          .pipe(ESLint())
          .pipe(ESLint.format())
          .pipe(ESLint.failAfterError());
});

gulp.task("default", ["serve"]);

gulp.task("production", function() {
  return gulp.src("js/inputSelectBinder.js")
          .pipe(uglify())
          .pipe(rename("inputSelectBinder.min.js"))
          .pipe(gulp.dest("js"));
});
