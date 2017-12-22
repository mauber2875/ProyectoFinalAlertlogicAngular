import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mao-image-actor-detail',
  templateUrl: './image-actor-detail.component.html',
  styleUrls: ['./image-actor-detail.component.css']
})
export class ImageActorDetailComponent implements OnInit {


  @Input() selectedActor: any;
    image_base_url: string;
    constructor() {
      this.image_base_url = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';
    }

  ngOnInit() {
  }

}
