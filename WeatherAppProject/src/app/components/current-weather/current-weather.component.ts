import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WeatherDataModel } from 'src/app/models/weather-data-model';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  weatherDataList : Array<WeatherDataModel> = [];
  currentWeatherForm : FormGroup;

  constructor(private weatherDataService: WeatherDataService, private formBuilder: FormBuilder) { 
    this.currentWeatherForm = this.formBuilder.group({
      zip : new FormControl()
    })
  }

  ngOnInit(): void { }

  loadCurrentWeatherData(){
  this.weatherDataService.GetCurrentWeatherDataByZip(this.currentWeatherForm.get('zip')?.value).subscribe(
    result =>{

    var weatherDataModel = new WeatherDataModel();
    weatherDataModel.cityZipCode= this.currentWeatherForm.get('zip')?.value;
    weatherDataModel.cityName = result.name;
    weatherDataModel.currentCondition = result.weather[0].main;
    weatherDataModel.description = result.weather[0].description;
    weatherDataModel.currentTemperature= result.main.temp;
    weatherDataModel.maxTemperature= result.main.temp_max;
    weatherDataModel.minTemperature = result.main.temp_min;
    weatherDataModel.icon = result.weather[0].icon; 
    this.weatherDataList.unshift(weatherDataModel);
    
    console.log( weatherDataModel.cityName + "'s weather data added to list. List size is " + this.weatherDataList.length);

    }
  )
 }


 

}
