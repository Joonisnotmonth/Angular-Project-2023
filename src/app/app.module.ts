import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseModule } from './course/course.module';
import { RouterModule } from '@angular/router';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DetailComponent } from './detail/detail.component';
import { RestDataSource } from './model/rest.datasource';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,

    DetailComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CourseModule,
    RouterModule.forRoot([
      { path: 'courses', component: CourseComponent },
      { path: 'list', component: ListDetailComponent },
      { path: 'add-course', component: AddCourseComponent },
      { path: 'courses/:courseID', component: DetailComponent },
      { path: '**', redirectTo: '/courses' },
    ]),
  ],
  providers: [RestDataSource],
  bootstrap: [AppComponent],
})
export class AppModule {}
