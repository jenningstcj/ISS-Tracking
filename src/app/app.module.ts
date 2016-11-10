import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { JsonpModule, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {routing} from './app.routes';
import {AppComponent} from './app.component';
import {HomeComponent} from './Home/home.component';
import {MapComponent} from './Map/map.component';
import {AstronautsComponent} from './Astronauts/astronauts.component';
import {PassTimesComponent} from './PassTimes/passTimes.component';
import {PageNotFoundComponent} from './PageNotFound/pageNotFound.component';
import {ISSService} from './Shared/iss.service';
import {FormatDurationTimePipe} from './Shared/formatDurationTime.pipe';
import {FormatPassTimePipe} from './Shared/formatPassTime.pipe';

@NgModule({
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    AstronautsComponent,
    PassTimesComponent,
    PageNotFoundComponent,
    FormatDurationTimePipe,
    FormatPassTimePipe
  ],
  bootstrap: [ AppComponent ],
  providers: [ISSService]
})
export class AppModule { }
