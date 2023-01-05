import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PrComponent } from './pr/pr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewScaleComponent } from './components/review-scale/review-scale.component';
import { FormsModule } from '@angular/forms';
import { PersonDataComponent } from './components/person-data/person-data.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PrComponent,
    ReviewScaleComponent,
    PersonDataComponent,
  ],
  imports: [
    MaterialModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
