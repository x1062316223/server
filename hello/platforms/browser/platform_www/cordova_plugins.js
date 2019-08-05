cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
        "id": "cordova-plugin-dialogs.notification_browser",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ios-faceid/www/CID.js",
        "id": "cordova-plugin-ios-faceid.cordova-plugin-ios-faceid",
        "pluginId": "cordova-plugin-ios-faceid",
        "clobbers": [
            "CID"
        ]
    },
    {
        "file": "plugins/cordova-plugin-fingerprint-aio/www/Fingerprint.js",
        "id": "cordova-plugin-fingerprint-aio.Fingerprint",
        "pluginId": "cordova-plugin-fingerprint-aio",
        "clobbers": [
            "Fingerprint"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-ios-faceid": "1.0.2",
    "cordova-plugin-fingerprint-aio": "1.7.0",
    "cordova-plugin-device": "2.0.3"
}
// BOTTOM OF METADATA
});