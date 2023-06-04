import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BujeroDataService } from '../../bujero-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public router: Router, private bujeroDataService: BujeroDataService,) { }

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
  }

}
