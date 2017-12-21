
import {Routes, RouterModule} from '@angular/router';
import {GallerComponent} from './galler/galler.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {ModuleWithProviders} from '@angular/core';


const appRoutes: Routes = [
  { path: '', redirectTo: '/galler', pathMatch: 'full'},
  { path: 'galler', component: GallerComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);