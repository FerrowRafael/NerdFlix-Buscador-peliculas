import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  varios = '';
  name = '';
  peliculas: any;
  imageURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  notImage = 'https://cinedata.uy/contenidos/uploads/2018/04/afiche-por-defecto.jpg';

  constructor(
    private peliculasService: PeliculasService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // this.fetchMultiSearchByName(params.name);
      this.fetchMoviesByTitle(params.name);
    });
  }

  fetchMultiSearchByName(name: string) {
    this.peliculasService.getMultiSearchByName(name).subscribe((pelicula: any) => {
      this.varios = pelicula.results;
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

  fetchMoviesByTitle(name: string) {
    this.peliculasService.getMoviesByTitle(name).subscribe((pelicula: any) => {
      this.peliculas = pelicula.results;
    });
  }




}
