import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BujeroDataService } from '../../bujero-data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  email = "";
  password = "";
  repeatPassword = "";

  constructor(public router: Router, private bujeroDataService: BujeroDataService,) { }

  registrarse() {
    if (this.password == this.repeatPassword) {
      const usuario = this.bujeroDataService.obtenerUsuario(this.email);
      if (usuario) {
        alert("El usuario ya existe");
      } else {
        const usuario = { email: this.email, contrasenia: this.password, cultivos: [], favoritos: []}
        this.bujeroDataService.agregarUsuario(usuario);
        sessionStorage.setItem("usuario", this.email);
        this.router.navigate(['/home']);
      }
    } else {
      alert("Las contraseñas no coinciden");
    }
  }


  
  irLogin() {
    this.router.navigate(['/login']);
  }

}
