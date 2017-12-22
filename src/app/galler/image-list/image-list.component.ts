import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'mao-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})

export class ImageListComponent implements OnInit {

  selectedMovie: any;
  movies: any[];

  constructor(private movieService: MovieService) {
    this.loadMovies();
   }

  ngOnInit() {

  }
  onSelect(movie: any) {
    this.selectedMovie = movie;
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe(
      response => {
        console.log('movies from api', response.results);
        this.movies = response.results;
      },
      error => {
        console.log('some error has ocurred', error);
      }
    );
  }
}
