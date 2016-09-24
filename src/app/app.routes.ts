import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './Home/home.component';
import {MapComponent} from './Map/map.component';
import {AstronautsComponent} from './Astronauts/astronauts.component';
import {PassTimesComponent} from './PassTimes/passTimes.component';
import {PageNotFoundComponent} from './PageNotFound/pageNotFound.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'map', component: MapComponent},
  {path: 'astronauts', component: AstronautsComponent},
  {path: 'passtimes', component: PassTimesComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(routes);
