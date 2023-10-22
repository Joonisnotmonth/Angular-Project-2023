import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../model/course.model';
import { CourseRepository } from '../model/course.repository';

import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  selectSubject: string | undefined;
  coursesPerPage = 4;
  selectedPage = 1;

  constructor(
    private repository: CourseRepository,
    private router: Router,
    private restData: RestDataSource
  ) {}

  get courses(): Course[] {
    let pageIndex = (this.selectedPage - 1) * this.coursesPerPage;
    return this.repository
      .getCourses(this.selectSubject)
      .slice(pageIndex, pageIndex + this.coursesPerPage);
  }

  get subject(): string[] {
    return this.repository.getSubject();
  }

  changeSubject(newSubject?: string) {
    this.selectedPage = 1;
    this.selectSubject = newSubject;
  }

  changePageSize(newSize: number) {
    this.coursesPerPage = Number(newSize);
    this.changePage(1);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.repository.getCourses(this.selectSubject).length /
          this.coursesPerPage
      )
    )
      .fill(0)
      .map((x, i) => i + 1);
  }

  removeCourse(courseId: number) {
    this.restData.deleteCourseById(courseId).subscribe(
      () => {
        console.log('Course removed successfully');
      },
      (error) => {
        console.error('Error removing course:', error);
      }
    );
    this.router.navigateByUrl('/courses');
  }
}
