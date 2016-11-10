import { Component } from '@angular/core';

declare var google: any;

import {ISSService} from '../Shared/iss.service';

@Component({
    templateUrl: './passTimes.component.html'
})
export class PassTimesComponent {
    private searchLocation: string;
    private nextPasses: any;
    private myLat: any;
    private myLng: any;
    constructor(private issSvc: ISSService) {

    }

    getPasses() {

        this.issSvc.getLatLong(this.searchLocation.replace(' ', '+')).subscribe(
            data1 => {
                let lat = data1.results[0].geometry.location.lat;
                let long = data1.results[0].geometry.location.lng;
                this.issSvc.futurePasses(lat, long).subscribe(
                    data2 => { this.nextPasses = data2.response; console.log(data2.response) }
                );
            }
        );

    }





}
