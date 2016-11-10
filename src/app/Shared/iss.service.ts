import {Injectable} from '@angular/core';
import {Jsonp, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ISSService {

    constructor(private jsonp: Jsonp, private http: Http) {

    }

    getAstros() {
        return this.jsonp.request('http://api.open-notify.org/astros.json?callback=JSONP_CALLBACK', { method: 'Get' })
          .map(res => res.json());
    };

    moveISS() {
        return this.jsonp.request('http://api.open-notify.org/iss-now.json?callback=JSONP_CALLBACK', { method: 'Get' })
            .map(res => res.json());
            /*.success(function(data) {
                //vm.lat = data.iss_position.latitude;
                //vm.lon = data.iss_position.longitude;
                //var LatLng = new google.maps.LatLng(vm.lat, vm.lon);
                //vm.marker.setPosition(LatLng);
                //vm.map.setCenter(LatLng);
                return data;
            });*/
    };

    futurePasses(myLat, myLng) {
        return this.jsonp.request('http://api.open-notify.org/iss-pass.json?lat=' + myLat + '&lon=' + myLng + '&alt=300&n=5&callback=JSONP_CALLBACK', { method: 'Get' })
          .map(res => res.json());
    };

    getLatLong(loc:string){
      return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + loc)
        .map(res => res.json());
    }

}
