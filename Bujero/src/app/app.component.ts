import { Component } from '@angular/core';
import { SharedServiceService } from '../app/shared-service.service';
import { Router } from '@angular/router';
import { BujeroDataService } from '../app/bujero-data.service';


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

  constructor(private shareService: SharedServiceService,public router: Router, private bujeroDataService: BujeroDataService, ) {
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
    let usuario = this.bujeroDataService.getUserFromSessionStorage();
    this.title_pagina = "Favoritos";
    if(this.select_fav == false && usuario){
      this.select_fav = true;
    }
    this.select_busqueda = false;
    this.select_cultivos = false;
    this.select_home = false;
  }

  toMisCultivos() {
    let usuario = this.bujeroDataService.getUserFromSessionStorage();
    if(this.select_cultivos == false && usuario){
      this.select_cultivos = true;
    }
    this.select_busqueda = false;
    this.select_fav = false;
    this.select_home = false;

    this.title_pagina = "Mis cultivos";
  }

  iniciarSesion(){
    if (this.bujeroDataService.getUserFromSessionStorage()) {
      this.router.navigate(['/log-out']);
      this.title_pagina = "Mi Perfil";

    } else {
      this.router.navigate(['/login']);
      this.title_pagina = "Login";
    }
    this.select_cultivos = false;
    this.select_busqueda = false;
    this.select_fav = false;
    this.select_home = false;
  }


}
