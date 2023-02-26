import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(public commondata: CommonDataService) { }

  ngOnInit(): void {
  }

  hidedisplay(){
    this.commondata.sethidedisplay("none");
    this.commondata.setflexvalue("inline");
  }

}
