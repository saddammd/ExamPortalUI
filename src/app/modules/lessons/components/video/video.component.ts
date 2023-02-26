import { LocationStrategy } from '@angular/common';
import { SimpleChanges } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/classes/lesson';
import { CommonDataService } from 'src/app/services/common-data.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  lesson: Lesson;

  constructor(public commondata:CommonDataService) { 
  }
  

  ngDoCheck(){
    this.lesson = this.commondata.getlessonValue();
    this.commondata.sethidedisplay("inline");
    this.commondata.setflexvalue("flex");
    console.log("lesson value is from video component" +this.lesson)
  }

  ngOnInit(): void {
    this.commondata.sethidedisplay("none");
    this.commondata.setrouter2width("78%");
  }

}
