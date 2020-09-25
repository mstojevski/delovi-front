import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service'

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get name() {
    return this.registerForm.get('name');
  }
  get place() {
    return this.registerForm.get('place');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.auth.register(this.email.value, this.password.value)
  }

}
