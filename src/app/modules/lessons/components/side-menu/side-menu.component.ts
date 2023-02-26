import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/classes/lesson';
import { LessonList } from 'src/app/classes/lesson-list';
import { CommonDataService } from 'src/app/services/common-data.service';
import { LessonService } from 'src/app/services/lesson.service';
import { LocationStrategy } from '@angular/common'
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

lessonArray:LessonList[];
submenu: Lesson;
lessondisplay: string;
lessonObject: Lesson;
hidesidemenu: string;
hideaccordianitem: string;
hidechevrons: string;
hidecirclemark: string;
minwidth: string;



constructor(public lessonService: LessonService,
  public commondata: CommonDataService, private location: LocationStrategy, private router: Router) {
    history.pushState(null, null, window.location.href);
    // check if back or forward button is pressed.
    this.location.onPopState(() => {
        history.pushState(null, null, "");
        this.commondata.setflexvalue("inline");
        this.commondata.sethidedisplay("none");
    }); 
  }

ngOnInit(): void {
this.getLessonsList()
this.lessondisplay = "inline";
this.hidechevrons = "none";
this.hidecirclemark = "block"
this.minwidth = "20vw"
}


getLessonsList(){

this.lessonService.getLessonList().subscribe(data=>{
this.lessonArray = data;
})
}

getLessonDetails(id:number){
  this.lessonService.getLessonSubMenu(id).subscribe(data=>{
    this.submenu = data;
    this.lessonObject = this.submenu;
    this.commondata.setlessonValue(this.lessonObject);
  })
  console.log("lesson Object from side-menu" +this.commondata.getlessonValue());
  
}

getLessonExcercises(id:number){
  //this.getLessonDetails(id);
  if(this.commondata.gethidedisplay()==='none'){
    this.commondata.sethidedisplay("inline");
    this.commondata.setflexvalue("flex");
  }
  
}

ngDoCheck(){
  if(this.commondata.gethidedisplay()!=='none'){
    console.log("ng do check from side menu if")
    this.lessondisplay = 'none';
  }
  else if(this.commondata.gethidedisplay()==='none'){
    console.log("ng do check from side menu if else")
    this.lessondisplay = 'inline';
  }
}

hideSideMenu(){
  this.hidesidemenu = "4vw"; 
  this.minwidth = "4vw";
  this.hideaccordianitem = "none"
  this.hidechevrons = "block";
  this.hidecirclemark = "none";
  this.commondata.setrouter2width("95%");
  console.log("hidesidemenu valled")

}

openSideMenu(){
  this.hidesidemenu = "20vw";
  this.minwidth = "20vw";
  this.hideaccordianitem = "block";
  this.hidechevrons = "none";
  this.hidecirclemark = "block";
  this.commondata.setrouter2width("78%");
  console.log("opensidemenu called")
}

}
