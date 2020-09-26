import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, IUser } from '../../auth.service'

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
    city: new FormControl('', [Validators.required]),
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
  get city() {
    return this.registerForm.get('city');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    const user: IUser = {
      email: this.email.value,
      password: this.password.value,
      name: this.name.value,
      phone: this.phone.value,
      city: this.city.value
    }
    this.auth.register(user)
  }

}
