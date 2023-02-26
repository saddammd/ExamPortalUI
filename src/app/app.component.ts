import { Component } from '@angular/core';
import { CommonDataService } from './services/common-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamPortalUI';
  displayValue: string;
  flexvalue: string;
  displayValue2: string;
  minwidth: string;

  constructor(public commondata:CommonDataService) { 
    this.displayValue = "none"
    this.flexvalue = "inline"
    this.minwidth = "77%"
    }

    ngDoCheck(){
      this.displayValue = this.commondata.gethidedisplay();
      this.flexvalue = this.commondata.getflexvalue();
      this.minwidth = this.commondata.getrouter2width();
      if(this.displayValue === "none"){
        this.displayValue2 = "inline";
      }
      else{
        this.displayValue2 = "none";
      }
    }

  


}


