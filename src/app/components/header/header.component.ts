import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  genres: '';

  constructor(
    public peliculasService: PeliculasService,
    public usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.fetchGenresAll();
  }

  fetchGenresAll() {
    this.peliculasService.getGenresAll().subscribe((pelicula: any) => {
      this.genres = pelicula.genres;
    });
  }

  logout() {
    const token = localStorage.getItem('authToken');
    this.usuarioService.logout(token)
      .subscribe(res => console.log(res));
    this.usuarioService.setUser(undefined);
    localStorage.removeItem('authToken');
  }

}
