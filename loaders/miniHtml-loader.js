/**
 * Created by wanghongxiang on 2018/11/18.
 */
var loaderUtils = require('loader-utils');
var Minimize = require('minimize');

module.exports = function(source) {
    this.cacheable && this.cacheable();
    var callback = this.async();
    var options = loaderUtils.getOptions(this) || {}
    var minimize = new Minimize(options);
    minimize.parse(source, callback);
};