import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { RestDataSource } from '../model/rest.datasource';
import { Course } from '../model/course.model';
import { List } from '../model/list.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  courseData: Course | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private course: RestDataSource,
    private list: List,
    private router: Router,
    private restData: RestDataSource
  ) {}

  ngOnInit(): void {
    let courseId = this.activatedRoute.snapshot.paramMap.get('courseID');
    console.log(courseId);
    courseId &&
      this.course.getCourseByID(courseId).subscribe((result) => {
        console.warn(result);
        console.log(typeof result);
        this.courseData = result;
      });
  }

  addCouseToList(course: Course) {
    this.list.addLine(course);
  }

  removeCourse(courseId: number) {
    this.restData.deleteCourseById(courseId).subscribe(
      () => {
        console.log('Course removed successfully');
        // Add any additional handling you need here, e.g., refresh the list or navigate to another page.
      },
      (error) => {
        console.error('Error removing course:', error);
      }
    );
  }
}
