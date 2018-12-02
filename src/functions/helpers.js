// Dependencies
var gutil = require('gulp-util');

// Enviroment
module.exports.enviroment = function() {
    return gutil.env.type;
};