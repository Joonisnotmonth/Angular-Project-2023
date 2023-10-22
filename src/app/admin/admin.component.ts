import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private router: Router, private restData: RestDataSource) {}

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
