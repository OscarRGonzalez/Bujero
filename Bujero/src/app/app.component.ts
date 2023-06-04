import { Component } from '@angular/core';
import { SharedServiceService } from '../app/shared-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bujero';
  title_pagina: any = "Home";
  select_cultivos: Boolean = false;
  select_home: Boolean = true;
  select_fav: Boolean = false;
  select_busqueda: Boolean = false;
  select_estacion: Boolean = false;

  constructor(private shareService: SharedServiceService,public router: Router ) {
    this.shareService.sharedData.subscribe(data=> { this.title_pagina=data })

  }



  toHome() {
    this.title_pagina = "Home";
    if(this.select_home == false){
      this.select_home = true;
    }
    this.select_fav = false;
    this.select_cultivos = false;
    this.select_busqueda = false;
  }

  toEstacion() {
    this.title_pagina = "Estación";
    if(this.select_estacion == false){
      this.select_estacion = true;
    }
    this.select_fav = false;
    this.select_cultivos = false;
    this.select_busqueda = false;
  }

  toSearch() {
    this.title_pagina = "Búsqueda";
    if(this.select_busqueda == false){
      this.select_busqueda = true;
    }
    this.select_fav = false;
    this.select_cultivos = false;
    this.select_home = false;
  }

  toFavs() {
    this.title_pagina = "Favoritos";
    if(this.select_fav == false){
      this.select_fav = true;
    }
    this.select_busqueda = false;
    this.select_cultivos = false;
    this.select_home = false;
  }

  toMisCultivos() {
    if(this.select_cultivos == false){
      this.select_cultivos = true;
    }
    this.select_busqueda = false;
    this.select_fav = false;
    this.select_home = false;

    this.title_pagina = "Mis cultivos";
  }
  
  iniciarSesion(){
    this.router.navigate(['/login']);
  }

}
