import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.scss']
})
export class ActoresComponent implements OnInit {

  name: '';
  actores: any;
  imageURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  notImage = 'https://cinedata.uy/contenidos/uploads/2018/04/afiche-por-defecto.jpg';

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService
  ) { }

  ngOnInit(): void {
  }

  fetchPeopleByName(name: string) {
    this.peliculasService.getPeopleByName(name).subscribe((actor: any) => {
      this.actores = actor.results;
    });
  }

  getImage(actor: any){
    if (actor.profile_path){
      return this.imageURL + (actor.profile_path);
    }
    else {
      return this.notImage;
    }
  }

}
