/**
 * Created by wanghongxiang on 2018/11/19.
 */
var loaderUtils = require('loader-utils');
var Minimize = require('minimize');

module.exports = function(source) {
    this.cacheable && this.cacheable();
    var options = loaderUtils.getOptions(this) || {}
    var minimize = new Minimize(options);
    var callback = this.async();
    minimize.parse(source, function (err, result) {
        var str = 'module.exports = ' + JSON.stringify(result)
        console.log(str)
        callback(null, str)
        return
    });
};