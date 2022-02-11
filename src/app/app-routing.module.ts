import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasPageComponent } from './components/canvas-page/canvas-page.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { DrawingListComponent } from './components/drawing-list/drawing-list.component';
import { DrawingPageComponent } from './components/drawing-page/drawing-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WallpostsComponent } from './components/wallposts/wallposts.component';
import { PlayerProfileComponent } from '../app/components/player-profile/player-profile.component';

const routes: Routes = [
  {
    path: 'profile',
    component: PlayerProfileComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'canvas/:id',
    component: CanvasPageComponent
  },
  {
    path: 'canvas',
    component: CanvasPageComponent
  },
  {
    path: 'drawinglist',
    component: DrawingListComponent
  },
  {
    path: 'drawinglist/:id',
    component: DrawingListComponent
  },
  {
    path: 'wallpostlist',
    component: WallpostsComponent
  },
  {
    path: 'drawingpage/:id',
    component: DrawingPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
