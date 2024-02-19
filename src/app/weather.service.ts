import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../interface/weather-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  private apiUrl='https://open-weather13.p.rapidapi.com/city/';

  private header = new HttpHeaders({
    'X-RapidAPI-Key': '5c4da5e56fmsh712fe4ed6810922p1d1d51jsna420ec3a5720',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  })

  getWeather(city:string) : Observable<WeatherData> {
    const url = `${this.apiUrl}${city}`;
    return this.http.get<WeatherData>(url,{headers:this.header})
  }

}