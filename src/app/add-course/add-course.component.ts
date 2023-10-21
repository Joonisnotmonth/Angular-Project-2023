import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestDataSource } from '../model/rest.datasource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private restData: RestDataSource,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      teacher: ['', Validators.required],
      photo: ['', Validators.required],
      hours: ['', Validators.required],
      description: ['', Validators.required],
    });

    // Listen for changes in the 'subject' field
    this.form.get('subject')?.valueChanges.subscribe((selectedSubject) => {
      // Update the 'photo' field based on the selected subject
      this.form.get('photo')?.setValue(`/assets/images/${selectedSubject}.png`);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);

      this.restData.addCourse(this.form.value).subscribe(
        (response) => {
          if (response.message) {
            console.log('Course added successfully!', response.message);
          } else {
            console.error('Unexpected response format:', response);
          }
        },
        (error) => {
          console.error('Error adding the course:', error);
        }
      );
    }
    this.router.navigateByUrl('/courses');
  }
}
