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
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AuthBtnComponent } from './auth-btn/auth-btn.component';
import { DrawingListComponent } from './components/drawing-list/drawing-list.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    NavbarComponent,
    HomePageComponent,
    CanvasPageComponent,
    CanvasComponent,
    WallpostsComponent, 
    AuthBtnComponent, 
    DrawingListComponent, 
    AuthBtnComponent,
    DrawingListComponent,
    UserComponent

  ],
  imports: [
    AuthModule.forRoot({
      domain: environment.authDomain,
      clientId: environment.authClientId
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
