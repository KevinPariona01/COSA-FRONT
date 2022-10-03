import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginServices } from '../../services/login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public typepassword:String="password";
  public iconpassword:String ="visibility_off";
  dataSource = [];
  dataLogin = {
    c_username: "",
    c_clave: ""
  };
  constructor(
    public router: Router,
    private usuarioService: loginServices
  ) {
   }

  ngOnInit(): void {
  }

  login(e) {

    console.log(this.dataLogin);   

    let parametros = {
      usuario: this.dataLogin.c_username,
      clave: this.dataLogin.c_clave
    }
    
    this.usuarioService.obtenerAcceso(parametros).then(res => {
      if (res.estado == "ACCESO_PERMITIDO") {
        console.log(res); 
        console.log("asd");        
        localStorage.setItem('usuario', res.usuario); 
        localStorage.setItem('ID_TOKEN', res.token); 
        this.router.navigate(['/lineaBase']);
      } else {                          

      }
    });
       
    /* this.usuarioService.listar({ nuIdPersona: 84 }).then(res => {
      if (res.estado) {
        console.log(res);

      } else {

      }
    }); */

  }

 /*  login(){
    console.log("LOG");
    this.router.navigate(['/lineaBase']);
  } */

}
