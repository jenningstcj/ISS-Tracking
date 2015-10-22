(function () {
    'use strict';
    angular.module('issApp').filter('formatPassTime', function () {
        return function (risetime) {
            return (new Date(risetime * 1000)).toString();
        };
    });
    
    angular.module('issApp').filter('formatDurationTime', function () {
        return function (duration) {
            var visible = Math.round(duration / 60);
            return Math.round(visible / 2).toString() + "min";
        };
    });
    
}());
