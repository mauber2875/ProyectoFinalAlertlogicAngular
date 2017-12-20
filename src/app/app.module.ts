import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageService} from './services/image.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GallerComponent } from './galler/galler.component';
import { ImageListComponent } from './galler/image-list/image-list.component';
import { ImageComponent } from './galler/image-list/image.component';
import { ImageDetailComponent } from './galler/image-detail/image-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GallerComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
