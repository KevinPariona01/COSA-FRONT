import { Component, OnInit } from '@angular/core';
import { parametrosServices } from '../../parametros/services/parametros.services';


@Component({
  selector: 'app-get-token',
  templateUrl: './get-token.component.html',
  styleUrls: ['./get-token.component.css']
})
export class GetTokenComponent implements OnInit {

  constructor(
    private parametroServices: parametrosServices,
  ) { }

  ngOnInit(): void {
  }


  generarToken(){
    let parametro = {
      eIdUsuario: "JTERRONES"
    }
    this.parametroServices.generartoken2(parametro).then(res => {
      if (res.estado) {
        console.log(res.content.mensaje);        
        localStorage.removeItem('ID_TOKEN');
        localStorage.setItem('ID_TOKEN', res.content.mensaje);
      } else {                          
        console.log(res); 
      }
    });
  }

}
