import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { GallerComponent } from './galler/galler.component';
import { ImageListComponent } from './galler/image-list/image-list.component';
import { ImageComponent } from './galler/image-list/image/image.component';
import { ImageDetailComponent } from './galler/image-detail/image-detail.component';


import { MovieService } from './services/movie.service';
import { ActorService } from './services/actor.service';
import { ActorsComponent } from './actors/actors.component';
import { ImageActorDetailComponent } from './actors/image-actor-detail/image-actor-detail.component';
import { ImageActorListComponent } from './actors/image-actor-list/image-actor-list.component';
import { ImageActorComponent } from './actors/image-actor-list/image-actor/image-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GallerComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    ActorsComponent,
    ImageActorDetailComponent,
    ImageActorListComponent,
    ImageActorComponent,
    ],
  imports: [
    routes,
    BrowserModule,
    HttpModule
  ],
  providers: [ MovieService, ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
