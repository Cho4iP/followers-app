import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-form2',
  templateUrl: './course-form2.component.html',
  styleUrls: ['./course-form2.component.css']
})
export class CourseForm2Component {

  form2: any;

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    category: new FormControl('', Validators.required),
    guarantee: new FormControl('')
  });

  categories = [
    'Development',
    'Art',
    'Design'
  ];

  constructor(fb: FormBuilder) {
    this.form2 = fb.group({
      name: fb.control('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      category: ['', Validators.required],
      guarantee: []
    });
  }

  get name() {
    return this.form.get('name');
  }

  get category() {
    return this.form.get('category');
  }

  get guarantee() {
    return this.form.get('guarantee');
  }
  
}
