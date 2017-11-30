import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  recurso: any;
  enlace: string = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';

    constructor(private appservice: AppService){}

  ngOnInit(): void{
    this.appservice.getMoviesNowPlaying()
    .then(
      abc=>{
        this.recurso = abc
      },
      error=>{
        console.log('Error')
      })

}


}
