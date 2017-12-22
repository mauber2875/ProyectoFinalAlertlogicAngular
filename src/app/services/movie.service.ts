import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  theMovieUrl: string;
  apiKey: string;

  constructor(private http: Http) {
    this.theMovieUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';
  }

  getMovies(): Observable<any> {
    const discover = 'movie/now_playing';
    const params = new URLSearchParams();

    params.set('api_key', this.apiKey);
    params.set('r', 'json');

    const url =  this.theMovieUrl + discover;

    console.log('hello');
    return this.http.get(url, {search: params})
    .map(response => {
      console.log('Movie service response:', response.json());
      return response.json();
    });
  }

}
