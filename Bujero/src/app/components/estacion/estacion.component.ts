import { Component } from '@angular/core';

@Component({
  selector: 'app-estacion',
  templateUrl: './estacion.component.html',
  styleUrls: ['./estacion.component.css']
})
export class EstacionComponent {
  

  toggleStar(planta: any) {
    planta.star = !planta.star;
  }

  toggleMisCultivos(planta: any) {
    planta.misCultivos = !planta.misCultivos;
  }


  plantas = [
    {
      nombre: 'Coleo',
      path: 'assets/img/Coleo.png', 
      misCultivos: true,
      star: false
    },{
      nombre: 'Primula',
      path: 'assets/img/primula.jpg',
      misCultivos: false,
      star: true
    },{
      nombre: 'Margarita',
      path: 'assets/img/margaritas.jpg',
      misCultivos: false,
      star: true
    },{
      nombre: 'Girasol',
      path: 'assets/img/girasoles.png',
      misCultivos: false,
      star: false
    },{
      nombre: 'Rosa',
      path: 'assets/img/rosas.png',
      misCultivos: true,
      star: true
    },{
      nombre: 'Hortensia',
      path: 'assets/img/hortensia.png', 
      misCultivos: false,
      star: true
    },{
      nombre: 'Tulipanes',
      path: 'assets/img/tulipanes.webp', 
      misCultivos: true,
      star: true
    }
  ];

}
