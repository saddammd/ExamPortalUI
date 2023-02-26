import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { LessonsComponent } from './components/lessons/lessons.component';
import { VideoComponent } from './components/video/video.component';
import { McqComponent } from './components/mcq/mcq.component';
import { ReadingComponent } from './components/reading/reading.component';
import { VocabularyComponent } from './components/vocabulary/vocabulary.component';
import { FillInTheBlankComponent } from './components/fill-in-the-blank/fill-in-the-blank.component';



@NgModule({
  declarations: [SideMenuComponent, LessonsComponent, VideoComponent, McqComponent, ReadingComponent, VocabularyComponent, FillInTheBlankComponent],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    CdkAccordionModule,
    ScrollingModule
  ]
})
export class LessonsModule { }
