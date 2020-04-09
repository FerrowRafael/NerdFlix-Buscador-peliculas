import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { DetailsComponent } from './containers/details/details.component';
import { ActoresComponent } from './containers/actores/actores.component';
// import { GenerosComponent } from './containers/generos/generos.component';
import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { MoviesComponent } from './containers/movies/movies.component';
import { AdminProfileComponent } from './containers/admin-profile/admin-profile.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detalles/:id', component: DetailsComponent},
  {path: 'actores', component: ActoresComponent},
  // {path: 'generos', component: GenerosComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: ProfileComponent},
  {path: 'adminperfil', component: AdminProfileComponent},
  {path: 'movies/:name', component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
