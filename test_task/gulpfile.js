const { src, dest, watch } = require('gulp');

// Подключаемые плагины
const sass              = require('gulp-sass');
const autoprefixer      = require('gulp-autoprefixer');
const sourcemaps        = require('gulp-sourcemaps');

const concat            = require('gulp-concat');
const uglify            = require('gulp-uglify-es').default;


// Функция для обработки Стилей в теме
function theme_styles() {

    return src('scss/theme.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({                                                    // Конвертация sass в css
            errorLogToConsole: true,                                    // Проверка и вывод ошибок в консоль
            outputStyle: 'compressed'                                   // Минифицируем код
        }))
        .on( 'error', console.error.bind(console) )
        .pipe(autoprefixer({                                            // Проставляем префиксы для css
            overrideBrowserslist: ['last 2 version'],                   // Поддержка версии браузеров
            cascade: false
        }))
        .pipe( sourcemaps.write('../css') )
        .pipe( dest('css/') );

}


// Функция для обработки Скриптов
function scripts() {
    return src('js/scripts/custom/*.js')
        .pipe(sourcemaps.init())
        .pipe( concat( "scripts.js" ) )
        .pipe( uglify({
            toplevel: true
        }) )
        .pipe( sourcemaps.write('../js') )
        .pipe( dest('js') );
}


// Слушаем файлы
function watchFiles() {
    watch(  "scss/**/*.scss", theme_styles );
    watch(  "js/scripts/**/*.js", scripts );
}

exports.default = watchFiles;