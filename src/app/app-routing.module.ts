import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';
import { CanvasPageComponent } from './components/canvas-page/canvas-page.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
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
    component: CanvasComponent
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
