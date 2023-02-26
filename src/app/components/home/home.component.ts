import { style } from '@angular/animations';
import { Location } from '@angular/common';
import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hidden: boolean = false;

  constructor(private commondata: CommonDataService) { }

  ngOnInit(): void {

    
    }

    displayValue(){
      //this.commondata.sethidedisplay("inline");

    }
}
