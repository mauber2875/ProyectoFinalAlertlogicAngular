import {routes} from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageService} from './services/image.service';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { GallerComponent } from './galler/galler.component';
import { ImageListComponent } from './galler/image-list/image-list.component';
import { ImageComponent } from './galler/image-list/image/image.component';
import { ImageDetailComponent } from './galler/image-detail/image-detail.component';


import { MovieService } from './services/movie.service';
import { ActorsComponent } from './actors/actors.component';
import { ImageActorDetailComponent } from './actors/image-actor-detail/image-actor-detail.component';





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
    ],
  imports: [
    routes,
    BrowserModule,
    HttpModule
  ],
  providers: [ImageService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
