import { Component } from '@angular/core';

declare var google: any;

import {ISSService} from '../Shared/iss.service';

@Component({
    templateUrl: './map.component.html'
})
export class MapComponent {
    private lat: number;
    private lon: number;
    private map: any;
    private marker: any;

    constructor(private issSvc: ISSService) {
        this.issSvc.moveISS().subscribe(
            data => {
                this.lat = data.iss_position.latitude;
                this.lon = data.iss_position.longitude;
                let mapOptions = {
                    center: { lat: this.lat, lng: this.lon },
                    zoom: 4,
                    mapTypeId: google.maps.MapTypeId.HYBRID
                };
                this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                this.marker = new google.maps.Marker({
                    position: { lat: this.lat, lng: this.lon },
                    map: this.map,
                    title: 'ISS'
                });
            });

        setInterval(this.getNewLocation.bind(this), 5000);
    }


    getNewLocation() {
        this.issSvc.moveISS().subscribe(
            data => {
                this.lat = data.iss_position.latitude;
                this.lon = data.iss_position.longitude;
                var LatLng = new google.maps.LatLng(this.lat, this.lon);
                this.marker.setPosition(LatLng);
                this.map.setCenter(LatLng);
            });

    };

}
