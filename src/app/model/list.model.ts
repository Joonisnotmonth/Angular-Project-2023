import { Injectable } from '@angular/core';
import { Course } from './course.model';

@Injectable()
export class List {
  contains(course: Course) {
    throw new Error('Method not implemented.');
  }
  public lines: ListLine[] = [];
  public itemCount: number = 0;

  addLine(course: Course, quantity: number = 1) {
    let line = this.lines.find((line) => line.course.id == course.id);
    if (line != undefined) {
      line.quantity == quantity; // when add duplicate course, the course will be not added to list.
      console.log('You have added this course alredy');
    } else {
      this.lines.push(new ListLine(course, quantity));
    }
    this.recalculate();
  }

  updateQuantity(course: Course, quantity: number) {
    let line = this.lines.find((line) => line.course.id == course.id);
    if (line != undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: number) {
    let index = this.lines.findIndex((line) => line.course.id == id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
  }

  private recalculate() {
    this.itemCount = 0;
    this.lines.forEach((l) => {
      this.itemCount += l.quantity;
    });
  }
}

export class ListLine {
  constructor(public course: Course, public quantity: number) {}
  get lineTotal() {
    return this.quantity;
  }
}
