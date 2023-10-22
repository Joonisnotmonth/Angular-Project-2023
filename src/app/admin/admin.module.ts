import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AddCourseComponent } from '../add-course/add-course.component';

@NgModule({
  declarations: [AdminComponent, AddCourseComponent],
  imports: [AdminComponent, AddCourseComponent],
})
export class AdminModule {}
