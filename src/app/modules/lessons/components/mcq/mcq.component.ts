import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Lesson } from 'src/app/classes/lesson';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class McqComponent implements OnInit {

  mcqLesson:any;

  lesson: Lesson;

  constructor(public commondata:CommonDataService) { 
    
  }
  

  ngDoCheck(){
    this.lesson = this.commondata.getlessonValue();
    this.commondata.sethidedisplay("inline");
    this.commondata.setflexvalue("flex");
    console.log("lesson value is " +this.lesson)
  }

  ngOnInit(): void {
    this.commondata.sethidedisplay("none");
  }
}
