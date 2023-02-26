import { SimpleChanges } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/classes/lesson';
import { LessonList } from 'src/app/classes/lesson-list';
import { CommonDataService } from 'src/app/services/common-data.service';
import { LessonService } from 'src/app/services/lesson.service';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessonArray:Lesson[];
  lessonListArray: LessonList[];

  constructor(public lessonService: LessonService,
    public commondata: CommonDataService) { 

    
    }



ngOnInit(): void {
}


getLessonsList(){
  this.lessonService.getLessonList().subscribe(data=>{
    this.lessonListArray = data;
  })
}

getLessons(){

this.lessonService.getLesson().subscribe(data=>{
this.lessonArray = data;
})
}

}