import { Component } from '@angular/core';

declare var google: any;

import {IISService} from '../Shared/iis.service';

@Component({
    templateUrl: './passTimes.component.html'
})
export class PassTimesComponent {
    private searchLocation: string;
    private nextPasses: any;
    private myLat: any;
    private myLng: any;
    constructor(private iisSvc: IISService) {

    }

    getPasses() {

        this.iisSvc.getLatLong(this.searchLocation.replace(' ', '+')).subscribe(
            data1 => {
                let lat = data1.results[0].geometry.location.lat;
                let long = data1.results[0].geometry.location.lng;
                this.iisSvc.futurePasses(lat, long).subscribe(
                    data2 => { this.nextPasses = data2.response; console.log(data2.response) }
                );
            }
        );

    }





}
