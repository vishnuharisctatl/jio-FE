import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  get email() { return this.authForm.get('email') }

  get password() { return this.authForm.get('password') }

  login() {
    if (this.authForm.invalid) {
      this.submitted = true;
      return;
    }
  }
}
