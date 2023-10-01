import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { CourseRepository } from '../model/course.repository';
import { List } from '../model/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'course',
  templateUrl: 'course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  selectSubject: string | undefined;
  coursesPerPage = 4;
  selectedPage = 1;

  orderView = false;
  catView = true;

  constructor(
    private repository: CourseRepository,
    private list: List,
    private router: Router
  ) {}

  get courses(): Course[] {
    // return this.repository.getCourses();
    // return this.repository.getCourses(this.selectSubject);
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

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.coursesPerPage = Number(newSize);
    this.changePage(1);
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

  private clickOrder() {
    this.orderView = true;
    this.catView = false;
  }
  private clickCat() {
    this.orderView = false;
    this.catView = true;
  }

  onClickOrder() {
    this.clickOrder();
  }
  onClickList() {
    this.clickCat();
  }

  addCouseToList(course: Course) {
    console.log(course);
    this.list.addLine(course);
  }
}
