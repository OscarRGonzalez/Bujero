import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})


export class BusquedaComponent {


  plantas = [
    {
      nombre: 'Coleo',
      path: 'assets/img/Coleo.png'
    },{
      nombre: 'Primula',
      path: 'assets/img/primula.jpg'
    },{
      nombre: 'Margarita',
      path: 'assets/img/margaritas.jpg'
    },{
      nombre: 'Girasol',
      path: 'assets/img/girasoles.png'
    },{
      nombre: 'Rosa',
      path: 'assets/img/rosas.png'
    },{
      nombre: 'Hortensia',
      path: 'assets/img/hortensia.png' 
    },{
      nombre: 'Tulipanes',
      path: 'assets/img/tulipanes.webp'
    }
  ];

  searchTerm: string = '';
  plantasFiltradas: any[] = [];

  filtrarPlantas() {
    this.plantasFiltradas = this.plantas.filter(planta =>
      planta.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


}
