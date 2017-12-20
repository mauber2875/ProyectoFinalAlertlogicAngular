import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()


export class AppService {

  private theMovieDbUrl = 'http://api.themoviedb.org/3/';
  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';

  constructor(private http: Http) { }

  // getMoviesNowPlaying() : Promise<any> {
  //   let discover = 'movie/now_playing';
  //   let params = new URLSearchParams();

  //   params.set('api_key', this.apiKey);
  //   params.set('r', 'json');

  //   let url =  this.theMovieDbUrl + discover;
  //   return this.http.get(url, {search: params})
  //             .toPromise()
  //             .then(movies => movies.json())
  //             .catch(this.handleError);
  // }

  // private handleError(error: any): Promise<any> {
  //     console.error('An error occurred', error); // for demo purposes only
  //     return Promise.reject(error.message || error);
  // }
  //*************************

  getMoviesNowPlaying() {
      let discover = 'movie/now_playing';
      let params = new URLSearchParams();
  
      params.set('api_key', this.apiKey);
      params.set('r', 'json');
  
      let url =  this.theMovieDbUrl + discover;
      return this.http.get(url, {search: params})
      .map(response => response.json());
  }
}