import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  authForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.authForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  get name() { return this.authForm.get('name') }

  get email() { return this.authForm.get('email') }

  get password() { return this.authForm.get('password') }

  get passwordStrength() {
    let strength = 0;
    if (this.password.value.match(/[a-z]+/)) {
      strength += 1;
    }
    if (this.password.value.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (this.password.value.match(/[0-9]+/)) {
      strength += 1;
    }
    if (this.password.value.match(/[$@#&!+}{><.,^]+/)) {
      strength += 1;

    }
    return strength;
  }

  register() {
    if (this.authForm.invalid) {
      this.submitted = true;
      return;
    }
  }

}
