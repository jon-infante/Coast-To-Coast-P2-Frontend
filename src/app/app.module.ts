import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
<<<<<<< HEAD
=======
import { CanvasPageComponent } from './components/canvas-page/canvas-page.component';
import { CanvasComponent } from './components/canvas/canvas.component';
>>>>>>> 5b8fd337b2330042718829b7a680a434d81a1e1d
import { DrawingListComponent } from './components/drawing-list/drawing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    NavbarComponent,
    HomePageComponent,
<<<<<<< HEAD
    DrawingListComponent,
=======
    CanvasPageComponent,
    CanvasComponent,
    DrawingListComponent, 
>>>>>>> 5b8fd337b2330042718829b7a680a434d81a1e1d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
