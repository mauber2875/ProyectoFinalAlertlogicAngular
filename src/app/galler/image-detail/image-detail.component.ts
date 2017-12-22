import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mao-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  @Input() selectedMovie: any;

  image_base_url: string;
  constructor() {
    this.image_base_url = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';
  }

  ngOnInit() {
  }

}
