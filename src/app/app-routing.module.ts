import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [

  { path: 'lesson', loadChildren:()=>import('./modules/lessons/lessons.module').then((m)=>m.LessonsModule), },
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
