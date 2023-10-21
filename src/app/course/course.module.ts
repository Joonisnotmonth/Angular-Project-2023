import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { CourseComponent } from './course.component';
import { ListDetailComponent } from '../list-detail/list-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CourseComponent, ListDetailComponent],
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  exports: [CourseComponent],
})
export class CourseModule {}
