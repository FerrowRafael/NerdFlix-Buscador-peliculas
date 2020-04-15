import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgForm } from '@angular/forms';

import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message: string;
  public errorMsg: string;
  public successMsg: string;

  constructor(
    private usuariosService: UsuariosService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this.usuariosService.login(loginForm.value)
        .subscribe(
          (res: HttpResponse<object>) => {
            this.successMsg = res['message'];
            localStorage.setItem('authToken', res['token']);
            this.usuariosService.login(res['user']);
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000);
          },

          (error: HttpErrorResponse) => {
          this.errorMsg = error.error.message;
          setTimeout(() =>  this.errorMsg = '' , 2000);
         }
        );
    }
  }
}
