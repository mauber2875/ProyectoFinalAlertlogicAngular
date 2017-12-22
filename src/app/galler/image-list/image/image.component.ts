import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mao-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']

})
export class ImageComponent implements OnInit {
  @Input() movie: any;
  base_url: string;
  constructor() {
    this.base_url = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';
  }

  ngOnInit() {
  }

}
