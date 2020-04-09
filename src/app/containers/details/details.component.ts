import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  imageURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  notImage = 'https://cinedata.uy/contenidos/uploads/2018/04/afiche-por-defecto.jpg';
  youtube = 'https://www.youtube.com/watch?v=';
  detalle: any;
  genres: any;
  companies: any;
  recommended: any;
  similars: any;
  actores: any;
  trailer: any;
  video: any;

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // this.fetchMoviesById(params.id);
      this.detailsById(params.id);
      this.fetchMoviesRecommendedById(params.id);
      this.fetchMoviesSimilarById(params.id);
      this.YouTubeById(params.id);
    });
  }

  // fetchMoviesById(id: number) {
  //   this.peliculasService.getMoviesById(id).subscribe((pelicula: any) => {
  //     console.log(pelicula);
  //     this.detalle = pelicula;
  //     this.genres = pelicula.genres;
  //     this.companies = pelicula.production_companies;
  //   });
  // }

  detailsById(id: number) {
    this.peliculasService.getDetailsById(id).subscribe((pelicula: any) => {
      this.detalle = pelicula;
      this.genres = pelicula.genres;
      this.companies = pelicula.production_companies;
      this.actores = pelicula.credits.cast;
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

  getImage2(recommend: any){
    if (recommend.poster_path){
      return this.imageURL + (recommend.poster_path);
    }
    else {
      return this.notImage;
    }
  }

  getImage3(detalle: any){
    if (detalle.profile_path){
      return this.imageURL + (detalle.profile_path);
    }
    else {
      return this.notImage;
    }
  }

  fetchMoviesRecommendedById(id: number) {
    this.peliculasService.getMoviesRecommendedById(id).subscribe((pelicula: any) => {
      this.recommended = pelicula.results;

    });
  }

  fetchMoviesSimilarById(id: number) {
    this.peliculasService.getMoviesSimilarById(id).subscribe((pelicula: any) => {
      this.similars = pelicula.results;

    });
  }

  YouTubeById(id: number) {
    this.peliculasService.getYouTubeById(id).subscribe((pelicula: any) => {
      this.trailer = pelicula.results[0].key;
      this.video = (this.youtube + this.trailer);

    });
  }
}
