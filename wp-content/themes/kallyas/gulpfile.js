var project = "kallyas",
  text_domain = "zn_framework",
  config = {
    sourceMaps: true
  };

// Style related.
var styleSRC = "./css/scss/template.scss"; // Path to main .scss file.
var styleDestination = "./css/"; // Path to place the compiled CSS file.

// Browsers you care about for autoprefixing.
// Browserlist https://github.com/ai/browserslist
var AUTOPREFIXER_BROWSERS = ["last 2 version", "> 2%", "ie >= 11"];

// Node modules
var gulp = require("gulp"),
  runSequence = require("run-sequence"),
  zip = require("gulp-zip"),
  tap = require("gulp-tap"),
  sort = require("gulp-sort"),
  wpPot = require("gulp-wp-pot"),
  bump = require("gulp-bump"),
  prompt = require("gulp-prompt"),
  del = require("del"),
  fs = require("fs"),
  replace = require("gulp-replace"),
  gulpIf = require("gulp-if"),
  // JS
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  gutil = require("gulp-util"),
  plumber = require("gulp-plumber"),
  // CSS related plugins.
  sass = require("gulp-sass"),
  cssnano = require("gulp-cssnano"),
  autoprefixer = require("gulp-autoprefixer"),
  // Utility related plugins.
  lineec = require("gulp-line-ending-corrector"),
  clone = require("gulp-clone"),
  merge = require("gulp-merge"),
  sourcemaps = require("gulp-sourcemaps"),
  notify = require("gulp-notify");

gulp.task("styles", function() {
  return gulp
    .src(styleSRC)
    .pipe(plumber())
    .pipe(gulpIf(config.sourceMaps, sourcemaps.init()))
    .pipe(
      sass({
        errLogToConsole: true,
        outputStyle: "extended",
        precision: 10
      })
    )
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .on("error", gutil.log)
    .pipe(gulpIf(config.sourceMaps, sourcemaps.write("./css-source-maps/"))) // Create non-minified sourcemap
    .pipe(lineec()) // Consistent Line Endings (converts to LF)
    .pipe(gulp.dest(styleDestination));
});

/**
 * Elements styles
 */

var variousStylesSrc = [
  "./pagebuilder/elements/**/*.scss",
  "./css/plugins/**/*.scss"
];

gulp.task("various-styles", function() {
  gulp
    .src(variousStylesSrc)
    .pipe(
      sass({
        errLogToConsole: true,
        outputStyle: "compact",
        precision: 10
      })
    )
    .on("error", console.error.bind(console))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(lineec()) // Consistent Line Endings (converts to LF)
    .pipe(
      gulp.dest(function(file) {
        return file.base;
      })
    )
    .pipe(
      notify({ message: 'TASK: "Various Styles" Completed!', onLast: true })
    );
});

/**
 * Scripts: Vendors
 *
 * Look at src/js and concatenate those files, send them to assets/js where we then minimize the concatenated file.
 */
gulp.task("vendorsJs", function() {
  return gulp
    .src("./js/plugins-src/*.js")
    .pipe(plumber())
    .pipe(concat("plugins.min.js"))
    .pipe(uglify())
    .pipe(lineec()) // Consistent Line Endings (converts to LF)
    .on("error", gutil.log)
    .pipe(gulp.dest("./js/"));
});

/**
 * Scripts: ZnScript
 *
 * Minify the znscript file
 */
gulp.task("znscriptJs", function() {
  return gulp
    .src("./js/znscript.js")
    .pipe(plumber())
    .pipe(uglify())
    .on("error", gutil.log)
    .pipe(rename("znscript.min.js"))
    .pipe(lineec()) // Consistent Line Endings (converts to LF)
    .pipe(gulp.dest("./js/"));
});

/**
 * Watch Tasks.
 *
 * Watches for file changes and runs specific tasks.
 */
gulp.task(
  "default",
  ["styles", "various-styles", "vendorsJs", "znscriptJs"],
  function() {
    gulp.watch("./css/**/*.scss", ["styles"]); // Reload on SCSS file changes.
    gulp.watch(variousStylesSrc, ["various-styles"]); // Reload on SCSS file changes.
    gulp.watch(
      ["./js/znscript.js", "./js/vendors/*.js"],
      ["vendorsJs", "znscriptJs"]
    ); // Reload on JS file changes.
  }
);

/**
 * ==============================================
 * BUILD
 * ==============================================
 */

gulp.task("styles-deploy", function() {
  var source = gulp
    .src(styleSRC)
    .pipe(plumber())
    .pipe(gulpIf(config.sourceMaps, sourcemaps.init()))
    .pipe(
      sass({
        errLogToConsole: true,
        outputStyle: "extended",
        precision: 10
      })
    )
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .on("error", gutil.log);

  var stylesPipe1 = source
    .pipe(clone())
    .pipe(gulpIf(config.sourceMaps, sourcemaps.write("./css-source-maps/"))) // Create non-minified sourcemap
    .pipe(lineec()) // Consistent Line Endings (converts to LF)
    .pipe(gulp.dest(styleDestination));

  var stylesPipe2 = source
    .pipe(clone()) // Create non-minified sourcemap
    .pipe(rename({ suffix: ".min" }))
    .pipe(cssnano())
    .pipe(gulpIf(config.sourceMaps, sourcemaps.write("./css-source-maps/")))
    .pipe(lineec()) // Consistent Line Endings (converts to LF)
    .pipe(gulp.dest(styleDestination))
    .pipe(
      notify({ message: 'TASK: "styles-deploy" Completed!', onLast: true })
    );

  return merge(stylesPipe1, stylesPipe2);
});

var build_path = "./buildtheme/",
  build_path_theme = build_path + project,
  build_includes = [
    "**/*.*",

    // exclude files and folders
    "!node_modules/**/*",
    "!**/*/node_modules/**/*",
    "!js/vendors/*",
    "!css/css-source-maps/*",
    "!css/scss/**/*",
    "!README.md",
    "!stats.json",
    "!buildtheme/**/*",
    "!**/*.map",
    "!" + project + ".zip",
    // Zion builder
    "!framework/zion-builder/src/**/*",
    "!framework/zion-builder/assets/scss/**/*",
    "!framework/zion-builder/zion-builder.zip",
    "!framework/zion-builder/assets/js/editor/src/**/*",
    // HG Framework
    "!framework/zion-builder/hg-framework/assets/src/**/*",
    // Dev files
    "!**/*/package.json",
    "!**/*/gulpfile.js",
    "!**/*/webpack.config.js",
    "!**/*/npm-debug.log",
    "!**/*/code-guidelines.md"
  ];

// Change version
function getPackageJsonVersion() {
  // Parse the JSON file instead of using require because require
  // caches multiple calls so the version number won't be updated
  return JSON.parse(fs.readFileSync("./package.json", "utf8")).version;
}
gulp.task("changeVersion", function(callback) {
  var old_version = getPackageJsonVersion();
  gulp.src("./*").pipe(
    prompt.prompt(
      {
        type: "input",
        name: "version",
        message:
          "What version number you are releasing? The current version is " +
          old_version
      },
      function(response) {
        gulp
          .src(["./package.json", "./style.css"], { base: "./" })
          .pipe(bump({ version: response.version }))
          .pipe(gulp.dest("./"));

        if (typeof callback === "function") {
          callback();
        }
      }
    )
  );
});

gulp.task("buildFiles", function() {
  return gulp
    .src(build_includes)
    .pipe(gulp.dest(build_path_theme))
    .pipe(notify({ message: "Copy from Build Files complete", onLast: true }));
});

// Replace Theme FW text domain
gulp.task("replaceThemeFWTextDomain", function() {
  return gulp
    .src(build_path_theme + "/framework/hg-theme-framework/**/*.php")
    .pipe(replace("hg-theme-framework", text_domain))
    .pipe(
      gulp.dest(function(file) {
        return file.base;
      })
    );
});
// Replace HG FW text domain
gulp.task("replaceHGFWTextDomain", function() {
  return gulp
    .src(build_path_theme + "/framework/hg-framework/**/*.php")
    .pipe(replace("hg-framework", text_domain))
    .pipe(
      gulp.dest(function(file) {
        return file.base;
      })
    );
});
// Replace Theme FW text domain
gulp.task("replaceZionBuilderTextDomain", function() {
  return gulp
    .src(build_path_theme + "/framework/zion-builder/**/*.php")
    .pipe(replace("zion-builder", text_domain))
    .pipe(
      gulp.dest(function(file) {
        return file.base;
      })
    );
});

gulp.task("translate", function() {
  return gulp
    .src(build_path_theme + "/**/*.php")
    .pipe(sort())
    .pipe(
      wpPot({
        domain: text_domain,
        package: project,
        bugReport: "https://my.hogash.com/support/",
        team: "Hogash"
      })
    )
    .pipe(gulp.dest("./languages/" + text_domain + ".pot"))
    .pipe(
      gulp.dest("./" + build_path_theme + "/languages/" + text_domain + ".pot")
    )
    .pipe(notify({ message: 'TASK: "translate" Completed! 💯', onLast: true }));
});

gulp.task("buildZip", function() {
  return gulp
    .src(build_path + "/**/")
    .pipe(
      tap(function(file) {
        if (file.isDirectory()) {
          file.stat.mode = parseInt("40777", 8);
        }
      })
    )
    .pipe(zip(project + ".zip"))
    .pipe(gulp.dest("./"))
    .pipe(notify({ message: "Zip task complete", onLast: true }));
});

gulp.task("cleanup", function() {
  return del(build_path);
});

gulp.task("finish", function() {
  console.log("All done! Don't forget to update the thumb and screenshot!");
});

// Package Distributable Theme
gulp.task("build", function(cb) {
  config.sourceMaps = false;
  runSequence(
    "styles-deploy",
    "various-styles",
    "znscriptJs",
    "vendorsJs",
    "changeVersion",
    "buildFiles",
    "replaceThemeFWTextDomain",
    "replaceHGFWTextDomain",
    "replaceZionBuilderTextDomain",
    "translate",
    "buildZip",
    "cleanup",
    "finish"
  );
});
