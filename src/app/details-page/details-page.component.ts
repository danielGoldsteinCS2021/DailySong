import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})

export class DetailsPageComponent implements OnInit {
  public title = 'NoTitle';
  public artist = 'NoArtist';
  public year = 'NoYear';
  public webUrl = 'Null';
  public sanitizer: DomSanitizer;

  constructor(sanitizer: DomSanitizer){
    this.sanitizer = sanitizer;
  }

  ngOnInit(): void {
    this.title = HomePageComponent.song.title;
    this.artist = HomePageComponent.song.artist;
    this.year = HomePageComponent.song.year;
    this.webUrl = HomePageComponent.song.web_url;
  }

  youtubeURl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
