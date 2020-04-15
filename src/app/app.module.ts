import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

//#region Containers
import { HomeComponent } from './containers/home/home.component';
import { DetailsComponent } from './containers/details/details.component';
import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';
import { ActoresComponent } from './containers/actores/actores.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { MoviesComponent } from './containers/movies/movies.component';
//#endregion

//#region Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminProfileComponent } from './containers/admin-profile/admin-profile.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderItemDirective } from './components/slider/slider-item.directive';

//#endregion

//#region AngularMaterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


//#endregion

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ActoresComponent,
    ProfileComponent,
    MoviesComponent,
    FooterComponent,
    AdminProfileComponent,
    SliderComponent,
    SliderItemDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
