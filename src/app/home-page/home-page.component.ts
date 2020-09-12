import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})


export class HomePageComponent implements OnInit {
  constructor(private router: Router, http: HttpClient) {
    this.http = http;
  }
  public static song: {'_id', 'title': string, 'artist': string, 'year': string, 'web_url': string, 'genre': string};
  private http: HttpClient;
  private backendUrl = 'http://localhost:8080/api/v1/song?genre=';
  genreRow = ['POP', 'ROCK', 'HIP-HOP', 'DANCE', 'COUNTRY', 'INDIE'];
  yearRow = ['60\'S', '70\'S', '80\'S', '90\'S', '00\'S', '10\'S'];
  moodRow = ['HAPPY', 'HYPED', 'SAD', 'NERVOUS', 'RELAXED', 'JOYED'];
  movementRow = ['WALKING', 'JOGGING', 'LIFTING', 'DANCING', 'JUMPING', 'BIKING'];
  weatherRow = ['SUNNY', 'RAINY', 'WINDY', 'SNOWY', 'THUNDER', 'TORNADO'];
  mealRow = ['BREAKFAST', 'BRUNCH', 'LUNCH', 'SNACK', 'DINNER', 'DESSERT'];
  allSongRows = [this.genreRow, this.yearRow, this.moodRow, this.movementRow, this.weatherRow, this.mealRow];

  ngOnInit(): void {

  }

  generateClicked(genre: string) {
    this.http.get(this.backendUrl + genre.toLowerCase()).toPromise().
    then((songObj: {'_id', 'title': string, 'artist': string, 'year': string, web_url: string, 'genre': string}) => {
      HomePageComponent.song = songObj;
      this.router.navigateByUrl('/details');
     });
  }
}
