// import { parallel, series } from 'gulp';
const { series } = require('gulp');
const { buildStyle } = require('./index.js');

exports.default = series(async () => buildStyle());
