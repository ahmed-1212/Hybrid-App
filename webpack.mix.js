let mix = require('laravel-mix');


mix.setPublicPath('./');
mix.js('js/app.js','js/compile.js');


mix.babel([
    'js/framework7.min.js',
    'js/routes.js',
    'js/compile.js'
], 'js/new.js');