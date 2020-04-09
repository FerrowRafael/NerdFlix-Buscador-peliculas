import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  key = 'f1cbc5636aa2f2d3b7c9f1c1ca7c91de';
  name = '';

  constructor(
    private http: HttpClient
  ) { }

  // PELICULAS
  getMoviesByTitle(name: string){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=${name}`);
  }

  // Peliculas por ID
  getMoviesById(id: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}&language=en-US`);
  }

  // Peliculas Recomendas por ID
  getMoviesRecommendedById(id: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.key}&language=en-US&page=1`);
  }

  // Peliculas Similares por ID
  getMoviesSimilarById(id: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.key}&language=en-US&page=1`);
  }

  // Peliculas populares
  getMoviesPopularAll(){
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=en-US&page=1`);
  }

  // Peliculas estreno
  getMoviesEstrenoAll(){
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.key}&language=en-US&page=1`);
  }

  // GENEROS
  getGenresAll(){
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.key}&language=es-ES`);
  }

  // MULTI BUSQUEDA
  getMultiSearchByName(name: string){
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.key}&language=en-US&query=${name}&page=1&include_adult=false`);
  }

  // ACTORES
  getPeopleByName(name: string){
    return this.http.get(`https://api.themoviedb.org/3/search/person?api_key=${this.key}&language=en-US&query=${name}&page=1&include_adult=false`);
  }

  // DETALLES PELICULA
  getDetailsById(id: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}&append_to_response=credits&language=es-ES`);
  }

  // VER TRAILER YOUTUBE
  getYouTubeById(id: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.key}&language=en-US`);
  }
}
