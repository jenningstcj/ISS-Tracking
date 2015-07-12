(function () {
    'use strict';
    angular.module('issApp').controller('issLocationCtrl', ['issService', function (issService) {
        var vm = this;
        var init = function () {
                vm.lat = "";
                vm.lon = "";
                vm.map = "";
                vm.marker = "";
                function initializeMap() {
                    var mapOptions = {
                        center: { lat: vm.lat, lng: vm.lon},
                        zoom: 4,
                        mapTypeId: google.maps.MapTypeId.HYBRID
                    };
                    vm.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                    vm.marker = new google.maps.Marker({
                        position: { lat: vm.lat, lng: vm.lon},
                        map: vm.map,
                        title: 'ISS'
                    });
                }
                google.maps.event.addDomListener(window, 'load', initializeMap);
                
            };
        init();

        var getNewLocation = function () {
            issService.moveISS(vm);
            setTimeout(getNewLocation, 5000);
        };
        getNewLocation();
        
    }]);
}());