module.exports = function () {
    var resources = 'resources/',
        bowerPath = resources + 'bower_components/',
        lessPath = resources + 'less/',
        myJs = resources + 'js/**/*.js',
        buildPath = '../web/build/';
    config = {
        "js": {
            "src": [
                bowerPath + "jquery/dist/jquery.js",
                bowerPath + "bootstrap/js/tab.js",
                myJs
            ],
            "watch": [
                myJs
            ],
            "dest": buildPath + "js/",
            "destFileName": "footer.js"
        },
        "css": {
            "src": lessPath + "main.less",
            "dest": buildPath + "css/",
            "watch": lessPath + "**/*.less",
        },
        "gulphelp": {
            "options": {
                "hideEmpty": true,
                "hideDepsMessage": true,
                "description": ''
            }
        }
    };
    return config;
};
