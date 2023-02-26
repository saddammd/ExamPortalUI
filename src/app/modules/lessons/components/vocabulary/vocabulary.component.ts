import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/classes/lesson';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {

 lesson: Lesson;

  constructor(public commondata:CommonDataService) { 
    
  }
  

  ngDoCheck(){
    this.lesson = this.commondata.getlessonValue();
    this.commondata.sethidedisplay("inline");
    this.commondata.setflexvalue("flex");
    console.log("lesson value is from vocabulary component" +this.lesson)
   
  }

  ngOnInit(): void {
    this.lesson = this.commondata.getlessonValue();
    this.commondata.sethidedisplay("none");
    
  }

}
