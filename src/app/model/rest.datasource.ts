import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = ` http://localhost:3000/`;
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl + 'courses');
  }

  getCourseByID(id: string): Observable<Course> {
    return this.http.get<Course>(this.baseUrl + 'courses/' + id);
  }

  createCourse(coursedata: any) {
    return this.http.post(this.baseUrl, coursedata);
  }
}