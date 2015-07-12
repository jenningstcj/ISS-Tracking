(function () {
    'use strict';
    angular.module('issApp').controller('issAstrosCtrl', ['issService', function (issService) {
        var vm = this;
        var init = function () {
            vm.numOfAstros = "";
            vm.astros = "";
            issService.getAstros(vm);
        };
        init();
        
        vm.getFuturePasses = function () {
            vm.passes = "";
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': vm.location}, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    vm.myLat = results[0].geometry.location.lat();
                    vm.myLng = results[0].geometry.location.lng();
                    issService.futurePasses(vm);
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        };
        
        
        
    }]);
}());