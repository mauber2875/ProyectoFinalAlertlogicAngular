import { Component, OnInit, Input } from '@angular/core';
import { Image} from '../../models/image';
import { ImageService } from '../../services/image.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'mao-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})

export class ImageListComponent implements OnInit {

  images: Image[] = [];
  selectedImage: Image;
  movies: Object[];

  constructor(private imageService: ImageService, private movieService: MovieService) {
    this.loadMovies();
   }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }
  onSelect(image: Image) {
    this.selectedImage = image;
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
