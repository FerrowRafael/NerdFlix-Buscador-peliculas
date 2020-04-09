import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  peliculasPop: any;
  peliculasEs: any;
  imageURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  notImage = 'https://cinedata.uy/contenidos/uploads/2018/04/afiche-por-defecto.jpg';
  name = '';

  constructor(
    private peliculasService: PeliculasService
  ) { }

  ngOnInit(): void {
    this.fetchMoviesPopularAll();
    this.fetchMoviesEstrenoAll();
  }

  fetchMoviesPopularAll() {
    this.peliculasService.getMoviesPopularAll().subscribe((pelicula: any) => {
      this.peliculasPop = pelicula.results;
    });
  }

  fetchMoviesEstrenoAll() {
    this.peliculasService.getMoviesEstrenoAll().subscribe((pelicula: any) => {
      this.peliculasEs = pelicula.results;
    });
  }

  getImage(pelicula: any){
    if (pelicula.poster_path){
      return this.imageURL + (pelicula.poster_path);
    }
    else {
      return this.notImage;
    }
  }

}
