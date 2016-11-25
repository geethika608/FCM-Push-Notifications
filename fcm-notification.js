var fcm = require('node-gcm');
var server_key = "Your FCM Server Key Goes Here";
var sender = new fcm.Sender(server_key);
var notification = function (obj, ids) {
    var d = JSON.stringify(obj);
    var message = new fcm.Message();
    message.addData({'message': d});
    message.collapseKey = 'Your App Name';
    message.delayWhileIdle = true;
    message.timeToLive = 3;
    message.dryRun = false;
    sender.send(message, {registrationTokens: ids}, function (err, resp) {
        if (err) {
            console.error(err);
        } else {
            console.log(resp);
        }
    });

};
var obj = {
    "name":"From Github",
    "message":"Hello From Github"
};
var ids = ["Your FCM Registrationtoken Goes Here"];
notification(obj,ids);