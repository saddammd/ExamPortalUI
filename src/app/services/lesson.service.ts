import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Lesson } from '../classes/lesson';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { LessonList } from '../classes/lesson-list';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  baseUrl: string = "http://localhost:5000/examportal/examportal/lesson";
  lessonlist_url: string = "http://localhost:5000/examportal/examportal/lesson_list"
  lesson_submenu: string = "http://localhost:5000/examportal/examportal/lesson/"

  constructor(private http: HttpClient) { }

  getLesson() : Observable<Lesson[]>{
    return this.http.get<Lesson[]>(this.baseUrl).pipe(
      map(response=>response)
    )
  }

  getLessonList():Observable<LessonList[]>{
    return this.http.get<LessonList[]>(this.lessonlist_url).pipe(
      map(response=>response)
    )
  }

  getLessonSubMenu(id:number):Observable<Lesson>{
    return this.http.get<Lesson>(this.lesson_submenu+id).pipe(
      map(response=>response)
    )
  }
}
