import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LessonService } from './services/lesson.service';
import { HomeComponent } from './components/home/home.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { FootersectionComponent } from './components/footer/footersection/footersection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    FootersectionComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  exports:[
  ],
  providers: [LessonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
