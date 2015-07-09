(function () {
    'use strict';
    angular.module('issApp').controller('issLocationCtrl', ['$scope', 'issService', function ($scope, issService) {
        var init = function () {
                $scope.lat = "";
                $scope.lon = "";
                $scope.map = "";
                $scope.marker = "";
                function initializeMap() {
                    var mapOptions = {
                        center: { lat: $scope.lat, lng: $scope.lon},
                        zoom: 4,
                        mapTypeId: google.maps.MapTypeId.HYBRID
                    };
                    $scope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                    $scope.marker = new google.maps.Marker({
                        position: { lat: $scope.lat, lng: $scope.lon},
                        map: $scope.map,
                        title: 'ISS'
                    });
                }
                google.maps.event.addDomListener(window, 'load', initializeMap);
                
            };
        init();

        var getNewLocation = function () {
            issService.moveISS($scope);
            setTimeout(getNewLocation, 5000);
        };
        getNewLocation();
        
    }]);
}());