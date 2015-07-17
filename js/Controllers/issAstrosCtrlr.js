(function () {
    'use strict';
    angular.module('issApp').controller('issAstrosCtrl', ['issService', function (issService) {
        var vm = this;
        var init = function () {
            issService.getAstros().then(function (response) {
                vm.numOfAstros = response.data.number;
                vm.astros = response.data.people;
            });
        };
        init();
        
        vm.getFuturePasses = function () {
            vm.passes = "";
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': vm.location}, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var myLat = results[0].geometry.location.lat(),
                        myLng = results[0].geometry.location.lng();
                    issService.futurePasses(myLat, myLng).then(function (response) {
                        vm.passes = response.data.response;
                    });
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        };
    }]);
}());