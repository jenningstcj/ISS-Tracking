import { Component } from '@angular/core';

import {IISService} from '../Shared/iis.service';

@Component({
    templateUrl: './astronauts.component.html'
})
export class AstronautsComponent {
    private astronauts: any;
    private test: any;
    constructor(private iisSvc: IISService) {
        this.iisSvc.getAstros().subscribe(
          data => this.astronauts = data
        );
    }
}
