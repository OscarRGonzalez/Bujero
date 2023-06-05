import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BujeroDataService } from '../../bujero-data.service';

import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public router: Router, private bujeroDataService: BujeroDataService, private shareService: SharedServiceService,) { }

  email = "";
  password = "";

  iniciarSesion(){
    console.log(this.email);
    console.log(this.password);
    const usuario = this.bujeroDataService.obtenerUsuario(this.email);
    console.log(usuario);
    if (usuario) {
      if (usuario.contrasenia == this.password) {
        sessionStorage.setItem("usuario", this.email);
        this.router.navigate(['/home']);
      } else {
        alert("Contraseña incorrecta");
      }
    } else {
      alert("Usuario no encontrado");
    }

  }

  irRegistrar() {
    this.router.navigate(['/registro']);
    this.shareService.setParam("Registro")
  }

}
