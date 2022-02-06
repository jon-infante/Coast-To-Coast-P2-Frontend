import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasPageComponent } from './components/canvas-page/canvas-page.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { DrawingListComponent } from './components/drawing-list/drawing-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent
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
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
