cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-ios-faceid.cordova-plugin-ios-faceid",
      "file": "plugins/cordova-plugin-ios-faceid/www/CID.js",
      "pluginId": "cordova-plugin-ios-faceid",
      "clobbers": [
        "CID"
      ]
    },
    {
      "id": "cordova-plugin-fingerprint-aio.Fingerprint",
      "file": "plugins/cordova-plugin-fingerprint-aio/www/Fingerprint.js",
      "pluginId": "cordova-plugin-fingerprint-aio",
      "clobbers": [
        "Fingerprint"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-ios-faceid": "1.0.2",
    "cordova-plugin-fingerprint-aio": "1.7.0"
  };
});