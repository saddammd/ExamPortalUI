import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/classes/lesson';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-fill-in-the-blank',
  templateUrl: './fill-in-the-blank.component.html',
  styleUrls: ['./fill-in-the-blank.component.css']
})
export class FillInTheBlankComponent implements OnInit {

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
    
  }

}
