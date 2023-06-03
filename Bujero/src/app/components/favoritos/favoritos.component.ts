import { Component } from '@angular/core';
import SampleJson from '../../../assets/info_jsons/mis_cultivos.json';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  fecha_agregada: string | undefined;
  nombre: string | undefined;
  imagen_planta: string | undefined;
  nota: string | undefined;
  maniana_check: boolean | undefined;
  tarde_check: boolean | undefined;
  
  cards = SampleJson;
  seedClicked() {
    alert('Se ha enviado una solicitud de semilla');
  }
  starClicked() {
    alert('Se ha enviado una solicitud de estrella');
  }



}
