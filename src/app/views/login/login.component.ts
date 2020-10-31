import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  emailInputFocused = false;
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private auth: AuthService) { }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }
  onBlur(event) {
    this.emailInputFocused = false;
  }

  onFocus(event) {
    this.emailInputFocused = true;
  }
  login() {
    if(this.signInForm.invalid) {
      return;
    }
    this.auth.login(this.email.value, this.password.value);
  }

}
