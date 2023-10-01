import { Component } from '@angular/core';
import { detail } from '../model/detail.model';
import { ActivatedRoute } from '@angular/router';
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
    private list: List
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
}
