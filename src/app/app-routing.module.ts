import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LocationComponent } from './location/location.component'
import { VenueComponent } from './venue/venue.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'venue', component: VenueComponent },
  { path: 'location', component: LocationComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
