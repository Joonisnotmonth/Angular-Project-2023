import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class CourseRepository {
  public courses: Course[] = [];
  public subject: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    this.dataSource.getAllCourses().subscribe((data) => {
      this.courses = data;
      this.subject = data
        .map((c) => c.subject ?? '(None)')
        .filter((s, index, array) => array.indexOf(s) == index)
        .sort();
    });
  }

  getCourses(category?: string): Course[] {
    return this.courses.filter(
      (p) => category == undefined || category == p.subject
    );
  }

  getCourse(id: number): Course | undefined {
    return this.courses.find((c) => c.id == id);
  }

  getSubject(): string[] {
    return this.subject;
  }
}
