var $username           = "umutbaiev_bakhtiyar@umutbaiev.beget.tech";

const { src, dest, watch, task } = require('gulp');

path = {
    'public' : './public/',
    'theme' : './src/',
    'build' : './build/'
}

// Подключаемые плагины
const sass              = require('gulp-sass');
const autoprefixer      = require('gulp-autoprefixer');
const sourcemaps        = require('gulp-sourcemaps');

const concat            = require('gulp-concat');
const uglify            = require('gulp-uglify-es').default;

const rsync             = require('gulp-rsync');
const run               = require('gulp-run-command').default;

// Функция для обработки Стилей в теме
function theme_styles() {

    return src(path.theme + '/scss/theme.scss')
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
    .pipe( dest(path.theme + '/css/') );

}

// Deploy "обновлнных" файлов (темы и плагина)
function deploy() {

    return src([ path.build + '**',  path.theme + '**',  path.public + '**'])
        .pipe(rsync({
            root: '.',
            hostname: $username,
            destination: '.',
            update: true,
            archive: true,
            compress: true,
        }));

}


// Слушаем файлы
function watchFiles() {
    watch( path.theme + "scss/**/*.scss", theme_styles );
    watch( path.build + "css/*.css", deploy);
    watch( path.build + "js/*.js", deploy);
    watch( path.build, deploy);
    watch( ".", deploy );
}

exports.default = watchFiles;