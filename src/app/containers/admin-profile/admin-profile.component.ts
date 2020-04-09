import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  users = '';

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.AllUsers();
  }

  AllUsers() {
    this.usuariosService.getUsersAll().subscribe((usuarios: any) => {
      this.users = usuarios;
      console.log(this.users);
    });
  }

  UsersById(id: number){
    this.usuariosService.getUsersById(id).subscribe( msn => {
    });
  }

  UsersByName(name: string){
    this.usuariosService.getUsersByName(name).subscribe( msn => {
    });
  }

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
