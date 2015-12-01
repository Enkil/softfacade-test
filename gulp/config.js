module.exports = {
    // Path settings
    pathTo: {
            Src: {
                Styles: 'src/less/main.less',
                Jade: 'src/jade/**/*.jade',
                Images: ['src/img/**/*.*', '!src/img/sprite/*.*'],
                PngSprite: 'src/img/sprite/**/*.png',
                GHPages: 'build/**/*',
                JS: 'src/js/**/*.*',
                JSVendor: 'vendor/**/*.*',
                BowerJSVendor: 'src/js/vendor/',
                JSCustom: ['custom/**/*.js', 'main.js', '!custom/toHead/**/*.js'],
                CSSVendor: 'src/scss/vendor/',
                Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess','src/CHANGELOG.md','src/README.md'],
                Fonts: 'src/less/fonts/**/*',
                Svg: ['src/svg/**/*.*', '!src/svg/sprite/*.*'],
                SvgSprite: 'src/svg/sprite/**/*.svg',
                SvgSpriteTpl: 'src/scss/includes/_svg-sprite-sass.tpl'
            },
            Build: {
                Styles: 'build/css',
                Html: 'build/',
                Images: 'build/img',
                PngSprite: 'build/img/sprite',
                PngSpriteCSS: 'src/scss/includes',
                JSVendor: 'build/js',
                JSCustom: 'build/js/custom',
                Txt: 'build/',
                Clean: ['build/**/*', '!build/.gitignore'],
                Fonts: 'build/css/fonts',
                Svg: 'build/svg',
                SvgSprite: 'build/svg/sprite/svg-sprite.svg',
                SvgSpriteNoSvg: 'build/svg/sprite/svg-sprite.png',
                SvgSpriteCSS: 'src/scss/includes/_svg-sprite.scss'
            }
        },

    // GitHub Pages options
    ghpOptions: {
        remoteUrl: "git@github.com:Enkil/softfacade-test.git"
    },

    // jsDoc3 options for JS documentation generating
    jsDocOptions:"./node_modules/jsdoc/jsdoc.js -c ./jsdoc-conf.json -r",

    // Styledocco options for SCSS documentation generating
    StyledoccoOptions:"./node_modules/styledocco/bin/styledocco -o build/docs/scss -s src/scss src/scss",

    // Browser versions for automatically prefix
    autoprefixerBrowsers: ['last 3 versions', '> 1%', 'Firefox ESR'],

    // BrowserSync local web server settings
    browserSync: {
        server: './build',
        baseDir: './build',
        tunnel: true,
        host: 'localhost',
        port: 9000,
        injectChanges: true,
        logPrefix: "AstraMediaGroup Web Starter kit"
    }

};
