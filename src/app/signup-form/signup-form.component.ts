import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainsSpace
    ], 
    UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required),
    topics: new FormArray([])
  });

  constructor(fb: FormBuilder) {
    fb.group({
      name: ['', Validators.required,],
      contact: fb.group({
        email: fb.control('', Validators.email),
        phone: []
      }),
      topics: fb.array([])
    });
  }

  loging() {
    this.form.setErrors({'invalidUsernameOrPassword': true});
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: AbstractControl) {
    let topicIndex = this.topics.controls.indexOf(topic);
    this.topics.removeAt(topicIndex);
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get topics() {
    return (this.form.get('topics') as FormArray);
  }

}
