import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from '../../local/local.service';

@Component({
  selector: 'runk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _router: Router, private local: LocalService) {}

  passwordPattern = '^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$';

  hide = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.passwordPattern),
      Validators.minLength(8),
    ]),
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.local.setLogin('login', 'true')
      this._router.navigate(['home']);
    }
  }
}
