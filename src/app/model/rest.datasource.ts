import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = ` http://localhost:8080/`;
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl + 'courses');
  }

  getCourseByID(id: string): Observable<Course> {
    return this.http.get<Course>(this.baseUrl + 'courses/' + id);
  }

  addCourse(courseData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'courses/', courseData);
  }

  deleteCourseById(id: number): Observable<void> {
    const url = `${this.baseUrl}courses/${id}`;
    return this.http.delete<void>(url);
  }
}
