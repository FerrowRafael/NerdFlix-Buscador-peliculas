import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this.usuariosService.login(loginForm.value)
        .subscribe(res => {
          localStorage.setItem('authToken', res.token);
          this.usuariosService.login(res.user);
          console.log('Hola');
        });
    }
  }
}
