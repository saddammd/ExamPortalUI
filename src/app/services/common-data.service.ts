import { Injectable } from '@angular/core';
import { Lesson } from '../classes/lesson';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  
  private hideElement: boolean;
  private lessonValue: Lesson;
  private hidedisplay: string;
  private flexvalue: string;
  private router2width: string;

  constructor() {
    
   }

  public sethideElement(booleanValue: boolean){
    this.hideElement = booleanValue;
  }

  public gethideElement(){
    return this.hideElement;
  }

  public getlessonValue(){
    return this.lessonValue;
  }
  public setlessonValue(value: Lesson){
    this.lessonValue=value;
  }

  public gethidedisplay(){
    return this.hidedisplay;
  }

  public sethidedisplay(value: string){
    this.hidedisplay = value;
  }

  public getflexvalue() {
    return this.flexvalue;
  }

  public setflexvalue(value: string){
    this.flexvalue = value;
  }

  public getrouter2width() {
    return this.router2width;
  }

  public setrouter2width(value: string){
    this.router2width = value;
  }
}
