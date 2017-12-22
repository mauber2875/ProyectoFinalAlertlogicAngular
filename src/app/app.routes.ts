
import {Routes, RouterModule} from '@angular/router';
import {GallerComponent} from './galler/galler.component';
import {ActorsComponent} from './actors/actors.component';

import {ModuleWithProviders} from '@angular/core';


const appRoutes: Routes = [
  { path: '', redirectTo: '/galler', pathMatch: 'full'},
  { path: 'galler', component: GallerComponent},
  { path: 'actors', component: ActorsComponent},
  ];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);