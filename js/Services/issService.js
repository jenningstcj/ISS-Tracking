(function () {
    'use strict';
    angular.module('issApp').service('issService', ['$http', function ($http) {
        this.getAstros = function (vm) {
            return $http.jsonp('http://api.open-notify.org/astros.json?callback=JSON_CALLBACK')
                .success(function (data) {
                    vm.numOfAstros = data.number;
                    vm.astros = data.people;
                });
        };
        
        this.moveISS = function (vm) {
            return $http.jsonp('http://api.open-notify.org/iss-now.json?callback=JSON_CALLBACK')
                .success(function (data) {
                    vm.lat = data.iss_position.latitude;
                    vm.lon = data.iss_position.longitude;
                    var LatLng = new google.maps.LatLng(vm.lat, vm.lon);
                    vm.marker.setPosition(LatLng);
                    vm.map.setCenter(LatLng);  
                });
        };
        
        this.futurePasses = function (vm) {
            return $http.jsonp('http://api.open-notify.org/iss-pass.json?lat=' + vm.myLat + '&lon=' + vm.myLng + '&alt=20&n=5&callback=JSON_CALLBACK')
                .success(function (data) {
                    vm.passes = data.response;
                });
        };

    }]);
}());