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
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])
  });

  onSubmit(): void {
    console.log("On submit");
    if (this.loginForm.invalid) {
      console.log("invalid")
      return;
    }
    console.log("this is fun!")
    //Login successful code here!
  }
}
