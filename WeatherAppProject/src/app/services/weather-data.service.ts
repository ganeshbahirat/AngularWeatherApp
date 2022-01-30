import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppSettings } from '../common/app-settings';

@Injectable({
  providedIn: 'root'
})

export class WeatherDataService {

  constructor(private http: HttpClient) { }
  
  GetCurrentWeatherDataByZip(zipCode : any): Observable<any>{
    return this.http.get(AppSettings.API_ENDPOINT + "weather?zip=" + zipCode + ",us&APPID="+ AppSettings.APP_ID+"&units=imperial");
  }


}
