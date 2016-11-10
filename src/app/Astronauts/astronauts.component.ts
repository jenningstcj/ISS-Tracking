import { Component } from '@angular/core';

import {ISSService} from '../Shared/iss.service';

@Component({
    templateUrl: './astronauts.component.html'
})
export class AstronautsComponent {
    private astronauts: any;
    private test: any;
    constructor(private issSvc: ISSService) {
        this.issSvc.getAstros().subscribe(
          data => this.astronauts = data
        );
    }
}
