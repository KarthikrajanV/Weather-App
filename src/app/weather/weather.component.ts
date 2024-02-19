import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../../interface/weather-interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {

  
  city:string = 'chennai';
  weather?:WeatherData;
  temp_min?:number;
  temp_max?:number;
  wind?:number;
  humidity?:number;
  cityName?:string;
  currTemp?:number;

  constructor(private WeatherService : WeatherService){ }
  ngOnInit(): void {
    this.getWeatherData(this.city)
  }

  private getWeatherData(city: string ) {
    this.WeatherService.getWeather(city)
      .subscribe(
        (data) => {
          this.weather = data;
          console.log(this.weather);
          this.temp_min = this.weather.main.temp_min;
          this.temp_min = (this.temp_min-32) * 5/9;
          this.temp_max = this.weather.main.temp_max;
          this.temp_max = (this.temp_max-32) * 5/9;
          this.wind=this.weather.wind.speed;
          this.humidity=this.weather.main.humidity;
          this.cityName=this.weather.name;
          this.currTemp=this.weather.main.temp;
          this.currTemp=(this.currTemp-32) * 5/9;
        },
        (error) => {
          console.log(error); 
        }
      );
      }

  getW(city:string){
    this.getWeatherData(city)
  }

}
