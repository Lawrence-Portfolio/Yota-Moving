const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const sassFileList = [
    'build/scss/common',
    'build/scss/vendor',
    'pages/index',
    'pages/404',
    'pages/services/service-listing',
    'pages/services/service-category',
    'pages/services/service-card',
    'pages/info/reviews',
    'pages/info/about',
    'pages/info/faq',
    'pages/blog/blog-listing',
    'pages/blog/blog-card',
    'pages/order/order'
];

const jsFileList = [
    'build/js/common',
    'pages/index',
    'pages/services/service-listing',
    'pages/services/service-category',
    'pages/services/service-card',
    'pages/info/reviews',
    'pages/info/about',
    'pages/info/faq',
    'pages/blog/blog-listing',
    'pages/blog/blog-card',
    'pages/order/order'
];

mix.options({
  clearConsole: true,
});

mix.setPublicPath('assets/')

jsFileList.forEach(fileName => mix.js(`./${fileName}.js`, 'js'));

sassFileList.forEach(
    fileName => mix.sass(`./${fileName}.scss`, 'css')
        .options({processCssUrls: false})
);

mix.sourceMaps(true, 'source-map');

mix.version()
