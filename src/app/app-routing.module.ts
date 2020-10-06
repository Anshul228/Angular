import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'community',component:CommunityComponent},
  {path:'**',component:HomeComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
