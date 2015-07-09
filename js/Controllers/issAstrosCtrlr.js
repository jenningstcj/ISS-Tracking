(function () {
    'use strict';
    angular.module('issApp').controller('issAstrosCtrl', ['$scope', 'issService', function ($scope, issService) {
        var init = function () {
            $scope.numOfAstros = "";
            $scope.astros = "";
            issService.getAstros($scope);
        };
        init();
        
        $scope.getFuturePasses = function () {
            $scope.passes = "";
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': $scope.location}, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    $scope.myLat = results[0].geometry.location.lat();
                    $scope.myLng = results[0].geometry.location.lng();
                    issService.futurePasses($scope);
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        };
        
        
        
    }]);
}());