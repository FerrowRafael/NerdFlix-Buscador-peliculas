import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  users = '';
  usuario = '';
  id = 7;

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    // this.UsersById(this.id);
  }

  // UsersById(id: number){
  //   this.usuariosService.getUsersById(id).subscribe( user => {
  //     this.usuario = user;
  //     console.log(this.users);
  //   });
  // }

  UserModifiedById(id: number, body: any){
    this.usuariosService.modifiedUserById(id, body ).subscribe( msn => {
    });
  }

  // deleteUserById(id: number){
  //   this.usuariosService.deleteUserById(id).subscribe( msn => {
  //     console.log(msn);
  //     const index = this.todoList.findIndex( item => item.id === id);
  //     this.todoList.splice(index, 1);
  //   });
  // }
}
