import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FillInTheBlankComponent } from './components/fill-in-the-blank/fill-in-the-blank.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { McqComponent } from './components/mcq/mcq.component';
import { ReadingComponent } from './components/reading/reading.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { VideoComponent } from './components/video/video.component';
import { VocabularyComponent } from './components/vocabulary/vocabulary.component';

const routes: Routes = [
  {path: '', component:SideMenuComponent},
  {path: 'video', component:VideoComponent, outlet:'exercises'},
  {path: 'mcq', component:McqComponent, outlet:'exercises'},
  {path: 'reading', component:ReadingComponent, outlet:'exercises'},
  {path: 'fillInTheBlank', component:FillInTheBlankComponent, outlet:'exercises'},
  {path: 'vocabulary', component:VocabularyComponent, outlet:'exercises'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
