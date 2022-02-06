import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CanvasPageComponent } from './components/canvas-page/canvas-page.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { WallpostsComponent } from './components/wallposts/wallposts.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    NavbarComponent,
    HomePageComponent,
    CanvasPageComponent,
    CanvasComponent,
    WallpostsComponent, 
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
