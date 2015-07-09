(function () {
    'use strict';
    angular.module('issApp').service('issService', ['$http', function ($http) {
        this.getAstros = function ($scope) {
            return $http.jsonp('http://api.open-notify.org/astros.json?callback=JSON_CALLBACK')
                .success(function (data) {
                    $scope.numOfAstros = data.number;
                    $scope.astros = data.people;
                });
        };
        
        this.moveISS = function ($scope) {
            return $http.jsonp('http://api.open-notify.org/iss-now.json?callback=JSON_CALLBACK')
                .success(function (data) {
                    $scope.lat = data.iss_position.latitude;
                    $scope.lon = data.iss_position.longitude;
                    var LatLng = new google.maps.LatLng($scope.lat, $scope.lon);
                    $scope.marker.setPosition(LatLng);
                    $scope.map.setCenter(LatLng);  
                });
        };
        
        this.futurePasses = function ($scope) {
            return $http.jsonp('http://api.open-notify.org/iss-pass.json?lat=' + $scope.myLat + '&lon=' + $scope.myLng + '&alt=20&n=5&callback=JSON_CALLBACK')
                .success(function (data) {
                    $scope.passes = data.response;
                });
        };

    }]);
}());