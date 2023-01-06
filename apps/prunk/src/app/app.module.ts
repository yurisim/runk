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
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocalService } from '../local/local.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PrComponent,
    ReviewScaleComponent,
    PersonDataComponent,
    NavbarComponent,
  ],
  imports: [
    HttpClientModule,
    ApolloModule,
    MaterialModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:3333/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
    LocalService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
