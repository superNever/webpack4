/**
 * Created by wanghongxiang on 2018/11/20.
 */
var getJSON = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            callback(data)
        } else {
            // We reached our target server, but it returned an error
            callback({
                status: request.status
            })
        }
    };

    request.onerror = function(err) {
        // There was a connection error of some sort
        callback(err)
    };

    request.send();
}
export default getJSON