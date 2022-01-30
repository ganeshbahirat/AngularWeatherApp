import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastWeatherComponent } from './forecast-weather/forecast-weather.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'weather',
    component: CurrentWeatherComponent
  },
  {
    path: 'forecast',
    component: ForecastWeatherComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'weather'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
