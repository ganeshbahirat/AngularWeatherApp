import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.loadCurrentWeatherData();
  }

  loadCurrentWeatherData(){
  this.weatherDataService.GetCurrentWeatherDataByZip(72959).subscribe(
    result =>{
      console.warn(result);
    }
  )
 }

}
