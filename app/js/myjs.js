/*global $, google, alert */
var lat, lon, map, marker;

function GetAstros() {
    'use strict';
    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function (data) {
        $('#numberOfPpl').text(data.number);
        data.people.forEach(function (d) {
            $('#names').append('<li>' + d.name + '</li>');
        });
    });
}
GetAstros();

function GetISS() {
    'use strict';
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function (data) {
        lat = data.iss_position.latitude;
        lon = data.iss_position.longitude;
        $('#latitude').text(lat);
        $('#longitude').text(lon);
        var LatLng = new google.maps.LatLng(lat, lon);
        marker.setPosition(LatLng);
        map.setCenter(LatLng);
    });
    setTimeout(GetISS, 3000);
}
GetISS();

function initializeMap() {
    'use strict';
    var mapOptions = {
        center: { lat: lat, lng: lon},
        zoom: 4
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    marker = new google.maps.Marker({
        position: { lat: lat, lng: lon},
        map: map,
        title: 'ISS'
    });
}
google.maps.event.addDomListener(window, 'load', initializeMap);



function FuturePasses(myLat, myLng) {
    'use strict';
    var url = 'http://api.open-notify.org/iss-pass.json?lat=' + myLat + '&lon=' + myLng + '&alt=20&n=5&callback=?';
    $.getJSON(url, function (data) {
        data.response.forEach(function (d) {
            var date = new Date(d.risetime * 1000);
            $('#isspass').append('<li>' + date.toString() + '</li>');
        });
    });
}

function GetCoordinates(location) {
    'use strict';
    document.getElementById('isspass').innerHTML = "";
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': location}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            var myLat = results[0].geometry.location.lat(), myLng = results[0].geometry.location.lng();
            FuturePasses(myLat, myLng);
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}