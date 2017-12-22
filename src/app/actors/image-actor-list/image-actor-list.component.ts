import { Component, OnInit, Input } from '@angular/core';
import { ActorService } from '../../services/actor.service';



@Component({
  selector: 'mao-image-actor-list',
  templateUrl: './image-actor-list.component.html',
  styleUrls: ['./image-actor-list.component.css']
})
export class ImageActorListComponent implements OnInit {

  selectedActor: any;
  actors: any[];

  constructor(private actorService: ActorService) {
    this.loadActors();
   }

  ngOnInit() {

  }
  onSelect(actor: any) {
    this.selectedActor = actor;
  }

  loadActors(): void {
    this.actorService.getActors().subscribe(
      response => {
        console.log('actors from api', response.results);
        this.actors = response.results;
      },
      error => {
        console.log('some error has ocurred', error);
      }
    );
  }

}
