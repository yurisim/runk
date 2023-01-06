import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

const MaterialModules = [
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatStepperModule,
  MatDividerModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatMenuModule,
];

@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules],
  providers: [],
})
export class MaterialModule {}
