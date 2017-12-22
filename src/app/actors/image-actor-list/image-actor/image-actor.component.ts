import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mao-image-actor',
  templateUrl: './image-actor.component.html',
  styleUrls: ['./image-actor.component.css']
})
export class ImageActorComponent implements OnInit {
  @Input() actor: any;
  base_url: string;
  constructor() {
    this.base_url = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';
   }

  ngOnInit() {
  }

}










