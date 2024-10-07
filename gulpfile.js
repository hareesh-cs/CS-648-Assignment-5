var { src, dest, watch} = require("gulp");
var sass = require("gulp-sass")(require("sass"));
function css() {
  return src("src/style.scss").pipe(sass()).pipe(dest("dist/css"));
}
// exports.default = css;
exports.default = function () {
  watch("src/*.scss", css);
};
