import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template-driven';
  @ViewChild('f', { static: false }) signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    console.log(this.signupForm);
  }
}
