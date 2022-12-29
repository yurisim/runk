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
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
  }
}
