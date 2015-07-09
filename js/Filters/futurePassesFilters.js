(function () {
    'use strict';
    angular.module('issApp').filter('formatPassTime', function () {
        return function (risetime) {
            return (new Date(risetime * 1000)).toString();
        };
    });
    
    angular.module('issApp').filter('formatDurationTime', function () {
        return function (duration) {
            return Math.round(duration / 60).toString() + "min";
        };
    });
    
}());