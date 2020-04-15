import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public errorMsg: string;
  public successMsg: string;

  constructor(
    private usuariosService: UsuariosService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }


  register(registerForm: NgForm){
    const user = registerForm.value;
    this.usuariosService.register(user)
    .subscribe(
      (res: HttpResponse<object>) => {
        this.successMsg = res['message'];
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
      },
      (error: HttpErrorResponse) => {
      this.errorMsg = error.error.message;
      setTimeout(() =>  this.errorMsg = '' , 2000);
      }
    );
  }
}

