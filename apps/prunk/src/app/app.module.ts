import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox'

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
