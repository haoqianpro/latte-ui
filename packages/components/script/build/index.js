const { dest, src } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const delpath = require('../utils/delpath.js');
const { componentPath } = require('../utils/paths.js');
//删除dist
exports.removeDist = () => {
  return delpath(`${componentPath}/latte-ui`);
};

//处理样式
exports.buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${componentPath}/latte-ui/lib/src`))
    .pipe(dest(`${componentPath}/latte-ui/es/src`));
};
