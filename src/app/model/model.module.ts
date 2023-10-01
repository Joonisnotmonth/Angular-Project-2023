import { NgModule } from '@angular/core';
import { CourseRepository } from './course.repository';
import { StaticDataSource } from './static.datasource';
import { List } from './list.model';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    CourseRepository,
    List,
    StaticDataSource,
    { provide: StaticDataSource, useClass: RestDataSource },
  ],
})
export class ModelModule {}
