const {src, dest} = require('gulp');
const scss =require('gulp-sass')(require('sass'));

function style() {
    return src('app/scss/style.scss')
    .pipe(scss())
    .pipe(dest('app/css'))
}

exports.styles = styles;