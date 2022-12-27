import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(): boolean {
    return true;
  }
}
@Component({
  selector: 'runk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  matcher = new MyErrorStateMatcher();

  loginForm = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordControl: new FormControl('')
  });

  onSubmit(): void {
    //Do some stuff here
  }
}
